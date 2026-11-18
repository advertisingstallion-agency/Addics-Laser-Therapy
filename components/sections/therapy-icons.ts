import { Eye, Hourglass, Leaf, Moon, Zap, type LucideIcon } from "lucide-react";

// One lucide icon per therapy, keyed by the id in content/site.ts.
export const therapyIcons: Record<string, LucideIcon> = {
  emdr: Eye,
  hypnose: Moon,
  sablotherapie: Hourglass,
  laserotherapie: Zap,
  maderotherapie: Leaf,
};
