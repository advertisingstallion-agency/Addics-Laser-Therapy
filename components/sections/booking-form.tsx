"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { format, parseISO, startOfToday } from "date-fns";
import { fr } from "react-day-picker/locale";
import { ArrowRight, CalendarDays, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { therapyIcons } from "@/components/sections/therapy-icons";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { reservation, therapies } from "@/content/site";
import { useBooking } from "@/hooks/use-booking";
import { bookingSchema } from "@/lib/booking-schema";

const copy = reservation.form;

function FieldError({ errors }: { errors: unknown[] }) {
  const first = errors[0] as { message?: string } | undefined;
  if (!first?.message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[13px] leading-5 text-promo">
      {first.message}
    </p>
  );
}

// Rendered only while the popover is open, so "today" is read on the client at that moment.
function DateCalendar({
  value,
  onPick,
}: {
  value: string;
  onPick: (date: string) => void;
}) {
  return (
    <Calendar
      mode="single"
      showOutsideDays={false}
      locale={fr}
      weekStartsOn={1}
      selected={value ? parseISO(value) : undefined}
      defaultMonth={value ? parseISO(value) : undefined}
      onSelect={(date) => onPick(date ? format(date, "yyyy-MM-dd") : "")}
      disabled={{ before: startOfToday() }}
    />
  );
}

export function BookingForm() {
  const booking = useBooking();
  const [dateOpen, setDateOpen] = useState(false);

  const form = useForm({
    defaultValues: { name: "", phone: "", therapy: "", date: "", message: "" },
    validators: { onChange: bookingSchema, onSubmit: bookingSchema },
    onSubmit: ({ value }) => {
      const parsed = bookingSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(copy.invalid);
        return;
      }
      booking.mutate(parsed.data, { onSuccess: () => form.reset() });
    },
  });

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        form.handleSubmit();
      }}
      className="rounded-[20px] border border-line bg-raised p-6 text-ink shadow-[0_24px_56px_rgba(0,0,0,.35)] sm:p-10"
    >
      <p className="eyebrow mb-2 text-champagne-text">{copy.eyebrow}</p>
      <h3 className="mb-7 text-[26px] leading-8 tracking-[-0.02em]">{copy.title}</h3>

      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <form.Field name="name">
          {(field) => (
            <div>
              <Label htmlFor="booking-name">{copy.name}</Label>
              <Input
                id="booking-name"
                autoComplete="name"
                placeholder={copy.namePlaceholder}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
              />
              {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
            </div>
          )}
        </form.Field>

        <form.Field name="phone">
          {(field) => (
            <div>
              <Label htmlFor="booking-phone">{copy.phone}</Label>
              <Input
                id="booking-phone"
                type="tel"
                autoComplete="tel"
                placeholder={copy.phonePlaceholder}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
              />
              {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
            </div>
          )}
        </form.Field>
      </div>

      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <form.Field name="therapy">
          {(field) => (
            <div>
              <Label htmlFor="booking-therapy">{copy.therapy}</Label>
              <Select
                value={field.state.value || null}
                onValueChange={(value) => field.handleChange(value ?? "")}
              >
                <SelectTrigger
                  id="booking-therapy"
                  onBlur={field.handleBlur}
                  aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                  className="w-full rounded-xl border-navy bg-ivory px-4 text-base text-ink data-[size=default]:h-[52px] data-placeholder:text-ink-muted"
                >
                  <SelectValue placeholder={copy.therapyPlaceholder} />
                </SelectTrigger>
                <SelectContent
                  alignItemWithTrigger={false}
                  sideOffset={8}
                  className="min-w-(--anchor-width) rounded-xl border border-line bg-raised p-2 text-ink shadow-[0_24px_48px_rgba(26,34,49,.18)] ring-0"
                >
                  {therapies.map((therapy) => {
                    const Icon = therapyIcons[therapy.id];
                    return (
                      <SelectItem
                        key={therapy.id}
                        value={therapy.name}
                        className="rounded-lg px-3 py-2.5 text-base font-medium focus:bg-champagne-soft focus:text-ink"
                      >
                        <span className="flex size-8 flex-none items-center justify-center rounded-full border border-champagne text-navy">
                          <Icon className="size-4" strokeWidth={1.5} />
                        </span>
                        {therapy.name}
                      </SelectItem>
                    );
                  })}
                  <SelectItem
                    value={reservation.adviceOption}
                    className="rounded-lg px-3 py-2.5 text-base font-medium focus:bg-champagne-soft focus:text-ink"
                  >
                    <span className="flex size-8 flex-none items-center justify-center rounded-full border border-champagne text-navy">
                      <MessageCircle className="size-4" strokeWidth={1.5} />
                    </span>
                    {reservation.adviceOption}
                  </SelectItem>
                </SelectContent>
              </Select>
              {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
            </div>
          )}
        </form.Field>

        <form.Field name="date">
          {(field) => (
            <div>
              <Label htmlFor="booking-date">{copy.date}</Label>
              <Popover open={dateOpen} onOpenChange={setDateOpen}>
                <PopoverTrigger
                  id="booking-date"
                  onBlur={field.handleBlur}
                  aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                  className={`flex h-[52px] w-full items-center justify-between gap-3 rounded-xl border border-navy bg-ivory px-4 text-left text-base outline-none focus-visible:bg-raised focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-raised aria-invalid:border-promo ${field.state.value ? "text-ink" : "text-ink-muted"}`}
                >
                  {field.state.value
                    ? format(parseISO(field.state.value), "d MMMM yyyy", { locale: fr })
                    : copy.datePlaceholder}
                  <CalendarDays className="size-[18px] flex-none text-navy" strokeWidth={1.5} />
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  sideOffset={8}
                  className="w-auto rounded-xl border border-line bg-raised p-2 shadow-[0_24px_48px_rgba(26,34,49,.18)] ring-0"
                >
                  <DateCalendar
                    value={field.state.value}
                    onPick={(date) => {
                      field.handleChange(date);
                      setDateOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
            </div>
          )}
        </form.Field>
      </div>

      <form.Field name="message">
        {(field) => (
          <div className="mb-7">
            <Label htmlFor="booking-message">{copy.message}</Label>
            <Textarea
              id="booking-message"
              placeholder={copy.messagePlaceholder}
              value={field.state.value}
              onChange={(event) => field.handleChange(event.target.value)}
              onBlur={field.handleBlur}
            />
            {field.state.meta.isTouched && <FieldError errors={field.state.meta.errors} />}
          </div>
        )}
      </form.Field>

      <Button type="submit" className="w-full" disabled={booking.isPending}>
        {booking.isPending ? (
          <>
            <Loader2 className="animate-spin" />
            {copy.sending}
          </>
        ) : (
          <>
            {copy.submit}
            <ArrowRight />
          </>
        )}
      </Button>
      <p className="mt-4 text-center text-[13px] leading-5 text-ink-muted">{copy.note}</p>
    </form>
  );
}
