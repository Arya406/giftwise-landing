import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    rating: 5,
    text: "I sold my unused Amazon gift cards and got cash instantly. The process was so smooth and secure. Highly recommended!"
  },
  {
    name: "Mike Chen",
    initials: "MC", 
    rating: 5,
    text: "Found incredible deals on Netflix gift cards. Saved 15% compared to buying directly. GiftWise is amazing!"
  },
  {
    name: "Emily Davis",
    initials: "ED",
    rating: 5,
    text: "Customer support was outstanding when I had questions. They resolved everything quickly and professionally."
  },
  {
    name: "James Wilson",
    initials: "JW",
    rating: 5,
    text: "Been using this platform for months. Always get the best rates and payments are always on time. Trustworthy!"
  },
  {
    name: "Lisa Rodriguez",
    initials: "LR",
    rating: 5,
    text: "The mobile app is fantastic. I can sell my gift cards on the go. Very user-friendly and secure."
  },
  {
    name: "David Thompson",
    initials: "DT",
    rating: 5,
    text: "Turned my gift cards into crypto payments. Love the flexibility and the rates are always competitive."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GiftWise for their gift card needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};