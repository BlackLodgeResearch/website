"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Event } from "@/lib/types";

interface EventCalendarProps {
  events: Event[];
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Get event dates for highlighting in calendar
  const eventDates = events.map(event => new Date(event.date));
  
  // Filter events for the selected date
  const eventsOnSelectedDate = selectedDate 
    ? events.filter(event => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === selectedDate.getDate() &&
          eventDate.getMonth() === selectedDate.getMonth() &&
          eventDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : [];
  
  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-1">
        <CardContent className="p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              hasEvent: (date) => 
                eventDates.some(eventDate => 
                  eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear()
                )
            }}
            modifiersClassNames={{
              hasEvent: "bg-primary/10 text-primary font-bold"
            }}
          />
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2">
        <CardContent className="p-6">
          {selectedDate ? (
            <>
              <h3 className="text-2xl font-bold mb-4">{formatDate(selectedDate)}</h3>
              
              {eventsOnSelectedDate.length > 0 ? (
                <div className="space-y-6">
                  {eventsOnSelectedDate.map((event) => (
                    <div key={event.id} className="border-b border-border pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <Button asChild size="sm">
                        <Link href={`/events/${event.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">No events scheduled for this date.</p>
                </div>
              )}
            </>
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">Select a date to view events.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}