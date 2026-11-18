import { bookingSchema } from "@/lib/booking-schema";

export async function POST(request: Request) {
  try {
    const parsed = bookingSchema.safeParse(await request.json());
    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.issues[0]?.message ?? "Demande invalide." },
        { status: 400 },
      );
    }

    // TODO: send a notification e-mail to the centre and/or store the request
    // (database or Google Sheet). Nothing is sent or saved yet, on purpose.
    // The request holds personal data: do not log it.

    return Response.json({ ok: true });
  } catch (error) {
    // Invalid JSON or an unexpected failure: log server-side, answer generically.
    console.error("Booking request failed", error);
    return Response.json(
      { error: "Impossible d'envoyer la demande. Veuillez réessayer." },
      { status: 400 },
    );
  }
}
