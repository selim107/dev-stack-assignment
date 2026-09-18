import { useState } from 'react'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-2.5 font-bold text-[18px] tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-slate-950 text-white shadow-sm">
        <span className="text-sm font-black">&lt;/&gt;</span>
      </span>
      <span className="brand-gradient">Dev Stack</span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:w-1/3">
         <button
  type="button"
  aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
  aria-expanded={open}
  aria-controls="mobile-navigation"
  className="btn btn-ghost btn-sm px-2 lg:hidden"
  onClick={() => setOpen((value) => !value)}
>
            <span className="text-xl">☰</span>
          </button>
          <div className="hidden lg:block">
            <Brand />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <div className="lg:hidden">
            <Brand />
          </div>
          <div className="hidden items-center justify-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-violet-600">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-1.5 lg:w-1/3 lg:gap-2">
          <a href="#contact" className="px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:text-violet-600 sm:text-sm">
            Sign In
          </a>
          <a href="#contact" className="rounded-full bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-violet-700 sm:px-4 sm:text-sm">
            Sign Up
          </a>
        </div>
      </nav>

      {open && (
  <div
    id="mobile-navigation"
    className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
  >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
