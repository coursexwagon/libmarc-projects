"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company } from "@/lib/site-data";

// Services offered by Libmarc Projects — used to populate the
// "Service Required" select. The 5 services + "Other".
const serviceOptions = [
  "Demolition & Rock Blasting",
  "Rubble Removal",
  "Plant Hire",
  "CCTV Installation",
  "Roller Shutter & Gates",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  siteAddress: string;
  preferredDate: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  siteAddress: "",
  preferredDate: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const handleSelect = (value: string) =>
    setForm((s) => ({ ...s, service: value }));

  // Build a pre-filled WhatsApp message based on whatever the user
  // has already typed into the form — handy for fast enquiries.
  const whatsappMessage = React.useMemo(() => {
    const lines = [
      "Hi Libmarc Projects, I'd like to request a quote.",
      "",
      `Name: ${form.name || "—"}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.service ? `Service: ${form.service}` : null,
      form.siteAddress ? `Site Address: ${form.siteAddress}` : null,
      form.preferredDate ? `Preferred Date: ${form.preferredDate}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }, [form]);

  const whatsappHref = `https://wa.me/${company.whatsapp1}?text=${whatsappMessage}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validation — mirrors the server route.
    if (form.name.trim().length < 2) {
      toast.error("Name required", {
        description: "Please enter your full name.",
      });
      return;
    }
    if (!form.phone.trim() && !form.email.trim()) {
      toast.error("Contact detail required", {
        description: "Please enter either a phone number or an email so we can reply.",
      });
      return;
    }
    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }
    if (form.message.trim().length < 10) {
      toast.error("Message too short", {
        description: "Please include at least 10 characters describing your project.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as {
        success?: boolean;
        id?: string;
        error?: string;
        message?: string;
      };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed.");
      }

      toast.success("Quote request sent!", {
        description: `Reference ${data.id ?? ""} — we'll reply within one business day.`,
      });
      setForm(initialState);
      setDone(true);
    } catch (err) {
      toast.error("Something went wrong", {
        description:
          err instanceof Error
            ? err.message
            : "Please try again or WhatsApp us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="border border-border bg-background p-8 lg:p-10 text-center">
        <div className="inline-flex size-16 items-center justify-center bg-primary text-primary-foreground mb-5">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-display text-2xl font-bold">Quote request received.</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Thanks for reaching out. The Libmarc Projects team will review your
          enquiry and reply within one business day. For urgent jobs, call or
          WhatsApp us directly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            type="button"
            variant="outline"
            className="rounded-none font-bold uppercase tracking-wide"
            onClick={() => setDone(false)}
          >
            Send another request
          </Button>
          <a
            href={`https://wa.me/${company.whatsapp1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 border border-green-600 px-4 text-sm font-bold uppercase tracking-wide text-green-700 hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-background p-6 lg:p-8 space-y-5"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Full Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            autoComplete="name"
            required
            className="rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="071 234 5678"
            autoComplete="tel"
            className="rounded-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            autoComplete="email"
            className="rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="service"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Service Required
          </Label>
          <Select value={form.service} onValueChange={handleSelect}>
            <SelectTrigger id="service" className="rounded-none w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label
            htmlFor="siteAddress"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Site Address
          </Label>
          <Input
            id="siteAddress"
            value={form.siteAddress}
            onChange={update("siteAddress")}
            placeholder="Suburb or street address"
            autoComplete="street-address"
            className="rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="preferredDate"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Preferred Date
          </Label>
          <Input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={update("preferredDate")}
            className="rounded-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-wide"
        >
          Message <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project — scope, site access, target dates, and anything else we should know."
          rows={5}
          required
          className="rounded-none resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
        <p className="text-xs text-muted-foreground max-w-sm">
          By submitting, you agree to be contacted about your enquiry. We never
          share your information.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12 px-7 rounded-none w-full sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Send Quote Request
            </>
          )}
        </Button>
      </div>

      {/* Or WhatsApp us directly — pre-fills whatever the user typed. */}
      <div className="mt-2 border-t border-border pt-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-foreground">
              Prefer to chat now?
            </p>
            <p className="text-xs text-muted-foreground">
              WhatsApp us directly — your details pre-fill automatically.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 border-2 border-green-600 px-6 text-sm font-bold uppercase tracking-wide text-green-700 hover:bg-green-600 hover:text-white transition-colors"
          >
            <MessageCircle className="size-5" />
            Or WhatsApp Us Directly
          </a>
        </div>
      </div>
    </form>
  );
}
