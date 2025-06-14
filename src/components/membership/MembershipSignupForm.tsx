"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  membershipType: z.enum(["basic", "maker", "pro"], {
    required_error: "Please select a membership type",
  }),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Zip code is required" }),
  emergencyContactName: z.string().min(2, { message: "Emergency contact name is required" }),
  emergencyContactPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  interests: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one interest",
  }),
  experience: z.enum(["none", "some", "experienced"], {
    required_error: "Please select your experience level",
  }),
  referredBy: z.string().optional(),
  agreeTerms: z.boolean({
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
  agreeWaiver: z.boolean({
    errorMap: () => ({ message: "You must agree to the liability waiver" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function MembershipSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      interests: [],
      referredBy: "",
      agreeTerms: false,
      agreeWaiver: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    
    toast({
      title: "Application submitted!",
      description: "We've received your membership application.",
    });
    
    console.log(data);
  }

  const membershipTypes = [
    {
      id: "basic",
      name: "Basic",
      price: "$25/month",
      description: "Access during standard hours with basic equipment usage",
    },
    {
      id: "maker",
      name: "Maker",
      price: "$49/month",
      description: "Full access with priority booking and additional perks",
    },
    {
      id: "pro",
      name: "Pro",
      price: "$99/month",
      description: "Premium benefits for serious makers and small businesses",
    },
  ];

  const interestOptions = [
    { id: "woodworking", label: "Woodworking" },
    { id: "3d-printing", label: "3D Printing" },
    { id: "electronics", label: "Electronics" },
    { id: "laser-cutting", label: "Laser Cutting" },
    { id: "metalworking", label: "Metalworking" },
    { id: "textiles", label: "Textiles & Sewing" },
    { id: "programming", label: "Programming" },
    { id: "robotics", label: "Robotics" },
    { id: "art", label: "Art & Design" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership Application</CardTitle>
        <CardDescription>
          Join our community of makers, creators, and innovators.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Membership Type Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Select Membership Type</h3>
              
              <FormField
                control={form.control}
                name="membershipType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        {membershipTypes.map((type) => (
                          <FormItem key={type.id} className="space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value={type.id}
                                id={type.id}
                                className="peer sr-only"
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={type.id}
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <span className="text-xl font-bold">{type.name}</span>
                              <span className="text-primary font-medium">{type.price}</span>
                              <span className="text-sm text-muted-foreground text-center mt-2">
                                {type.description}
                              </span>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-2">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Emergency Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="emergencyContactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="emergencyContactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {/* Interests & Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Interests & Experience</h3>
              
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Areas of Interest (select all that apply)</FormLabel>
                      <FormDescription>
                        This helps us understand what resources and workshops might interest you.
                      </FormDescription>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {interestOptions.map((interest) => (
                        <FormField
                          key={interest.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={interest.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(interest.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, interest.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== interest.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {interest.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maker Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">Beginner - New to making</SelectItem>
                        <SelectItem value="some">Intermediate - Some experience</SelectItem>
                        <SelectItem value="experienced">Experienced - Advanced maker</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This helps us tailor your orientation to your needs.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="referredBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you hear about us? (Optional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Agreements */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Agreements</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="terms">
                  <AccordionTrigger>Terms and Conditions</AccordionTrigger>
                  <AccordionContent>
                    <div className="h-40 overflow-y-auto border rounded p-4 text-sm mb-2">
                      <p className="mb-2">
                        By becoming a member of MakerHub, you agree to follow our community guidelines and safety procedures. 
                        Members are responsible for using equipment safely and reporting any issues immediately.
                      </p>
                      <p className="mb-2">
                        Membership fees are billed monthly and can be canceled with 30 days notice. 
                        Members are responsible for any damage caused due to negligence or misuse of equipment.
                      </p>
                      <p>
                        MakerHub reserves the right to revoke membership for violation of community guidelines or unsafe behavior.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="waiver">
                  <AccordionTrigger>Liability Waiver</AccordionTrigger>
                  <AccordionContent>
                    <div className="h-40 overflow-y-auto border rounded p-4 text-sm mb-2">
                      <p className="mb-2">
                        I understand that using tools and equipment at MakerHub involves inherent risks. 
                        I agree to use all equipment according to safety guidelines and at my own risk.
                      </p>
                      <p className="mb-2">
                        I release MakerHub from liability for any injuries sustained while on the premises or 
                        using MakerHub equipment, except in cases of gross negligence.
                      </p>
                      <p>
                        I agree to participate in all required safety training before using specialized equipment 
                        and to follow all safety protocols while at MakerHub.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the terms and conditions
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeWaiver"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the liability waiver
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-sm text-muted-foreground">
          After submitting your application, we'll review it and contact you to schedule an orientation.
        </p>
      </CardFooter>
    </Card>
  );
}