"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Renovation",
  "Other",
];

const budgets = [
  "Under $250k",
  "$250k - $1M",
  "$1M - $10M",
  "$10M+",
];

const timelines = [
  "ASAP (0-3 months)",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Just exploring",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const { toast } = useToast();

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const handleSelect = (key: keyof FormState) => (value: string) =>
    setForm((s) => ({ ...s, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validation (mirrors the server route).
    if (form.name.trim().length < 2) {
      toast({
        title: "Name required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast({
        title: "Valid email required",
        description: "Please enter a valid email address so we can reply.",
        variant: "destructive",
      });
      return;
    }
    if (form.message.trim().length < 10) {
      toast({
        title: "Message too short",
        description: "Please include at least 10 characters describing your project.",
        variant: "destructive",
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

      toast({
        title: "Message sent!",
        description: `Your inquiry ${data.id ?? ""} is in. We'll reply within one business day.`,
      });
      setForm(initialState);
      setDone(true);
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or call us directly.",
        variant: "destructive",
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
        <h3 className="font-display text-2xl font-bold">Message received.</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Thanks for reaching out. A pre-construction lead will review your
          inquiry and reply within one business day.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setDone(false)}
        >
          Send another message
        </Button>
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
          <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wide">
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
          <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wide">
            Email <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            autoComplete="email"
            required
            className="rounded-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(415) 555-0192"
            autoComplete="tel"
            className="rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wide">
            Project Type
          </Label>
          <Select
            value={form.projectType}
            onValueChange={handleSelect("projectType")}
          >
            <SelectTrigger id="projectType" className="rounded-none w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-wide">
            Budget Range
          </Label>
          <Select value={form.budget} onValueChange={handleSelect("budget")}>
            <SelectTrigger id="budget" className="rounded-none w-full">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline" className="text-xs font-bold uppercase tracking-wide">
            Preferred Timeline
          </Label>
          <Select value={form.timeline} onValueChange={handleSelect("timeline")}>
            <SelectTrigger id="timeline" className="rounded-none w-full">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wide">
          Message <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project — location, scope, square footage, target dates, and anything else we should know."
          rows={5}
          required
          className="rounded-none resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
        <p className="text-xs text-muted-foreground max-w-sm">
          By submitting, you agree to be contacted about your inquiry. We never
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
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
