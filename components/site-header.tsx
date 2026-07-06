'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ContactCta } from '@/components/contact-cta'
import { cn } from '@/lib/utils'

const navItems = [
  { label: '項目簡介', href: '#intro' },
  { label: '期數解析', href: '#phases' },
  { label: '會所設施', href: '#facilities' },
  { label: '周邊配套', href: '#nearby' },
  { label: '小編建議', href: '#editor-review' },
  { label: '優先登記', href: '#register' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-slate-900/60 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/45'
          : 'bg-gradient-to-b from-black/45 to-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-semibold tracking-widest text-white md:text-2xl">
            黃金海灣．意嵐．珀岸
          </span>
          <span className="text-[10px] tracking-[0.3em] text-white/60 md:text-xs">
            GOLD COAST BAY
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ContactCta
            variant="light"
            className="px-5 py-2 text-sm"
            label="登記查詢"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="開啟選單"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/85 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm text-white/85 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <div className="py-3">
              <ContactCta variant="light" className="w-full" label="登記查詢" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
