"use client"

import * as React from "react"
import { cn } from "cn"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 block text-[13px] leading-5 font-medium text-ink select-none",
        className
      )}
      {...props}
    />
  )
}

export { Label }
