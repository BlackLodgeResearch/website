import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | MakerHub",
  description: "Get in touch with the MakerHub team",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have questions about MakerHub? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you as soon as possible. We're always happy to hear from members, potential members, and community partners.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Maker Street<br />
                        Innovation District<br />
                        Tech City, TC 12345
                      </address>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@makerhub.example</p>
                      <p className="text-muted-foreground">membership@makerhub.example</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 9pm</p>
                      <p className="text-muted-foreground">Saturday: 10am - 6pm</p>
                      <p className="text-muted-foreground">Sunday: 12pm - 5pm</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center border border-border">
              <p className="text-muted-foreground">Map embed would appear here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}