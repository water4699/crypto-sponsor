(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/hooks/metamask/useEip6963.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEip6963",
    ()=>useEip6963
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useEip6963() {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [uuids, setUuids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const activeLoadId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEip6963.useMemo[providers]": ()=>uuids ? Object.values(uuids) : []
    }["useEip6963.useMemo[providers]"], [
        uuids
    ]);
    // Never exported or exposed to a child
    function _addUuidInternal(providerDetail) {
        // Exits immediately.
        // Lazy call, will be executed in render phase.
        setUuids((prev)=>{
            if (!prev) {
                return {
                    [providerDetail.info.uuid]: providerDetail
                };
            }
            const existing = prev[providerDetail.info.uuid];
            if (!!existing && existing.info.uuid === providerDetail.info.uuid && existing.info.name === providerDetail.info.name && existing.info.rdns === providerDetail.info.rdns && existing.info.icon === providerDetail.info.icon && existing.provider === providerDetail.provider) {
                return prev;
            }
            if (existing) {
                console.log("addUuid(".concat(providerDetail.info.uuid, ") update existing."));
            } else {
                console.log("addUuid(".concat(providerDetail.info.uuid, ") add new."));
            }
            return {
                ...prev,
                [providerDetail.info.uuid]: providerDetail
            };
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEip6963.useEffect": ()=>{
            const thisLoadId = ++activeLoadId.current;
            const onEip6963AnnounceProvider = {
                "useEip6963.useEffect.onEip6963AnnounceProvider": (event)=>{
                    if ("detail" in event) {
                        const providerDetail = event.detail;
                        _addUuidInternal(providerDetail);
                    }
                }
            }["useEip6963.useEffect.onEip6963AnnounceProvider"];
            const run = {
                "useEip6963.useEffect.run": async ()=>{
                    if (thisLoadId !== activeLoadId.current) {
                        return;
                    }
                    if (isListener.current) {
                        // Already listening to events
                        console.log("window is already listening!!!");
                        return;
                    }
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    setError(undefined);
                    try {
                        window.addEventListener("eip6963:announceProvider", onEip6963AnnounceProvider);
                    } catch (e) {
                        setError(e instanceof Error ? e : new Error(String(e)));
                        return;
                    }
                    isListener.current = true;
                    try {
                        window.dispatchEvent(new Event("eip6963:requestProvider"));
                    } catch (e) {
                        window.removeEventListener("eip6963:announceProvider", onEip6963AnnounceProvider);
                        setError(e instanceof Error ? e : new Error(String(e)));
                        isListener.current = false;
                    }
                }
            }["useEip6963.useEffect.run"];
            run();
            // Unmount
            return ({
                "useEip6963.useEffect": ()=>{
                    activeLoadId.current = activeLoadId.current + 1;
                    window.removeEventListener("eip6963:announceProvider", onEip6963AnnounceProvider);
                }
            })["useEip6963.useEffect"];
        }
    }["useEip6963.useEffect"], []);
    return {
        error,
        uuids,
        providers
    };
}
_s(useEip6963, "F4SZ3N8mSG3Nh213UNMRD6zq5Bw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/metamask/useMetaMaskProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetaMaskProvider",
    ()=>MetaMaskProvider,
    "useMetaMask",
    ()=>useMetaMask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useEip6963$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/metamask/useEip6963.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
function useMetaMaskInternal() {
    _s();
    const { error: eip6963Error, providers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useEip6963$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEip6963"])();
    const [_currentProvider, _setCurrentProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [chainId, _setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [accounts, _setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const connectListenerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const disconnectListenerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const chainChangedListenerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const accountsChangedListenerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const metaMaskProviderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const hasProvider = Boolean(_currentProvider);
    var _accounts_length;
    const hasAccounts = ((_accounts_length = accounts === null || accounts === void 0 ? void 0 : accounts.length) !== null && _accounts_length !== void 0 ? _accounts_length : 0) > 0;
    const hasChain = typeof chainId === "number";
    const isConnected = hasProvider && hasAccounts && hasChain;
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMetaMaskInternal.useCallback[connect]": ()=>{
            if (!_currentProvider) {
                return;
            }
            if (accounts && accounts.length > 0) {
                // already connected
                return;
            }
            // Prompt connection
            _currentProvider.request({
                method: "eth_requestAccounts"
            });
        }
    }["useMetaMaskInternal.useCallback[connect]"], [
        _currentProvider,
        accounts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaMaskInternal.useEffect": ()=>{
            let next = undefined;
            for(let i = 0; i < providers.length; ++i){
                if (providers[i].info.name.toLowerCase() === "metamask") {
                    next = providers[i].provider;
                    break;
                }
            }
            const prev = metaMaskProviderRef.current;
            if (prev === next) {
                return;
            }
            if (prev) {
                if (connectListenerRef.current) {
                    var _prev_off, _prev_removeListener;
                    (_prev_off = prev.off) === null || _prev_off === void 0 ? void 0 : _prev_off.call(prev, "connect", connectListenerRef.current);
                    (_prev_removeListener = prev.removeListener) === null || _prev_removeListener === void 0 ? void 0 : _prev_removeListener.call(prev, "connect", connectListenerRef.current);
                    connectListenerRef.current = undefined;
                }
                if (disconnectListenerRef.current) {
                    var _prev_off1, _prev_removeListener1;
                    (_prev_off1 = prev.off) === null || _prev_off1 === void 0 ? void 0 : _prev_off1.call(prev, "disconnect", disconnectListenerRef.current);
                    (_prev_removeListener1 = prev.removeListener) === null || _prev_removeListener1 === void 0 ? void 0 : _prev_removeListener1.call(prev, "disconnect", disconnectListenerRef.current);
                    disconnectListenerRef.current = undefined;
                }
                if (chainChangedListenerRef.current) {
                    var _prev_off2, _prev_removeListener2;
                    (_prev_off2 = prev.off) === null || _prev_off2 === void 0 ? void 0 : _prev_off2.call(prev, "chainChanged", chainChangedListenerRef.current);
                    (_prev_removeListener2 = prev.removeListener) === null || _prev_removeListener2 === void 0 ? void 0 : _prev_removeListener2.call(prev, "chainChanged", chainChangedListenerRef.current);
                    chainChangedListenerRef.current = undefined;
                }
                if (accountsChangedListenerRef.current) {
                    var _prev_off3, _prev_removeListener3;
                    (_prev_off3 = prev.off) === null || _prev_off3 === void 0 ? void 0 : _prev_off3.call(prev, "accountsChanged", accountsChangedListenerRef.current);
                    (_prev_removeListener3 = prev.removeListener) === null || _prev_removeListener3 === void 0 ? void 0 : _prev_removeListener3.call(prev, "accountsChanged", accountsChangedListenerRef.current);
                    accountsChangedListenerRef.current = undefined;
                }
            }
            _setCurrentProvider(undefined);
            _setChainId(undefined);
            _setAccounts(undefined);
            metaMaskProviderRef.current = next;
            let nextConnectListener = undefined;
            let nextDisconnectListener = undefined;
            let nextChainChangedListener = undefined;
            let nextAccountsChangedListener = undefined;
            connectListenerRef.current = undefined;
            disconnectListenerRef.current = undefined;
            chainChangedListenerRef.current = undefined;
            accountsChangedListenerRef.current = undefined;
            if (next) {
                // Connect
                nextConnectListener = ({
                    "useMetaMaskInternal.useEffect": (connectInfo)=>{
                        if (next !== metaMaskProviderRef.current) {
                            return;
                        }
                        console.log("[useMetaMask] on('connect') chainId=".concat(connectInfo.chainId));
                        // Synchronize provider and chainId
                        _setCurrentProvider(next);
                        _setChainId(Number.parseInt(connectInfo.chainId, 16));
                    }
                })["useMetaMaskInternal.useEffect"];
                connectListenerRef.current = nextConnectListener;
                // Disconnect
                nextDisconnectListener = ({
                    "useMetaMaskInternal.useEffect": (error)=>{
                        if (next !== metaMaskProviderRef.current) {
                            return;
                        }
                        console.log("[useMetaMask] on('disconnect') error code=".concat(error.code));
                        // Synchronize provider and chainId
                        _setCurrentProvider(undefined);
                        _setChainId(undefined);
                        _setAccounts(undefined);
                    }
                })["useMetaMaskInternal.useEffect"];
                disconnectListenerRef.current = nextDisconnectListener;
                // ChainChanged
                nextChainChangedListener = ({
                    "useMetaMaskInternal.useEffect": (chainId)=>{
                        if (next !== metaMaskProviderRef.current) {
                            return;
                        }
                        console.log("[useMetaMask] on('chainChanged') chainId=".concat(chainId));
                        // Synchronize provider and chainId
                        _setCurrentProvider(next);
                        _setChainId(Number.parseInt(chainId, 16));
                    }
                })["useMetaMaskInternal.useEffect"];
                chainChangedListenerRef.current = nextChainChangedListener;
                // AccountsChanged
                nextAccountsChangedListener = ({
                    "useMetaMaskInternal.useEffect": (accounts)=>{
                        if (next !== metaMaskProviderRef.current) {
                            return;
                        }
                        console.log("[useMetaMask] on('accountsChanged') accounts.length=".concat(accounts.length));
                        _setCurrentProvider(next);
                        _setAccounts(accounts);
                    }
                })["useMetaMaskInternal.useEffect"];
                accountsChangedListenerRef.current = nextAccountsChangedListener;
                // One or the other
                if (next.on) {
                    var _next_on;
                    next.on("connect", nextConnectListener);
                    next.on("disconnect", nextDisconnectListener);
                    next.on("chainChanged", nextChainChangedListener);
                    (_next_on = next.on) === null || _next_on === void 0 ? void 0 : _next_on.call(next, "accountsChanged", nextAccountsChangedListener);
                } else {
                    var _next_addListener, _next_addListener1, _next_addListener2, _next_addListener3;
                    (_next_addListener = next.addListener) === null || _next_addListener === void 0 ? void 0 : _next_addListener.call(next, "connect", nextConnectListener);
                    (_next_addListener1 = next.addListener) === null || _next_addListener1 === void 0 ? void 0 : _next_addListener1.call(next, "disconnect", nextDisconnectListener);
                    (_next_addListener2 = next.addListener) === null || _next_addListener2 === void 0 ? void 0 : _next_addListener2.call(next, "chainChanged", nextChainChangedListener);
                    (_next_addListener3 = next.addListener) === null || _next_addListener3 === void 0 ? void 0 : _next_addListener3.call(next, "accountsChanged", nextAccountsChangedListener);
                }
                const updateChainId = {
                    "useMetaMaskInternal.useEffect.updateChainId": async ()=>{
                        if (next !== metaMaskProviderRef.current) {
                            return;
                        }
                        try {
                            const [chainIdHex, accountsArray] = await Promise.all([
                                next.request({
                                    method: "eth_chainId"
                                }),
                                next.request({
                                    method: "eth_accounts"
                                })
                            ]);
                            console.log("[useMetaMask] connected to chainId=".concat(chainIdHex, " accounts.length=").concat(accountsArray.length));
                            _setCurrentProvider(next);
                            _setChainId(Number.parseInt(chainIdHex, 16));
                            _setAccounts(accountsArray);
                        } catch (e) {
                            console.log("[useMetaMask] not connected!");
                            _setCurrentProvider(next);
                            _setChainId(undefined);
                            _setAccounts(undefined);
                        }
                    }
                }["useMetaMaskInternal.useEffect.updateChainId"];
                updateChainId();
            }
        }
    }["useMetaMaskInternal.useEffect"], [
        providers
    ]);
    // Unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaMaskInternal.useEffect": ()=>{
            return ({
                "useMetaMaskInternal.useEffect": ()=>{
                    const current = metaMaskProviderRef.current;
                    if (current) {
                        const chainChangedListener = chainChangedListenerRef.current;
                        const accountsChangedListener = accountsChangedListenerRef.current;
                        const connectListener = connectListenerRef.current;
                        const disconnectListener = disconnectListenerRef.current;
                        if (connectListener) {
                            var _current_off, _current_removeListener;
                            (_current_off = current.off) === null || _current_off === void 0 ? void 0 : _current_off.call(current, "connect", connectListener);
                            (_current_removeListener = current.removeListener) === null || _current_removeListener === void 0 ? void 0 : _current_removeListener.call(current, "connect", connectListener);
                        }
                        if (disconnectListener) {
                            var _current_off1, _current_removeListener1;
                            (_current_off1 = current.off) === null || _current_off1 === void 0 ? void 0 : _current_off1.call(current, "disconnect", disconnectListener);
                            (_current_removeListener1 = current.removeListener) === null || _current_removeListener1 === void 0 ? void 0 : _current_removeListener1.call(current, "disconnect", disconnectListener);
                        }
                        if (chainChangedListener) {
                            var _current_off2, _current_removeListener2;
                            (_current_off2 = current.off) === null || _current_off2 === void 0 ? void 0 : _current_off2.call(current, "chainChanged", chainChangedListener);
                            (_current_removeListener2 = current.removeListener) === null || _current_removeListener2 === void 0 ? void 0 : _current_removeListener2.call(current, "chainChanged", chainChangedListener);
                        }
                        if (accountsChangedListener) {
                            var _current_off3, _current_removeListener3;
                            (_current_off3 = current.off) === null || _current_off3 === void 0 ? void 0 : _current_off3.call(current, "accountsChanged", accountsChangedListener);
                            (_current_removeListener3 = current.removeListener) === null || _current_removeListener3 === void 0 ? void 0 : _current_removeListener3.call(current, "accountsChanged", accountsChangedListener);
                        }
                    }
                    chainChangedListenerRef.current = undefined;
                    metaMaskProviderRef.current = undefined;
                }
            })["useMetaMaskInternal.useEffect"];
        }
    }["useMetaMaskInternal.useEffect"], []);
    return {
        provider: _currentProvider,
        chainId,
        accounts,
        isConnected,
        error: eip6963Error,
        connect
    };
}
_s(useMetaMaskInternal, "NDV//I+msfLAz1b4UTj9vvqVY8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useEip6963$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEip6963"]
    ];
});
const MetaMaskContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MetaMaskProvider = (param)=>{
    let { children } = param;
    _s1();
    const { provider, chainId, accounts, isConnected, error, connect } = useMetaMaskInternal();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaMaskContext.Provider, {
        value: {
            provider,
            chainId,
            accounts,
            isConnected,
            error,
            connect
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/hooks/metamask/useMetaMaskProvider.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MetaMaskProvider, "X7FY60QydEmnckOM7hC49Vp/W1E=", false, function() {
    return [
        useMetaMaskInternal
    ];
});
_c = MetaMaskProvider;
function useMetaMask() {
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MetaMaskContext);
    if (context === undefined) {
        throw new Error("useMetaMask must be used within a MetaMaskProvider");
    }
    return context;
}
_s2(useMetaMask, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "MetaMaskProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/GenericStringStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericStringInMemoryStorage",
    ()=>GenericStringInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
;
;
var _store = /*#__PURE__*/ new WeakMap();
class GenericStringInMemoryStorage {
    getItem(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).has(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).get(key) : null;
    }
    setItem(key, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).set(key, value);
    }
    removeItem(key) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).delete(key);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store, {
            writable: true,
            value: new Map()
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InMemoryStorageProvider",
    ()=>InMemoryStorageProvider,
    "useInMemoryStorage",
    ()=>useInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/GenericStringStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const InMemoryStorageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useInMemoryStorage = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InMemoryStorageContext);
    if (!context) {
        throw new Error("useInMemoryStorage must be used within a InMemoryStorageProvider");
    }
    return context;
};
_s(useInMemoryStorage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const InMemoryStorageProvider = (param)=>{
    let { children } = param;
    _s1();
    const [storage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericStringInMemoryStorage"]());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InMemoryStorageContext.Provider, {
        value: {
            storage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/hooks/useInMemoryStorage.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(InMemoryStorageProvider, "x0i4GONcX3DIh8SIX7jgOVd5s3I=");
_c = InMemoryStorageProvider;
var _c;
__turbopack_context__.k.register(_c, "InMemoryStorageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/metamask/useMetaMaskEthersSigner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetaMaskEthersSignerProvider",
    ()=>MetaMaskEthersSignerProvider,
    "useMetaMaskEthersSigner",
    ()=>useMetaMaskEthersSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/metamask/useMetaMaskProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useMetaMaskEthersSignerInternal(parameters) {
    _s();
    const { initialMockChains } = parameters;
    const { provider, chainId, accounts, isConnected, connect, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMask"])();
    const [ethersSigner, setEthersSigner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [ethersBrowserProvider, setEthersBrowserProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [ethersReadonlyProvider, setEthersReadonlyProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const ethersSignerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const sameChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useMetaMaskEthersSignerInternal.useRef[sameChain]": (chainId)=>{
            return chainId === chainIdRef.current;
        }
    }["useMetaMaskEthersSignerInternal.useRef[sameChain]"]);
    const sameSigner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useMetaMaskEthersSignerInternal.useRef[sameSigner]": (ethersSigner)=>{
            return ethersSigner === ethersSignerRef.current;
        }
    }["useMetaMaskEthersSignerInternal.useRef[sameSigner]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaMaskEthersSignerInternal.useEffect": ()=>{
            chainIdRef.current = chainId;
        }
    }["useMetaMaskEthersSignerInternal.useEffect"], [
        chainId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaMaskEthersSignerInternal.useEffect": ()=>{
            if (!provider || !chainId || !isConnected || !accounts || accounts.length === 0) {
                ethersSignerRef.current = undefined;
                setEthersSigner(undefined);
                setEthersBrowserProvider(undefined);
                setEthersReadonlyProvider(undefined);
                return;
            }
            console.warn("[useMetaMaskEthersSignerInternal] create new ethers.BrowserProvider(), chainId=".concat(chainId));
            const bp = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(provider);
            let rop = bp;
            const rpcUrl = initialMockChains === null || initialMockChains === void 0 ? void 0 : initialMockChains[chainId];
            if (rpcUrl) {
                // Try to avoid using MetaMask Eip1193Provider for view functions in mock mode
                // MetaMask keeps a cache value of all view function calls. When using a dev node, this can be problematic and 
                // lead to nasty bugs. See README for more infos.
                rop = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(rpcUrl);
                console.warn("[useMetaMaskEthersSignerInternal] create new readonly provider ethers.JsonRpcProvider(".concat(rpcUrl, "), chainId=").concat(chainId));
            } else {
                console.warn("[useMetaMaskEthersSignerInternal] use ethers.BrowserProvider() as readonly provider, chainId=".concat(chainId));
            }
            const s = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcSigner(bp, accounts[0]);
            ethersSignerRef.current = s;
            setEthersSigner(s);
            setEthersBrowserProvider(bp);
            setEthersReadonlyProvider(rop);
        }
    }["useMetaMaskEthersSignerInternal.useEffect"], [
        provider,
        chainId,
        isConnected,
        accounts,
        initialMockChains
    ]);
    return {
        sameChain,
        sameSigner,
        provider,
        chainId,
        accounts,
        isConnected,
        connect,
        ethersBrowserProvider,
        ethersReadonlyProvider,
        ethersSigner,
        error,
        initialMockChains
    };
}
_s(useMetaMaskEthersSignerInternal, "C6JIeHYT2PJJNiq1qCzD0hQkmNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMetaMask"]
    ];
});
const MetaMaskEthersSignerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MetaMaskEthersSignerProvider = (param)=>{
    let { children, initialMockChains } = param;
    _s1();
    const props = useMetaMaskEthersSignerInternal({
        initialMockChains
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaMaskEthersSignerContext.Provider, {
        value: props,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/hooks/metamask/useMetaMaskEthersSigner.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MetaMaskEthersSignerProvider, "fLxtiqk1/nuEslMYe+h6sCuRy0M=", false, function() {
    return [
        useMetaMaskEthersSignerInternal
    ];
});
_c = MetaMaskEthersSignerProvider;
function useMetaMaskEthersSigner() {
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MetaMaskEthersSignerContext);
    if (context === undefined) {
        throw new Error("useMetaMaskEthersSigner must be used within a MetaMaskEthersSignerProvider");
    }
    return context;
}
_s2(useMetaMaskEthersSigner, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "MetaMaskEthersSignerProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/metamask/useMetaMaskProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/metamask/useMetaMaskEthersSigner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/createConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/chains/definitions/hardhat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Providers(param) {
    let { children } = param;
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]()
    }["Providers.useState"]);
    const localUrl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOCAL_RPC_URL || "http://127.0.0.1:8545";
    const sepoliaUrl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SEPOLIA_RPC_URL || "https://rpc.sepolia.org";
    const readonlyRpcs = {
        31337: localUrl
    };
    const transports = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardhat"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(localUrl),
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(sepoliaUrl)
    };
    const chains = [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardhat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"]
    ];
    const wagmiConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConfig"])({
        chains,
        connectors: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injected"])()
        ],
        transports,
        ssr: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: wagmiConfig,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RainbowKitProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetaMaskProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$metamask$2f$useMetaMaskEthersSigner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetaMaskEthersSignerProvider"], {
                        initialMockChains: readonlyRpcs,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorageProvider"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/providers.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/providers.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/providers.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/providers.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/providers.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/providers.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Providers, "qFhNRSk+4hqflxYLL9+zYF5AcuQ=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_8b251698._.js.map