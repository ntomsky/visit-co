import React from "react";
import { Link } from "react-router";
import type { LucideIcon } from 'lucide-react';

type CustomIconComponent = React.ComponentType<{ className?: string }>;

interface MenuItemProps {
  icon: string | LucideIcon | CustomIconComponent;
  title: string;
  description: string;
  navTo?: string;
  badge?: {
    text: string;
    type: 'featured' | 'digital' | 'new';
  };
  onClick?: () => void;
}

export function MenuItem({ icon, title, description, navTo, badge, onClick }: MenuItemProps) {
  // Render icon safely
  const IconComponent = typeof icon === 'string' ? null : icon;

  const content = (
    <div className="flex items-center space-x-4 py-3">
      <div className="relative ml-3">
        {typeof icon === 'string' ? (
          <img 
            src={icon} 
            alt={title} 
            className="w-20 h-16 rounded-lg object-cover"
          />
        ) : IconComponent ? (
          <div className="w-20 h-16 rounded-lg flex items-center justify-center">
            <IconComponent className="w-16 h-16" />
          </div>
        ) : (
          <div className="w-20 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
        )}
        {badge && (
          <div className="absolute top-1 right-1">
            {badge.type === 'featured' ? (
              <>
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded font-bold">NEW</span>
                <div className="text-xs text-white font-semibold mt-0.5">FEATURED</div>
              </>
            ) : badge.type === 'digital' ? (
              <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">{badge.text}</span>
            ) : (
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded font-bold">{badge.text}</span>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 pr-3">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide drop-shadow-sm">{title}</h3>
        <p className="text-sm text-gray-800 mt-1 drop-shadow-sm">{description}</p>
      </div>
    </div>
  );

  if (navTo) {
    return (
      <Link to={navTo} className="block">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left block">
        {content}
      </button>
    );
  }

  return (
    <div className="block">
      {content}
    </div>
  );
}
