import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full resize-y rounded-xl border border-navy bg-ivory px-4 py-3.5 text-base text-ink transition-[background-color,box-shadow] outline-none placeholder:text-ink-muted focus-visible:bg-raised focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-raised disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-promo aria-invalid:ring-promo",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
