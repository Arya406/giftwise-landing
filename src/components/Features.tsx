import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, DollarSign, Users, Lock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level security with SSL encryption and fraud protection for every transaction."
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Get paid immediately after verification. No waiting, no delays, just instant money."
  },
  {
    icon: DollarSign,
    title: "Best Rates",
    description: "We offer the most competitive rates in the market for both buying and selling."
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join over 100,000 satisfied users who trust us with their gift card transactions."
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your personal information is encrypted and never shared with third parties."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is available around the clock to help you succeed."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose GiftWise?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the most trusted and user-friendly platform for gift card trading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};