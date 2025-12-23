// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title Encrypted sponsor deal manager using FHE
/// @notice Minimal example that manages encrypted sponsorship budgets on-chain.
/// @dev This contract is intentionally simple but demonstrates an end-to-end FHE flow:
///      - Sponsors create deals with an encrypted initial budget
///      - Budgets can be updated with encrypted deltas
///      - The current encrypted budget can be retrieved and later decrypted off-chain
contract EncryptedSponsorDeal is SepoliaConfig {
    struct Deal {
        address sponsor;
        address creator;
        string title;
        string description;
        euint32 budget;
        bool active;
    }

    uint256 private _nextDealId = 1;
    mapping(uint256 => Deal) private _deals;

    /// @notice Emitted when a new sponsor deal is created.
    /// @param dealId The id of the created deal
    /// @param sponsor The address funding the deal
    /// @param creator The creator / recipient of the deal
    event DealCreated(uint256 indexed dealId, address indexed sponsor, address indexed creator);

    /// @notice Emitted when an existing deal budget is updated.
    /// @param dealId The id of the updated deal
    event DealBudgetUpdated(uint256 indexed dealId);

    /// @notice Emitted when a deal is closed.
    /// @param dealId The id of the closed deal
    event DealClosed(uint256 indexed dealId);

    /// @notice Creates a new encrypted sponsor deal.
    /// @param creator The creator / recipient of the sponsorship
    /// @param title A short human-readable title
    /// @param description A longer free-form description
    /// @param encryptedBudget The encrypted initial budget
    /// @param inputProof The FHE input proof used to verify encryptedBudget
    /// @return dealId The id of the newly created deal
    function createDeal(
        address creator,
        string calldata title,
        string calldata description,
        externalEuint32 encryptedBudget,
        bytes calldata inputProof
    ) external returns (uint256 dealId) {
        require(creator != address(0), "creator is zero address");
        require(bytes(title).length > 0, "title cannot be empty");
        require(bytes(description).length > 0, "description cannot be empty");
        require(creator != msg.sender, "creator cannot be the same as sponsor");

        euint32 budgetValue = FHE.fromExternal(encryptedBudget, inputProof);

        dealId = _nextDealId++;

        Deal storage d = _deals[dealId];
        d.sponsor = msg.sender;
        d.creator = creator;
        d.title = title;
        d.description = description;
        d.budget = budgetValue;
        d.active = true;

        // Allow this contract and the sponsor to later decrypt the budget
        FHE.allowThis(d.budget);
        FHE.allow(d.budget, msg.sender);
        FHE.allow(d.budget, creator);

        emit DealCreated(dealId, msg.sender, creator);
    }

    /// @notice Increases the encrypted budget of an existing active deal.
    /// @param dealId The id of the target deal
    /// @param encryptedDelta The encrypted amount to add to the budget
    /// @param inputProof The FHE input proof used to verify encryptedDelta
    function increaseBudget(
        uint256 dealId,
        externalEuint32 encryptedDelta,
        bytes calldata inputProof
    ) external {
        require(dealId > 0 && dealId < _nextDealId, "deal does not exist");
        Deal storage d = _deals[dealId];
        require(d.active, "deal is not active and cannot be modified");
        require(d.sponsor == msg.sender, "only the deal sponsor can increase budget");

        euint32 delta = FHE.fromExternal(encryptedDelta, inputProof);
        d.budget = FHE.add(d.budget, delta);

        FHE.allowThis(d.budget);
        FHE.allow(d.budget, msg.sender);
        FHE.allow(d.budget, d.creator);

        emit DealBudgetUpdated(dealId);
    }

    /// @notice Marks a deal as closed. The encrypted budget remains stored but cannot be modified.
    /// @param dealId The id of the target deal
    function closeDeal(uint256 dealId) external {
        require(dealId > 0 && dealId < _nextDealId, "deal does not exist");
        Deal storage d = _deals[dealId];
        require(d.active, "deal is already closed");
        require(d.sponsor == msg.sender, "only the deal sponsor can close the deal");

        d.active = false;

        emit DealClosed(dealId);
    }

    /// @notice Returns basic metadata for a deal.
    function getDealMeta(uint256 dealId)
        external
        view
        returns (address sponsor, address creator, string memory title, string memory description, bool active)
    {
        require(dealId > 0 && dealId < _nextDealId, "deal does not exist");
        Deal storage d = _deals[dealId];
        return (d.sponsor, d.creator, d.title, d.description, d.active);
    }

    /// @notice Returns the current encrypted budget of a deal.
    /// @dev The returned value is an encrypted handle that can later be decrypted off-chain via FHEVM.
    function getEncryptedBudget(uint256 dealId) external view returns (euint32) {
        require(dealId > 0 && dealId < _nextDealId, "deal does not exist");
        Deal storage d = _deals[dealId];
        return d.budget;
    }

    /// @notice Returns the total number of deals created.
    /// @dev Deal IDs start from 1, so valid IDs are 1 to getDealCount().
    function getDealCount() external view returns (uint256) {
        return _nextDealId - 1;
    }
}
