import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const brands = [
  { name: "Amazon", discount: "Up to 15% off", color: "bg-orange-500" },
  { name: "Apple", discount: "Up to 12% off", color: "bg-gray-800" },
  { name: "Google Play", discount: "Up to 10% off", color: "bg-green-500" },
  { name: "Steam", discount: "Up to 18% off", color: "bg-blue-600" },
  { name: "Netflix", discount: "Up to 8% off", color: "bg-red-600" },
  { name: "Spotify", discount: "Up to 14% off", color: "bg-green-600" },
  { name: "Target", discount: "Up to 11% off", color: "bg-red-500" },
  { name: "Walmart", discount: "Up to 9% off", color: "bg-blue-500" },
  { name: "Best Buy", discount: "Up to 13% off", color: "bg-yellow-500" },
  { name: "Starbucks", discount: "Up to 16% off", color: "bg-green-700" },
  { name: "Nike", discount: "Up to 12% off", color: "bg-black" },
  { name: "Xbox", discount: "Up to 15% off", color: "bg-green-500" }
];

export const PopularBrands = () => {
  return (
    <section id="brands" className="py-24 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Gift Card Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing deals on gift cards from your favorite brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${brand.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{brand.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {brand.discount}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">And 500+ more brands available</p>
          <Badge variant="outline" className="px-4 py-2">
            View All Brands →
          </Badge>
        </div>
      </div>
    </section>
  );
};