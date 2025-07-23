import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Shield, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100K+",
    label: "Happy Customers",
    description: "Users trust us with their gift cards"
  },
  {
    icon: Calendar,
    value: "2019",
    label: "Founded",
    description: "Years of experience in the market"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Success Rate",
    description: "Successful transactions completed"
  },
  {
    icon: Trophy,
    value: "#1",
    label: "Market Leader",
    description: "Most trusted gift card platform"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About GiftWise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Most Trusted Gift Card Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2019, we've been revolutionizing how people buy and sell gift cards. 
            Our mission is to create a secure, transparent, and user-friendly platform 
            that connects gift card holders with buyers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-semibold mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                GiftWise was born from a simple frustration: unused gift cards sitting in drawers, 
                losing value over time. Our founders experienced this firsthand and realized millions 
                of people faced the same problem.
              </p>
              <p>
                We built GiftWise to bridge the gap between gift card holders who want cash and 
                savvy shoppers looking for discounts. Our platform uses advanced security measures 
                and fair market pricing to ensure everyone gets the best deal possible.
              </p>
              <p>
                Today, we're proud to be the most trusted gift card marketplace, processing millions 
                in transactions monthly while maintaining our commitment to security, transparency, 
                and customer satisfaction.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-elegant bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Our Mission</h4>
                <p className="text-muted-foreground text-sm">
                  To create the world's most trusted and efficient marketplace for gift card trading, 
                  ensuring maximum value for both buyers and sellers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Our Vision</h4>
                <p className="text-muted-foreground text-sm">
                  A world where no gift card goes unused, where everyone can easily access value 
                  from their digital assets, and where trust and transparency are the foundation 
                  of every transaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};