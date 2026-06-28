"use client";

import * as React from "react";
import Image from "next/image";
import { Send, Loader2, CheckCircle2, MessageCircle, Phone } from "lucide-react";
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

    if (form.name.trim().length < 2) {
      toast.error("Name required", {
        description: "Please enter your full name.",
      });
      return;
    }
    if (!form.phone.trim() && !form.email.trim()) {
      toast.error("Contact detail required", {
        description:
          "Please enter either a phone number or an email so we can reply.",
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
        description:
          "Please include at least 10 characters describing your project.",
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
        <h3 className="font-display text-2xl font-bold">
          Quote request received.
        </h3>
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
    <div className="relative ml-0 lg:ml-4">
      {/* Shadow underneath */}
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.10) 100%)",
          transform: "rotate(0.3deg) translateY(6px)",
          filter: "blur(10px)",
        }}
      />

      {/* THE PAPER */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #fdf8ee 0%, #faf2e0 15%, #f7ecce 100%)",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
          transform: "rotate(-0.05deg)",
          fontFamily:
            "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top binding strip */}
        <div
          className="h-[6px]"
          style={{
            background:
              "linear-gradient(90deg, #d35400 0%, #e67e22 40%, #d35400 100%)",
          }}
        />

        {/* Perforation line below strip */}
        <div
          className="h-px mx-4"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 4px, rgba(180,160,120,0.3) 4px, rgba(180,160,120,0.3) 6px)",
          }}
        />

        {/* Main content */}
        <div className="px-6 sm:px-10 lg:px-12 pt-6 pb-8">
          {/* LETTERHEAD */}
          <div className="flex items-start justify-between pb-4 mb-6 border-b border-dashed"
            style={{ borderColor: "rgba(180,160,120,0.25)" }}
          >
            <div>
              <Image
                src="/images/real/libmarc-logo.png"
                alt="Libmarc Projects"
                width={180}
                height={50}
                className="h-12 w-auto object-contain mb-1"
              />
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase"
                style={{ color: "#b8a080" }}
              >
                Demolition · Plant Hire · Security
              </p>
            </div>
            <div className="text-right">
              {/* Stamped reference number */}
              <div className="inline-block px-3 py-1 mb-1"
                style={{
                  background: "rgba(200,80,20,0.08)",
                  border: "1px solid rgba(200,80,20,0.15)",
                }}
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "#c85014" }}
                >
                  Ref: LIB-{Date.now().toString(36).toUpperCase().slice(-6)}
                </p>
              </div>
              <p className="text-xs font-medium mt-1"
                style={{ color: "#a89070" }}
              >
                {new Date().toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* QUOTE HEADER */}
          <div className="text-center mb-7">
            <h3
              className="font-display text-2xl font-bold uppercase tracking-wider inline-block px-8 py-2"
              style={{
                color: "#3d3425",
                borderBottom: "3px double rgba(180,160,120,0.3)",
              }}
            >
              Request for Quote
            </h3>
            <p className="text-xs mt-2" style={{ color: "#a89070" }}>
              Fill in your details below. We&apos;ll respond within 2 hours.
            </p>
          </div>

          {/* FORM FIELDS */}
          <div className="space-y-0">
            <div className="grid sm:grid-cols-2">
              <div className="border-r border-b p-3 sm:p-4"
                style={{ borderColor: "rgba(180,160,120,0.15)" }}
              >
                <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#a89070" }}
                >
                  Full Name <span style={{ color: "#c85014" }}>*</span>
                </Label>
                <Input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                  className="border-0 rounded-none px-0 h-7 text-sm focus-visible:ring-0 bg-transparent"
                  style={{
                    color: "#3d3425",
                    fontFamily: "'Courier New', monospace",
                  }}
                />
              </div>
              <div className="border-b p-3 sm:p-4"
                style={{ borderColor: "rgba(180,160,120,0.15)" }}
              >
                <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#a89070" }}
                >
                  Phone
                </Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="071 234 5678"
                  autoComplete="tel"
                  className="border-0 rounded-none px-0 h-7 text-sm focus-visible:ring-0 bg-transparent"
                  style={{
                    color: "#3d3425",
                    fontFamily: "'Courier New', monospace",
                  }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3">
              <div className="border-r border-b p-3 sm:p-4 sm:col-span-1"
                style={{ borderColor: "rgba(180,160,120,0.15)" }}
              >
                <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#a89070" }}
                >
                  Email
                </Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className="border-0 rounded-none px-0 h-7 text-sm focus-visible:ring-0 bg-transparent"
                  style={{
                    color: "#3d3425",
                    fontFamily: "'Courier New', monospace",
                  }}
                />
              </div>
              <div className="border-r border-b p-3 sm:p-4"
                style={{ borderColor: "rgba(180,160,120,0.15)" }}
              >
                <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#a89070" }}
                >
                  Service Required
                </Label>
                <Select value={form.service} onValueChange={handleSelect}>
                  <SelectTrigger
                    className="border-0 rounded-none px-0 h-7 text-sm focus:ring-0 bg-transparent"
                    style={{
                      color: form.service ? "#3d3425" : "#a89070",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    <SelectValue placeholder="Select service" />
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
              <div className="border-b p-3 sm:p-4"
                style={{ borderColor: "rgba(180,160,120,0.15)" }}
              >
                <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#a89070" }}
                >
                  Preferred Date
                </Label>
                <Input
                  type="date"
                  value={form.preferredDate}
                  onChange={update("preferredDate")}
                  className="border-0 rounded-none px-0 h-7 text-sm focus-visible:ring-0 bg-transparent"
                  style={{
                    color: "#3d3425",
                    fontFamily: "'Courier New', monospace",
                  }}
                />
              </div>
            </div>

            <div className="border-b p-3 sm:p-4"
              style={{ borderColor: "rgba(180,160,120,0.15)" }}
            >
              <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                style={{ color: "#a89070" }}
              >
                Site Address
              </Label>
              <Input
                value={form.siteAddress}
                onChange={update("siteAddress")}
                placeholder="Suburb or street address"
                autoComplete="street-address"
                className="border-0 rounded-none px-0 h-7 text-sm focus-visible:ring-0 bg-transparent"
                style={{
                  color: "#3d3425",
                  fontFamily: "'Courier New', monospace",
                }}
              />
            </div>

            <div className="p-3 sm:p-4"
              style={{ borderColor: "rgba(180,160,120,0.15)" }}
            >
              <Label className="block text-[9px] font-bold uppercase tracking-[0.12em] mb-1"
                style={{ color: "#a89070" }}
              >
                 Project Description <span style={{ color: "#c85014" }}>*</span>
              </Label>
              <Textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about your project — scope, site access, target dates, and anything else we should know."
                rows={6}
                required
                className="border-0 rounded-none px-0 resize-y focus-visible:ring-0 bg-transparent"
                style={{
                  color: "#3d3425",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, rgba(180,160,120,0.08) 23px, rgba(180,160,120,0.08) 24px)",
                }}
              />
            </div>
          </div>

          {/* BOTTOM ACTIONS */}
          <div className="mt-6 pt-5"
            style={{ borderTop: "1px dashed rgba(180,160,120,0.25)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full"
                  style={{ background: "#4ade80" }}
                />
                <p className="text-[10px]" style={{ color: "#a89070" }}>
                  We respond within 2 hours during business hours
                </p>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="h-11 px-8 font-bold uppercase tracking-wider text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-none w-full sm:w-auto transition-all active:scale-[0.98]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* WHATSAPP OUTRO */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-[11px]" style={{ color: "#b8a080" }}>
              Prefer to chat? WhatsApp pre-fills what you typed:
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-2 px-4 text-[11px] font-bold uppercase tracking-wider transition-all"
              style={{
                color: "#166534",
                border: "1.5px solid #16a34a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#16a34a";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#166534";
              }}
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom fold */}
        <div className="h-4 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #f7ecce 0%, #f2e2c0 30%, transparent 100%)",
          }}
        >
          {/* Fold crease line */}
          <div className="absolute top-0 left-4 right-4 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(180,160,120,0.2) 3px, rgba(180,160,120,0.2) 5px)",
            }}
          />
        </div>

        {/* FOOTER NOTE */}
        <div className="px-6 sm:px-10 lg:px-12 pb-4 pt-2 flex items-center justify-between">
          <p className="text-[9px] tracking-wider uppercase"
            style={{ color: "#c8b898" }}
          >
            Libmarc Projects · Yeoville, Johannesburg
          </p>
          <p className="text-[9px] font-mono"
            style={{ color: "#c8b898" }}
          >
            v.{Math.random().toString(36).slice(2, 6).toUpperCase()}
          </p>
        </div>
      </form>
    </div>
  );
}
