import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, User, Users } from "lucide-react";
import { getEvent, getAllEvents } from "@/lib/events";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";
import { EventMDXContent } from "@/components/events/EventMDXContent";

interface EventPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    slug: event.id
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = await getEvent(params.slug);
  
  if (!event) {
    return {
      title: "Event Not Found | MakerHub",
    };
  }
  
  return {
    title: `${event.title} | MakerHub Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEvent(params.slug);
  
  if (!event) {
    notFound();
  }
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div>
      <div className="bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <Link href="/events" className="text-primary hover:underline mb-2 inline-block">
                ← Back to Events
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
            </div>
            
            <Button size="lg">Register Now</Button>
          </div>
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={event.image || "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {event.category.map((category, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <EventMDXContent content={event.content} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Event Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Presenter</p>
                    <p className="text-muted-foreground">{event.presenter}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Capacity</p>
                    <p className="text-muted-foreground">{event.capacity} participants</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p className="text-muted-foreground mb-2">
                  {event.fee ? `$${event.fee} per person` : "Free event"}
                </p>
                {event.memberDiscount && (
                  <p className="text-sm text-primary">
                    Members receive a discount!
                  </p>
                )}
              </div>
              
              <Button className="w-full mb-4">Register Now</Button>
              
              <p className="text-sm text-muted-foreground text-center">
                {event.spotsRemaining} spots remaining
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-muted py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Register for this Event</h2>
          <EventRegistrationForm event={event} />
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Similar Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* This would typically be populated with actual similar events */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Similar Workshop {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Another interesting workshop you might enjoy.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">View Event</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}