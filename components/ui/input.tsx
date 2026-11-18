import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-[52px] w-full min-w-0 rounded-xl border border-navy bg-ivory px-4 text-base text-ink transition-[background-color,box-shadow] outline-none placeholder:text-ink-muted focus-visible:bg-raised focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-raised disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-promo aria-invalid:ring-promo",
        className
      )}
      {...props}
    />
  )
}

export { Input }
