import { Metadata } from "next";
import { MembershipSignupForm } from "@/components/membership/MembershipSignupForm";

export const metadata: Metadata = {
  title: "Sign Up | MakerHub Membership",
  description: "Join MakerHub and become part of our maker community",
};

export default function MembershipSignupPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Join MakerHub</h1>
            <p className="text-muted-foreground text-lg">
              Become a member today and start creating with our community
            </p>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MembershipSignupForm />
          </div>
        </div>
      </section>
    </div>
  );
}