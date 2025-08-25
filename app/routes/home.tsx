import type { Route } from "./+types/home";
import { MenuItem } from "../components/menu-item";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mountain View Retreat" },
    { name: "description", content: "Your digital guidebook for Mountain View Retreat" },
  ];
}

const menuItems = [
  {
    icon: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=120&h=80&fit=crop&crop=center",
    title: "WIFI ACCESS",
    description: "MountainView2024 • Copy to connect",
    badge: { text: "FEATURED", type: "featured" as const },
    onClick: () => {
      navigator.clipboard.writeText("MountainView2024");
      // Could add toast notification here
    }
  },
  {
    icon: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=120&h=80&fit=crop&crop=center",
    title: "ARRIVAL",
    description: "Directions, parking, and check-in",
    navTo: "/arrival"
  },
  {
    icon: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=120&h=80&fit=crop&crop=center",
    title: "HOUSE GUIDE",
    description: "TV, kitchen, laundry, HVAC, hot tub",
    navTo: "/house-guide"
  },
  {
    icon: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=80&fit=crop&crop=center",
    title: "LOCAL EXPLORE",
    description: "Restaurants, hikes, and attractions",
    navTo: "/local",
    badge: { text: "DIGITAL ONLY", type: "digital" as const }
  },
  {
    icon: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&crop=center",
    title: "CONTACT HOST",
    description: "Questions? We're here to help!",
    navTo: "/more",
    badge: { text: "DIGITAL ONLY", type: "digital" as const }
  },
  {
    icon: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=120&h=80&fit=crop&crop=center",
    title: "SAFETY & RULES",
    description: "Important guidelines for your stay"
  },
  {
    icon: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&h=80&fit=crop&crop=center",
    title: "CHECKOUT",
    description: "Departure checklist and instructions"
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
              badge={item.badge}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}