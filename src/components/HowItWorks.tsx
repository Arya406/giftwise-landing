import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Search, DollarSign, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Card",
    description: "Simply upload a photo of your gift card or enter the details manually.",
    color: "bg-blue-500"
  },
  {
    icon: Search,
    title: "Get Instant Quote",
    description: "Our system instantly calculates the best market rate for your card.",
    color: "bg-green-500"
  },
  {
    icon: CheckCircle,
    title: "Quick Verification",
    description: "We verify your card details to ensure authenticity and security.",
    color: "bg-purple-500"
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    description: "Receive your money instantly via PayPal, bank transfer, or crypto.",
    color: "bg-orange-500"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selling your gift cards has never been easier. Get started in just 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <Card className="relative z-10 border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Selling Now
          </Button>
        </div>
      </div>
    </section>
  );
};