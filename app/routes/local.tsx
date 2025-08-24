import type { Route } from "./+types/local";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Explore Local Area - Mountain View Retreat" },
    { name: "description", content: "Local restaurants, attractions, and activities" },
  ];
}

const categories = [
  { id: "all", name: "All", icon: "🏠" },
  { id: "food", name: "Food", icon: "🍽️" },
  { id: "groceries", name: "Groceries", icon: "🛒" },
  { id: "hikes", name: "Hikes", icon: "🥾" },
  { id: "transport", name: "Transport", icon: "🚗" },
];

const places = [
  {
    id: 1,
    name: "Blue Ridge Brewery",
    category: "food",
    description: "Local craft brewery with mountain views and live music",
    distance: "0.5 miles",
    rating: 4.5,
    image: null
  },
  {
    id: 2,
    name: "Mountain Fresh Grocery",
    category: "groceries",
    description: "Full-service grocery store with local produce",
    distance: "1.2 miles",
    rating: 4.2,
    image: null
  },
  {
    id: 3,
    name: "Springer Mountain Trail",
    category: "hikes",
    description: "Moderate 3-mile hike to beautiful waterfall",
    distance: "2.1 miles",
    rating: 4.8,
    image: null
  },
  {
    id: 4,
    name: "Sunrise Diner",
    category: "food",
    description: "Classic American breakfast and lunch spot",
    distance: "0.8 miles",
    rating: 4.3,
    image: null
  },
  {
    id: 5,
    name: "Blue Ridge Scenic Railway",
    category: "transport",
    description: "Historic train rides through the mountains",
    distance: "3.5 miles",
    rating: 4.7,
    image: null
  },
  {
    id: 6,
    name: "Walmart Supercenter",
    category: "groceries",
    description: "Large retail store with groceries and essentials",
    distance: "4.2 miles",
    rating: 3.8,
    image: null
  },
  {
    id: 7,
    name: "Toccoa Falls",
    category: "hikes",
    description: "Easy walk to 186-foot waterfall",
    distance: "15 miles",
    rating: 4.6,
    image: null
  },
  {
    id: 8,
    name: "The Ridge Restaurant",
    category: "food",
    description: "Upscale dining with panoramic mountain views",
    distance: "1.5 miles",
    rating: 4.4,
    image: null
  }
];

export default function Local() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPlaces = selectedCategory === "all" 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Explore the Area</h1>
        <p className="text-gray-600 mt-1">Local recommendations and attractions</p>
      </div>

      {/* Filter Row */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Places List */}
      <div className="p-4 space-y-3">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex space-x-4">
              {/* Placeholder for image */}
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">
                  {place.category === "food" && "🍽️"}
                  {place.category === "groceries" && "🛒"}
                  {place.category === "hikes" && "🥾"}
                  {place.category === "transport" && "🚗"}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{place.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {place.distance}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {place.rating}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Directions
                    </button>
                    {place.category === "food" && (
                      <button className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        Menu
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPlaces.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No places found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        </div>
      )}
    </div>
  );
}
