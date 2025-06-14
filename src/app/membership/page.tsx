import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import { MembershipFAQ } from "@/components/membership/MembershipFAQ";
import { FeatureHighlights } from "@/components/membership/FeatureHighlights";

export const metadata: Metadata = {
  title: "Membership | MakerHub",
  description: "Join our community of makers and creators",
};

const membershipPlans = [
  {
    name: "Basic",
    price: "$25",
    period: "per month",
    description: "Access during standard hours with basic equipment usage.",
    features: [
      "Access during standard hours (Mon-Fri, 10am-8pm)",
      "Basic equipment access",
      "2 workshop sessions per month",
      "Online community access",
      "Member storage (small)",
    ],
    buttonText: "Choose Basic",
    buttonVariant: "outline" as const,
  },
  {
    name: "Maker",
    price: "$49",
    period: "per month",
    description: "Full access with priority booking and additional perks.",
    features: [
      "24/7 access to the space",
      "Full equipment access",
      "Unlimited workshop sessions",
      "Priority booking for events",
      "Member storage (medium)",
      "Free filament/materials allowance",
    ],
    buttonText: "Choose Maker",
    buttonVariant: "default" as const,
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "Premium benefits for serious makers and small businesses.",
    features: [
      "Everything in Maker plan",
      "Premium equipment access",
      "Dedicated workspace area",
      "Member storage (large)",
      "Increased materials allowance",
      "Ability to host your own workshops",
      "Small business support",
    ],
    buttonText: "Choose Pro",
    buttonVariant: "outline" as const,
  }
];

export default function MembershipPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Become a member today and gain access to our space, tools, and a vibrant community of makers.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Membership Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Membership</h2>
            <p className="text-muted-foreground">
              Select the plan that best fits your needs and making style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.highlighted 
                    ? "border-primary shadow-lg" 
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.buttonVariant}
                  >
                    <Link href="/membership/signup">{plan.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership FAQ */}
      <MembershipFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground mb-8">
              Start your maker journey today. Join our community and bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/membership/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}