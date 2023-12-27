"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email(),
  interest: z.string(),
  description: z.string().min(2).max(2000),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      description: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = "service_7qqubp8";
    const templateId = "template_xvndtak";
    const publicKey = "MbYCemqgbmeXFfwpV";

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Chainverse Lab",
      message: values.description,
      interested_in: values.interest,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast({
          description: "Your message has been sent.",
        });
        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        setIsSubmitting(false);
      });
  }
  return (
    <div className="">
      <Card className="lg:w-[600px]">
        <CardHeader>
          <CardTitle>Connect With Us By Filling The Form</CardTitle>
          <CardDescription className="text-xs">
            Feel free to reach out to us regarding any queries, partnership
            opportunities, or other requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Welcome! What should we call you?</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Would you let us know your email address?
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Intersted In</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a your area of interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ServicesData.map((area, idx) => {
                            return (
                              <SelectItem value={area.value} key={idx}>
                                {area.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmitting} type="submit">
                {" "}
                {isSubmitting ? "Sending Message ....." : "Send Message"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;

const ServicesData = [
  { name: "Front-End Web Development", value: "frontenddev" },
  { name: "BlockChain Development", value: "blockchaindev" },
  { name: "BlockChain Solutin Architecture", value: "blockchainsol" },
  { name: "BAAS", value: "baas" },
  { name: "ReadyMade", value: "readymade" },
];
