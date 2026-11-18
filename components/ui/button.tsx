import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent text-[13px] leading-5 font-medium tracking-[0.1em] whitespace-nowrap uppercase transition-colors duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        default: "bg-navy text-on-navy hover:bg-night",
        secondary: "border-navy bg-transparent text-navy hover:bg-navy-soft",
        ghost: "bg-champagne-soft text-ink hover:bg-sand",
        // Over the dark hero and footer
        onNight: "bg-on-night text-night hover:bg-champagne-soft",
        onNightOutline:
          "border-champagne bg-transparent text-on-night hover:bg-on-night/10",
      },
      size: {
        default: "h-[52px] px-8",
        sm: "h-[46px] px-6",
        icon: "size-[46px]",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
