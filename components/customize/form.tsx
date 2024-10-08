"use client";

// Import dependencies
import { useState } from "react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

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
import FileUpload from "./file-upload";

// Define form schema
const formSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  email: z.string().email("Enter valid email address").optional(),
  contact: z.string().min(10, "Enter valid contact number"),
  message: z.string().min(30, "Message must be at least 30 characters"),
  designUrl: z.string(),
});

export default function CustomForm() {
  // Define state variables
  const [messageInputLength, setMessageInputLength] = useState(0); // Message input (Using it for the character count)
  const { toast } = useToast();

  // Submit form function
  const submitForm = async (data: z.infer<typeof formSchema>) => {
    try {
      // Today's Date
      const date = format(new Date(), "PP");
      // Enquiry Message to be sent
      const message = `!!!Customize Design ${date} \nName: ${data.name}\nContact: ${data.contact}\nEmail: ${data.email}\nMessage: ${data.message}\nDesign: ${data.designUrl}`;

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
        {/* Image Upload Zone */}
        <FormField
          control={form.control}
          name="designUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUpload value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormDescription className={`text-right items-center flex justify-end`}>
                <strong>PDF or Image size should be less than 8MB</strong>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
                <Input value={field.value} onChange={field.onChange} placeholder="Enter your name" />
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
                  onChange={(e) => form.setValue("contact", String(e.target.value))}
                  value={field.value}
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
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  type="email"
                  placeholder="Enter your email address"
                />
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
                  value={field.value}
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
          Submit <span className=" hidden md:inline whitespace-pre-wrap "> your design</span>
        </Button>
      </form>
    </Form>
  );
}
