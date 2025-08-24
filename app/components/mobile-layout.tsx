import { Outlet, useLocation, Link } from "react-router";
import { BottomNavigation } from "./bottom-navigation";

export function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-sm mx-auto relative">
      {/* iPhone 13 Pro dimensions container */}
      <div className="flex-1 pb-20 overflow-y-auto">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}
