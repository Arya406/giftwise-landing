import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Phone, Clock, FileText, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    action: "Start Chat",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 2 hours",
    action: "Send Email",
    primary: false
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri 9AM-6PM EST",
    action: "Call Now",
    primary: false
  }
];

const faqItems = [
  {
    question: "How long does it take to sell my gift card?",
    answer: "Most gift cards are verified and payment is processed within 10-15 minutes of submission."
  },
  {
    question: "What's the maximum amount I can sell?",
    answer: "There's no maximum limit. We handle transactions from $10 to $10,000+ with the same security standards."
  },
  {
    question: "How do you determine gift card rates?",
    answer: "Our rates are based on real-time market demand, brand popularity, and current inventory levels."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use bank-level encryption and never share your personal information with third parties."
  }
];

export const Support = () => {
  return (
    <section id="support" className="py-24 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Support Center</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our dedicated support team is available around the clock to assist you with any questions or concerns.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card ${option.primary ? 'ring-2 ring-primary' : ''}`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${option.primary ? 'bg-gradient-primary' : 'bg-muted'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className={`w-8 h-8 ${option.primary ? 'text-white' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{option.description}</p>
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{option.availability}</span>
                </div>
                <Button variant={option.primary ? "default" : "outline"} className="w-full">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <HelpCircle className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-0 shadow-md bg-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">{item.question}</h4>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Help Resources</h3>
            </div>
            <div className="space-y-4">
              <Card className="border-0 shadow-md bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Getting Started Guide</h4>
                  <p className="text-muted-foreground text-sm">Learn how to sell your first gift card in minutes</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Security Best Practices</h4>
                  <p className="text-muted-foreground text-sm">Keep your account and transactions secure</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Rate Calculator</h4>
                  <p className="text-muted-foreground text-sm">Check current rates for any gift card brand</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">API Documentation</h4>
                  <p className="text-muted-foreground text-sm">Integrate GiftWise into your business</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white">
              <h4 className="font-semibold mb-2">Need Immediate Help?</h4>
              <p className="text-white/90 text-sm mb-4">
                For urgent issues or account-related concerns, our priority support team is standing by.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact Priority Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};