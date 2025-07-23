import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-giftcards.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gift Cards" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="mb-6 flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2 animate-fade-in">
            <Shield className="w-4 h-4" />
            Trusted by 100,000+ users
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Buy & Sell Gift Cards
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-primary">
            Safely & Instantly
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Get the best value for your unused gift cards or find amazing deals on popular brands. 
          Secure, fast, and trusted by thousands of users worldwide.
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-muted-foreground">4.9/5 from 2,500+ reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Buying
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="sell" size="lg" className="text-lg px-8 py-4">
            Sell Your Cards
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$50M+</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" />
    </section>
  );
};