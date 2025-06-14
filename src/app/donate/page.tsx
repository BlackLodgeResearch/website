import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DonationForm } from "@/components/donate/DonationForm";
import { Heart, Award, Gift, TrendingUp, Users, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | MakerHub",
  description: "Support our community hackspace through donations",
};

export default function DonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your donation helps us provide tools, resources, and opportunities for our community of makers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Support MakerHub?</h2>
            <p className="text-muted-foreground">
              Your generosity makes a direct impact on our community and the makers we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Empower Innovation</h3>
                  <p className="text-muted-foreground">
                    Your donation helps us provide access to tools, technology, and education that empower creators to bring their ideas to life.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Build Capacity</h3>
                  <p className="text-muted-foreground">
                    Your support allows us to expand our offerings, upgrade equipment, and create more opportunities for learning and creation.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Foster Community</h3>
                  <p className="text-muted-foreground">
                    Help us create a welcoming, inclusive environment where people from all backgrounds can connect, collaborate, and grow.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Makers collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Donation Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Make a Donation</h2>
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-muted-foreground">
              Beyond financial contributions, there are many ways you can help MakerHub thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Donate Equipment</h3>
              <p className="text-muted-foreground mb-4">
                Have tools, materials, or technology you no longer need? Consider donating them to our space.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-muted-foreground mb-4">
                Share your time and skills by volunteering at events, teaching workshops, or helping with operations.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partnerships</h3>
              <p className="text-muted-foreground mb-4">
                Explore sponsorship opportunities, employee engagement programs, or collaborative projects.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
            <p className="text-muted-foreground">
              See how donations have made a difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <blockquote className="text-muted-foreground italic mb-4">
                "Thanks to the equipment funded by donors, I was able to prototype my invention and secure a patent. MakerHub changed my life."
              </blockquote>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Jamie Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Member since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <blockquote className="text-muted-foreground italic mb-4">
                "The scholarship program funded by donations allowed me to join MakerHub when I couldn't afford it. Now I'm teaching others the skills I learned."
              </blockquote>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Alex Chen</p>
                  <p className="text-sm text-muted-foreground">Member since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}