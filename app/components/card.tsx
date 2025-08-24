import { Link } from "react-router";

interface CardProps {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  image?: string;
  description?: string;
  onClick?: () => void;
  isPinned?: boolean;
  children?: React.ReactNode;
}

export function Card({ 
  title, 
  href, 
  icon, 
  image, 
  description, 
  onClick, 
  isPinned = false,
  children 
}: CardProps) {
  const content = (
    <div className={`
      bg-white rounded-xl p-4 shadow-sm border border-gray-100 
      hover:shadow-md transition-shadow cursor-pointer
      ${isPinned ? 'border-green-200 bg-green-50' : ''}
    `}>
      <div className="flex items-center space-x-4">
        {/* Icon or Image */}
        <div className="flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-12 h-12 rounded-lg object-cover"
            />
          ) : icon ? (
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
              {icon}
            </div>
          ) : (
            <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {content}
      </button>
    );
  }

  return content;
}

interface QuickAccessCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  copyable?: boolean;
}

export function QuickAccessCard({ title, value, icon, copyable = false }: QuickAccessCardProps) {
  const handleCopy = async () => {
    if (copyable) {
      await navigator.clipboard.writeText(value);
      // You could add a toast notification here
    }
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
              {icon}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-green-800">{title}</p>
            <p className="text-lg font-semibold text-green-900">{value}</p>
          </div>
        </div>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-green-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
