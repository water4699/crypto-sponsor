import { Lock } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Handshake icon */}
          <path
            d="M12 18L8 22L12 26M28 18L32 22L28 26M16 14L20 10L24 14M20 30V10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1">
          <Lock className="w-3 h-3 text-accent-foreground" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground leading-none">
          SponsorDeal
        </span>
        <span className="text-xs text-muted-foreground leading-none">
          Manager
        </span>
      </div>
    </div>
  );
};

export default Logo;
