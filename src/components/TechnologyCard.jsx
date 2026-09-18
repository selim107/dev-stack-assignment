export default function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="card-hover flex min-h-[310px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
          <img src={technology.icon} alt={`${technology.name} logo`} className="h-full w-full object-contain" loading="lazy" />
        </div>
        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-700">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-950">{technology.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{technology.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
        <span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-slate-600">{technology.category}</span>
        <span className="rounded-md bg-orange-50 px-2.5 py-1.5 text-orange-600">{technology.difficulty}</span>
        <span className="ml-auto inline-flex items-center gap-1 text-slate-700">
          <span className="text-amber-400">★</span> {technology.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-bold transition ${
          isAdded
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-slate-950 text-white hover:bg-violet-700'
        }`}
      >
      {isAdded ? '✓ Added to Stack' : 'Add to Stack →'}
      </button>
    </article>
  )
}
