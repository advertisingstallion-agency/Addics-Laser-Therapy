import { z } from "zod";
import { reservation, therapies } from "@/content/site";

export const bookingTherapies = [
  ...therapies.map((therapy) => therapy.name),
  reservation.adviceOption,
];

// Today's date in Morocco as yyyy-MM-dd, so "past" means the same on client and server.
function todayInMorocco() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Africa/Casablanca" });
}

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indiquez votre prénom et nom.")
    .max(100, "Le nom est trop long."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ().-]{8,20}$/, "Indiquez un numéro de téléphone valide."),
  therapy: z
    .string()
    .refine((value) => bookingTherapies.includes(value), "Choisissez un soin."),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choisissez une date.")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Cette date n'est pas valide."
    )
    .refine((value) => value >= todayInMorocco(), "Choisissez une date à venir."),
  message: z.string().trim().max(1000, "Le message est trop long (1000 caractères)."),
});

export type BookingInput = z.infer<typeof bookingSchema>;
