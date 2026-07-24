import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      toast.error("Tell us a little about your project.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative bg-foreground overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />
      </div>

      
































































































      
    </section>);

}