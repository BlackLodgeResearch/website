import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: "intro-arduino",
    title: "Introduction to Arduino",
    date: "2025-04-15",
    time: "18:00 - 20:00",
    location: "Main Workshop",
    description: "Learn the basics of Arduino programming and create your first interactive project."
  },
  {
    id: "3d-printing-workshop",
    title: "3D Printing Workshop",
    date: "2025-04-22",
    time: "14:00 - 17:00",
    location: "Fab Lab",
    description: "A hands-on workshop on 3D modeling and printing techniques for beginners."
  },
  {
    id: "hackathon-2025",
    title: "Spring Hackathon 2025",
    date: "2025-05-01",
    time: "09:00 - 21:00",
    location: "All Spaces",
    description: "A full-day hackathon to build projects around sustainable technology themes."
  }
];

export function FeaturedEvents() {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/events">
              View all events
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col border border-border hover:shadow-md transition-shadow">
              <CardContent className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/events/${event.id}`}>
                    Register Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}