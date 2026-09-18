const groups = {
  Product: ['Technologies', 'Projects', 'Features'],
  Company: ['About', 'Contact', 'Careers'],
  Legal: ['Privacy', 'Terms', 'License'],
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5 font-bold text-[18px]">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-slate-950 text-xs font-black text-white">&lt;/&gt;</span>
            <span className="brand-gradient">Dev Stack</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            A simple workspace for exploring modern development technologies and building a practical stack for your next project.
          </p>
          <div className="mt-5 flex gap-2">
            {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#contact" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:border-violet-200 hover:text-violet-700">
                {social}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 hover:text-violet-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#contact" className="hover:text-violet-600">Privacy</a>
            <a href="#contact" className="hover:text-violet-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
