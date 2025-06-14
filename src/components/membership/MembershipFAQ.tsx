import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MembershipFAQ() {
  const faqItems = [
    {
      question: "How do I get started with a membership?",
      answer: "To get started, simply select a membership plan and complete the registration form. After payment, you'll receive an email with instructions for orientation and accessing the space."
    },
    {
      question: "Can I upgrade or downgrade my membership?",
      answer: "Yes, you can change your membership tier at any time. Changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "We offer monthly memberships with no long-term commitment required. However, we do offer discounts for members who commit to 6 or 12 months."
    },
    {
      question: "Do you offer student or group discounts?",
      answer: "Yes! We offer discounted rates for students with valid ID. We also have special rates for groups or organizations. Contact us for details."
    },
    {
      question: "What equipment and tools are available?",
      answer: "Our space includes 3D printers, laser cutters, CNC machines, woodworking tools, electronics workstations, sewing machines, and much more. Specific equipment access depends on your membership tier."
    },
    {
      question: "Do I need to have prior experience?",
      answer: "No prior experience is necessary! We offer orientation sessions for new members and regular workshops to help you learn and develop skills."
    },
    {
      question: "Can I bring guests to the space?",
      answer: "Members can bring guests for a tour or to work on collaborative projects. Guests must sign a waiver and be accompanied by a member at all times. Some membership tiers include guest passes."
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}