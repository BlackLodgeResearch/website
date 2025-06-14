import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, PenTool as Tool, Lightbulb, BookOpen, Calendar } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Access",
      description: "Choose from plans with standard hours or 24/7 access to suit your schedule."
    },
    {
      icon: <Tool className="h-8 w-8 text-primary" />,
      title: "Equipment Access",
      description: "Use professional-grade tools and machinery including 3D printers, laser cutters, and more."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Learning Resources",
      description: "Access our library of tutorials, guides, and online learning resources."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Regular Events",
      description: "Participate in workshops, hackathons, and social events throughout the year."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Connect with like-minded makers, share ideas, and collaborate on projects."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Project Support",
      description: "Get advice and feedback from staff and fellow members on your projects."
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Membership Benefits</h2>
          <p className="text-muted-foreground">
            Our membership provides everything you need to create, learn, and grow as a maker.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}