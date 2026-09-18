export default function Hero() {
  return (
    <section id="home" className="soft-grid overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
        <div className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-1.5 text-xs font-bold text-violet-700 shadow-sm">
            ✦ Build smarter. Ship faster.
          </span>
          <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[64px]">
            Build Your Ideal
            <br />
            <span className="brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Discover the right technologies for your next project. Explore modern tools, compare their strengths, and build a stack that fits your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#technologies" className="gradient-button inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition">
              Explore Technologies <span className="ml-2">→</span>
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:justify-self-end">
          <div className="absolute inset-10 rounded-full bg-fuchsia-200/40 blur-3xl" />
          <img
            src="/assets/hero-visual.png"
            alt="Neon futuristic development stack illustration"
            className="relative w-full drop-shadow-[0_25px_45px_rgba(124,58,237,0.2)]"
          />
        </div>
      </div>
    </section>
  )
}
