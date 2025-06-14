import { Separator } from "@/components/ui/separator";
import { TeamMember } from "@/components/about/TeamMember";
import { Timeline } from "@/components/about/Timeline";
import Image from "next/image";

export const metadata = {
  title: "About | MakerHub",
  description: "Learn about our mission, history, and the team behind MakerHub",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              About MakerHub
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Learn about our mission, our history, and the people who make MakerHub a thriving community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                MakerHub exists to provide an accessible, inclusive space where people can collaborate, learn, and create. We believe that making and innovation should be accessible to everyone, regardless of background or experience.
              </p>
              <p className="text-muted-foreground mb-4">
                Our hackspace serves as a community workshop where members can share tools, knowledge, and ideas. We foster a culture of creativity, experimentation, and continuous learning.
              </p>
              <p className="text-muted-foreground">
                Through workshops, events, and open access to equipment, we aim to empower individuals to bring their ideas to life and develop new skills in a supportive environment.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Makers collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* History Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      <Separator />

      {/* Our Space Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Space</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            MakerHub features over 5,000 square feet of workshop and collaborative space, equipped with a wide range of tools and equipment for digital fabrication, electronics, woodworking, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3846513/pexels-photo-3846513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Fabrication Lab"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">Digital Fabrication Lab</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Electronics Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">Electronics Workshop</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coworking Area"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">Coworking Area</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            MakerHub is run by a dedicated team of staff and volunteers who are passionate about making and community building.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Alex Chen"
              role="Executive Director"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              bio="With over 15 years in community spaces, Alex brings vision and leadership to MakerHub."
            />
            <TeamMember 
              name="Sam Rivera"
              role="Operations Manager"
              image="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              bio="Sam ensures that our space runs smoothly day-to-day and oversees our equipment and safety protocols."
            />
            <TeamMember 
              name="Jamie Taylor"
              role="Community Coordinator"
              image="https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              bio="Jamie leads our community engagement efforts and organizes our event calendar."
            />
            <TeamMember 
              name="Morgan Lee"
              role="Education Lead"
              image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              bio="Morgan develops our educational programs and workshops for members of all skill levels."
            />
          </div>
        </div>
      </section>
    </div>
  );
}