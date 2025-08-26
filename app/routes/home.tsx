import type { Route } from "./+types/home";
import { MenuItem } from "../components/menu-item";
import { 
  Wifi, 
  PlaneLanding, 
  Home as HomeIcon, 
  Map, 
  MessageCircle, 
  Shield, 
  PlaneTakeoff 
} from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mountain View Retreat" },
    { name: "description", content: "Your digital guidebook for Mountain View Retreat" },
  ];
}

const menuItems = [
  {
    icon: Wifi,
    title: "WIFI ACCESS",
    description: "MountainView2024 • Copy to connect",
    onClick: () => {
      navigator.clipboard.writeText("MountainView2024");
      // Could add toast notification here
    }
  },
  {
    icon: PlaneLanding,
    title: "ARRIVAL",
    description: "Directions, parking, and check-in",
    navTo: "/arrival"
  },
  {
    icon: HomeIcon,
    title: "HOUSE GUIDE",
    description: "TV, kitchen, laundry, HVAC, hot tub",
    navTo: "/house-guide"
  },
  {
    icon: Map,
    title: "LOCAL EXPLORE",
    description: "Restaurants, hikes, and attractions",
    navTo: "/local",
  },
  {
    icon: MessageCircle,
    title: "CONTACT HOST",
    description: "Questions? We're here to help!",
    navTo: "/more",
  },
  {
    icon: Shield,
    title: "SAFETY & RULES",
    description: "Important guidelines for your stay",
    navTo: "/safety",
  },
  {
    icon: PlaneTakeoff,
    title: "CHECKOUT",
    description: "Departure checklist and instructions",
    navTo: "/checkout",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-gray-50/80">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pt-12">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-800 tracking-wider uppercase drop-shadow-sm">Thuja Hideaway</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 space-y-4">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              navTo={item.navTo}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}