"use client";

// Import dependencies
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

// Import UI components
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

// Import form components
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { inter } from "@/lib/direct-font";
import { toast } from "../ui/use-toast";

// Define form schema
const formSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  email: z.string().email("Enter valid email address").optional(),
  contact: z.string().min(10, "Enter valid contact number"),
  message: z.string().min(30, "Message must be at least 30 characters"),
  stone: z.string().optional(),
});

export default function ContactForm() {
  // Define state variables
  const [messageInputLength, setMessageInputLength] = useState(0); // Message input (Using it for the character count)
  const searchParams = useSearchParams();

  useEffect(() => {
    const stoneParam = searchParams?.get("stone");
    if (stoneParam) {
      form.setValue("stone", stoneParam);
    }
  }, []);

  // Submit form function
  const submitForm = async (data: z.infer<typeof formSchema>) => {
    try {
      // Today's Date
      const date = format(new Date(), "PP");
      // Enquiry Message to be sent
      const message = `Customer Enquiry ${date} \nName: ${data.name}\nContact: ${data.contact}\nEmail: ${data.email}\nMessage: ${data.message}`;

      // Send message to WhatsApp API
      const response = await fetch("/api/whatsapp", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.status);
      if (response.status === 200) {
        form.reset();
        toast({
          title: "Message Sent Successfully 🎉",
          description: "We've received your enquiry. We will get back to you shortly.",
        });
      }
    } catch (error) {
      toast({
        title: "Message not Sent 😔",
        description: "Your form submission failed. Please try again.",
      });
      console.error(error);
    }
  };

  // Define form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  // Return the form component
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="flex flex-col gap-4 max-w-[500px]">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Number */}
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Contact Number <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  value={field.value}
                  onChange={(e) => form.setValue("contact", String(e.target.value))}
                  type="number"
                  placeholder="Enter your contact number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Enter your email address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Enquiry Subject */}
        <FormField
          control={form.control}
          name="stone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enquiry Subject</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter the subject like enquiry for stone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Text Area */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  onChange={(e) => {
                    setMessageInputLength(e.target.value.length);
                    form.setValue("message", e.target.value);
                  }}
                  placeholder="Enter your message for us"
                />
              </FormControl>
              <FormDescription
                className={`text-right items-center flex justify-end ${
                  messageInputLength < 30
                    ? messageInputLength === 0
                      ? "text-muted-foreground"
                      : "text-red-500"
                    : "text-green-500"
                } `}
              >
                <strong>{messageInputLength < 30 ? `${messageInputLength} / 30` : <Check size={20} />}</strong>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className={`w-full text-base ${inter.className} font-medium`}>
          Submit <span className=" hidden md:inline whitespace-pre-wrap "> your enquiry</span>
        </Button>
      </form>
    </Form>
  );
}
