import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, PenTool, Lightbulb } from "lucide-react";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { FeaturedNews } from "@/components/home/FeaturedNews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Collaborate. Create. Innovate.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              MakerHub is a community-driven space where makers, creators, and innovators come together to bring ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/70">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-black text-white hover:bg-white/90 hover:text-black">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join MakerHub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our hackspace provides the tools, space, and community you need to turn your ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Access to Equipment</h3>
                <p className="text-muted-foreground">
                  Use professional-grade tools and equipment that would be otherwise inaccessible.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded makers and creators to share ideas and collaborate.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Regular Events</h3>
                <p className="text-muted-foreground">
                  Participate in workshops, hackathons, and social gatherings throughout the year.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learning Opportunities</h3>
                <p className="text-muted-foreground">
                  Expand your skills through peer learning and structured workshops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <FeaturedEvents />

      {/* Featured News Section */}
      <FeaturedNews />

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-muted-foreground mb-8">
              Become a member today and gain access to our space, tools, and vibrant community of makers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/membership">Become a Member</Link>
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