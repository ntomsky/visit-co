import type { Route } from "./+types/house-guide-category";
import { useParams } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  const categoryName = params.category?.replace("-", " ") || "Guide";
  return [
    { title: `${categoryName} - House Guide` },
    { name: "description", content: `Instructions for ${categoryName}` },
  ];
}

const categoryContent = {
  tv: {
    title: "TV & Entertainment",
    sections: [
      {
        title: "Smart TV Controls",
        content: "The Samsung smart TV can be controlled with the provided remote. Netflix, Hulu, Disney+, and Amazon Prime are already logged in.",
        image: null
      },
      {
        title: "Sound System",
        content: "Bluetooth speaker is located on the entertainment center. Press the power button and connect via your phone's Bluetooth settings.",
        image: null
      },
      {
        title: "HDMI Connections",
        content: "HDMI ports are available on the side of the TV for your personal devices. Cable is provided in the entertainment center drawer.",
        image: null
      }
    ]
  },
  kitchen: {
    title: "Kitchen Guide",
    sections: [
      {
        title: "Coffee & Tea",
        content: "Keurig coffee maker with pods provided. Electric kettle available for tea. Mugs and coffee supplies in cabinet above the machine.",
        image: null
      },
      {
        title: "Cooking Basics",
        content: "All cooking utensils, pots, and pans are provided. Olive oil, salt, pepper, and basic spices available.",
        image: null
      },
      {
        title: "Dishwasher",
        content: "Dishwasher pods are under the sink. Run on normal cycle. Please start before checkout if you've used dishes.",
        image: null
      }
    ]
  },
  laundry: {
    title: "Laundry Instructions",
    sections: [
      {
        title: "Washer & Dryer",
        content: "Front-loading washer and dryer in the utility room. Detergent and fabric softener provided on the shelf above.",
        image: null
      },
      {
        title: "Operating Instructions",
        content: "Use normal settings for most loads. Clean the lint filter in the dryer after each use. Please don't leave wet clothes in the machine.",
        image: null
      }
    ]
  },
  hvac: {
    title: "Heating & Cooling",
    sections: [
      {
        title: "Thermostat",
        content: "Digital thermostat is located in the main hallway. Set to your comfort level, but please keep between 65-78°F to be energy efficient.",
        image: null
      },
      {
        title: "Ceiling Fans",
        content: "All bedrooms and living areas have ceiling fans with wall controls. Use these to help circulate air and reduce energy costs.",
        image: null
      }
    ]
  },
  "hot-tub": {
    title: "Hot Tub Instructions",
    sections: [
      {
        title: "Operating the Hot Tub",
        content: "The hot tub is heated and ready to use. Temperature is set to 102°F. Use the control panel to adjust jets and lighting.",
        image: null
      },
      {
        title: "Safety Guidelines",
        content: "Maximum 6 people at once. No glass containers. Shower before entering. Children must be supervised at all times.",
        image: null
      },
      {
        title: "Cover Instructions",
        content: "Always replace the cover when finished. Fold it accordion-style and secure with the clips to maintain temperature and cleanliness.",
        image: null
      }
    ]
  }
};

export default function HouseGuideCategory() {
  const params = useParams();
  const category = params.category as keyof typeof categoryContent;
  const content = categoryContent[category];

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-600">The requested guide section doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
        <p className="text-gray-600 mt-1">Step-by-step instructions</p>
      </div>

      <div className="p-4 space-y-4">
        {content.sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
            {section.image && (
              <img 
                src={section.image} 
                alt={section.title}
                className="mt-4 rounded-lg w-full"
              />
            )}
          </div>
        ))}

        {/* Need Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Additional Help?</h3>
              <p className="text-blue-700 mb-3">
                Can't find what you're looking for or having technical difficulties?
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Contact Host
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
