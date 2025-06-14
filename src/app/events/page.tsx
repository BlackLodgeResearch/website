import { Metadata } from "next";
import { EventsList } from "@/components/events/EventsList";
import { EventCalendar } from "@/components/events/EventCalendar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | MakerHub",
  description: "Upcoming workshops, meetups, and community events at MakerHub",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Events & Workshops
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Join us for hands-on workshops, social gatherings, and skill-building events.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Tabs defaultValue="list" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                </TabsList>
                <Button>Submit an Event</Button>
              </div>
              
              <TabsContent value="list" className="mt-0">
                <EventsList events={events} />
              </TabsContent>
              
              <TabsContent value="calendar" className="mt-0">
                <EventCalendar events={events} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
            <p className="text-muted-foreground mb-8">
              MakerHub members can propose and host their own workshops, meetups, and events.
              Share your skills and knowledge with our community!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Submit an Event Proposal</Button>
              <Button variant="outline">Learn About Hosting</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}