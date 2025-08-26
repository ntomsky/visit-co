import React from 'react';

interface IconProps {
  className?: string;
}

export const WifiIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#wifiGradient)"/>
    
    {/* Router body */}
    <rect x="20" y="36" width="24" height="16" rx="6" fill="white"/>
    <rect x="22" y="38" width="20" height="12" rx="4" fill="url(#wifiGradient)" fillOpacity="0.3"/>
    
    {/* Antennas */}
    <rect x="18" y="30" width="3" height="8" rx="1.5" fill="white"/>
    <rect x="43" y="30" width="3" height="8" rx="1.5" fill="white"/>
    
    {/* WiFi waves - cartoon style */}
    <path d="M32 28C35 28 37 30 37 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M32 24C37 24 40 27 40 27" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M32 20C39 20 43 24 43 24" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    
    <path d="M32 28C29 28 27 30 27 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M32 24C27 24 24 27 24 27" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M32 20C25 20 21 24 21 24" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    
    {/* Power LED */}
    <circle cx="32" cy="44" r="2" fill="#00FF88"/>
    
    <defs>
      <linearGradient id="wifiGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF6B6B"/>
        <stop offset="1" stopColor="#4ECDC4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ArrivalIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#arrivalGradient)"/>
    
    {/* Cartoon airplane */}
    <ellipse cx="32" cy="32" rx="16" ry="6" fill="white"/>
    <ellipse cx="32" cy="32" rx="14" ry="4" fill="url(#arrivalGradient)" fillOpacity="0.3"/>
    
    {/* Wings */}
    <ellipse cx="20" cy="32" rx="8" ry="3" fill="white"/>
    <ellipse cx="44" cy="32" rx="8" ry="3" fill="white"/>
    
    {/* Nose */}
    <circle cx="46" cy="32" r="4" fill="white"/>
    
    {/* Windows */}
    <circle cx="35" cy="30" r="2" fill="url(#arrivalGradient)"/>
    <circle cx="30" cy="30" r="2" fill="url(#arrivalGradient)"/>
    <circle cx="25" cy="30" r="2" fill="url(#arrivalGradient)"/>
    
    {/* Landing arrows */}
    <path d="M32 46L28 50L32 54L36 50L32 46Z" fill="white"/>
    <path d="M22 48L18 52L22 56L26 52L22 48Z" fill="white" fillOpacity="0.7"/>
    <path d="M42 48L38 52L42 56L46 52L42 48Z" fill="white" fillOpacity="0.7"/>
    
    <defs>
      <linearGradient id="arrivalGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD93D"/>
        <stop offset="1" stopColor="#FF6B6B"/>
      </linearGradient>
    </defs>
  </svg>
);

