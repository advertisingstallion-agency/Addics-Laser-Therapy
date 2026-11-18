import axios from "axios";

// Same-origin API routes (e.g. /api/booking).
export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Turns any thrown value into a message that is safe to show in a toast.
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.error;
    if (typeof message === "string") return message;
  }
  return "Une erreur est survenue. Veuillez réessayer.";
}
