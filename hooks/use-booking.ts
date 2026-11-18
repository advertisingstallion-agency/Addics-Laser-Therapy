import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { reservation } from "@/content/site";
import { api, getErrorMessage } from "@/lib/axios";
import type { BookingInput } from "@/lib/booking-schema";

export function useBooking() {
  return useMutation({
    mutationFn: async (booking: BookingInput) =>
      (await api.post("/booking", booking)).data,
    onSuccess: () => toast.success(reservation.form.success),
    onError: (error) => toast.error(getErrorMessage(error)),
  });
}