export const HouseIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#houseGradient)"/>
    
    {/* House base */}
    <rect x="16" y="35" width="32" height="20" rx="4" fill="white"/>
    
    {/* Roof */}
    <path d="M12 35L32 18L52 35H12Z" fill="white"/>
    <path d="M15 35L32 22L49 35H15Z" fill="url(#houseGradient)" fillOpacity="0.3"/>
    
    {/* Door */}
    <rect x="26" y="42" width="12" height="13" rx="6" fill="url(#houseGradient)"/>
    <circle cx="35" cy="48" r="1.5" fill="white"/>
    
    {/* Windows */}
    <rect x="19" y="38" width="6" height="6" rx="2" fill="url(#houseGradient)"/>
    <rect x="39" y="38" width="6" height="6" rx="2" fill="url(#houseGradient)"/>
    
    {/* Window details */}
    <line x1="22" y1="38" x2="22" y2="44" stroke="white" strokeWidth="1"/>
    <line x1="19" y1="41" x2="25" y2="41" stroke="white" strokeWidth="1"/>
    <line x1="42" y1="38" x2="42" y2="44" stroke="white" strokeWidth="1"/>
    <line x1="39" y1="41" x2="45" y2="41" stroke="white" strokeWidth="1"/>
    
    {/* Chimney */}
    <rect x="40" y="20" width="4" height="8" rx="1" fill="white"/>
    
    {/* Smoke */}
    <circle cx="42" cy="16" r="1.5" fill="white" fillOpacity="0.8"/>
    <circle cx="43" cy="13" r="1" fill="white" fillOpacity="0.6"/>
    <circle cx="41" cy="10" r="0.8" fill="white" fillOpacity="0.4"/>
    
    <defs>
      <linearGradient id="houseGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6BCF7F"/>
        <stop offset="1" stopColor="#4D96FF"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ExploreIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#exploreGradient)"/>
    
    {/* Map background */}
    <rect x="12" y="16" width="40" height="32" rx="6" fill="white"/>
    <rect x="14" y="18" width="36" height="28" rx="4" fill="url(#exploreGradient)" fillOpacity="0.2"/>
    
    {/* Mountains */}
    <path d="M14 35L20 25L26 30L32 22L38 28L44 20L50 30V44H14V35Z" fill="url(#exploreGradient)" fillOpacity="0.4"/>
    
    {/* River */}
    <path d="M14 36C20 34 26 38 32 36C38 34 44 38 50 36V42C44 40 38 44 32 42C26 40 20 44 14 42V36Z" fill="#4ECDC4" fillOpacity="0.6"/>
    
    {/* Trees */}
    <circle cx="22" cy="38" r="3" fill="#6BCF7F"/>
    <circle cx="28" cy="36" r="2.5" fill="#6BCF7F"/>
    <circle cx="36" cy="39" r="2" fill="#6BCF7F"/>
    <circle cx="42" cy="37" r="3" fill="#6BCF7F"/>
    
    {/* Compass rose */}
    <circle cx="40" cy="26" r="6" fill="white" fillOpacity="0.9"/>
    <path d="M40 22L42 28L40 30L38 28L40 22Z" fill="#FF6B6B"/>
    <path d="M44 26L38 28L36 26L38 24L44 26Z" fill="white" stroke="url(#exploreGradient)" strokeWidth="1"/>
    
    {/* Location pin */}
    <circle cx="25" cy="28" r="4" fill="#FF6B6B"/>
    <circle cx="25" cy="28" r="2" fill="white"/>
    <path d="M25 32L23 35L27 35L25 32Z" fill="#FF6B6B"/>
    
    <defs>
      <linearGradient id="exploreGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A8EDEA"/>
        <stop offset="1" stopColor="#FED6E3"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ContactIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#contactGradient)"/>
    
    {/* Phone body */}
    <rect x="20" y="16" width="24" height="32" rx="8" fill="white"/>
    <rect x="22" y="18" width="20" height="28" rx="6" fill="url(#contactGradient)" fillOpacity="0.2"/>
    
    {/* Screen */}
    <rect x="24" y="22" width="16" height="20" rx="4" fill="url(#contactGradient)" fillOpacity="0.4"/>
    
    {/* Speaker */}
    <rect x="26" y="19" width="12" height="2" rx="1" fill="url(#contactGradient)"/>
    
    {/* Home button */}
    <circle cx="32" cy="45" r="2" fill="url(#contactGradient)"/>
    
    {/* Chat bubbles on screen */}
    <rect x="26" y="25" width="10" height="4" rx="2" fill="white"/>
    <rect x="28" y="31" width="8" height="4" rx="2" fill="white" fillOpacity="0.8"/>
    <rect x="26" y="37" width="12" height="4" rx="2" fill="white"/>
    
    {/* Signal waves */}
    <path d="M46 20C48 20 50 22 50 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M46 24C49 24 52 27 52 27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M46 28C50 28 54 32 54 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Heart emoji */}
    <path d="M32 30L30 28C29 27 28 27 28 29C28 31 32 34 32 34C32 34 36 31 36 29C36 27 35 27 34 28L32 30Z" fill="#FF6B6B"/>
    
    <defs>
      <linearGradient id="contactGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD93D"/>
        <stop offset="1" stopColor="#FF9A9E"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SafetyIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#safetyGradient)"/>
    
    {/* Shield body */}
    <path d="M32 12L18 20V34C18 44 25 52 32 54C39 52 46 44 46 34V20L32 12Z" fill="white"/>
    <path d="M32 16L22 22V34C22 42 28 48 32 50C36 48 42 42 42 34V22L32 16Z" fill="url(#safetyGradient)" fillOpacity="0.3"/>
    
    {/* Superhero cape effect */}
    <path d="M32 12L18 20V26L32 18L46 26V20L32 12Z" fill="white" fillOpacity="0.8"/>
    
    {/* Badge/star */}
    <path d="M32 24L34 30L40 30L35 34L37 40L32 37L27 40L29 34L24 30L30 30L32 24Z" fill="#FFD93D"/>
    <path d="M32 26L33 29L36 29L34 31L35 34L32 33L29 34L30 31L28 29L31 29L32 26Z" fill="white"/>
    
    {/* Safety symbols around */}
    <circle cx="20" cy="38" r="3" fill="white" fillOpacity="0.8"/>
    <path d="M20 36L21 38L20 40L19 38L20 36Z" fill="url(#safetyGradient)"/>
    
    <circle cx="44" cy="38" r="3" fill="white" fillOpacity="0.8"/>
    <rect x="42.5" y="36.5" width="3" height="3" rx="0.5" fill="url(#safetyGradient)"/>
    
    {/* Eyes (cute shield character) */}
    <circle cx="28" cy="28" r="1.5" fill="url(#safetyGradient)"/>
    <circle cx="36" cy="28" r="1.5" fill="url(#safetyGradient)"/>
    
    <defs>
      <linearGradient id="safetyGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A8EDEA"/>
        <stop offset="1" stopColor="#6BCF7F"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CheckoutIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="20" fill="url(#checkoutGradient)"/>
    
    {/* Suitcase body */}
    <rect x="16" y="26" width="32" height="22" rx="6" fill="white"/>
    <rect x="18" y="28" width="28" height="18" rx="4" fill="url(#checkoutGradient)" fillOpacity="0.3"/>
    
    {/* Suitcase handle */}
    <rect x="28" y="20" width="8" height="8" rx="4" fill="none" stroke="white" strokeWidth="3"/>
    <rect x="30" y="18" width="4" height="4" rx="2" fill="white"/>
    
    {/* Suitcase details */}
    <rect x="20" y="32" width="24" height="2" rx="1" fill="url(#checkoutGradient)"/>
    <rect x="20" y="38" width="24" height="2" rx="1" fill="url(#checkoutGradient)"/>
    
    {/* Clasps */}
    <rect x="18" y="30" width="3" height="4" rx="1" fill="white"/>
    <rect x="43" y="30" width="3" height="4" rx="1" fill="white"/>
    
    {/* Travel stickers */}
    <circle cx="24" cy="35" r="3" fill="#FFD93D" fillOpacity="0.8"/>
    <rect x="35" y="33" width="5" height="4" rx="1" fill="#FF6B6B" fillOpacity="0.8"/>
    
    {/* Departure arrows */}
    <path d="M32 50L28 54L32 58L36 54L32 50Z" fill="white"/>
    <path d="M22 52L18 56L22 60L26 56L22 52Z" fill="white" fillOpacity="0.7"/>
    <path d="M42 52L38 56L42 60L46 56L42 52Z" fill="white" fillOpacity="0.7"/>
    
    {/* Wheels */}
    <circle cx="22" cy="48" r="2" fill="white"/>
    <circle cx="42" cy="48" r="2" fill="white"/>
    
    <defs>
      <linearGradient id="checkoutGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9A9E"/>
        <stop offset="1" stopColor="#FECFEF"/>
      </linearGradient>
    </defs>
  </svg>
);
