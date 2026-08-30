"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { DATA } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const socials = Object.values(DATA.contact.social).filter((s) => s.navbar)

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="font-semibold tracking-tight text-foreground">
          {DATA.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {DATA.navbar.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <Separator orientation="vertical" className="mx-2 h-5" />
          {socials.map((social) => (
            <Button key={social.name} variant="ghost" size="icon-sm" asChild>
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="size-4" aria-hidden />
              </a>
            </Button>
          ))}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon-sm" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="size-5" aria-hidden />
          </Button>
        </div>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 px-4">
            {DATA.navbar.map((item) => (
              <SheetClose asChild key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </SheetClose>
            ))}
          </div>
          <Separator />
          <div className="flex items-center gap-1 px-4 pb-4">
            {socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon-sm" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="size-4" aria-hidden />
                </a>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
