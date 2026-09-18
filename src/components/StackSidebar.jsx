export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-soft lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-950">Your Stack</h2>
          <p className="mt-1 text-xs text-slate-400">{stack.length} Technology{stack.length === 1 ? '' : 'ies'} Selected</p>
        </div>
        {stack.length > 0 && (
          <button type="button" onClick={onRemoveAll} className="text-xs font-bold text-rose-500 hover:text-rose-700">
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-white text-lg shadow-sm">＋</div>
          <p className="mt-4 text-sm font-bold text-slate-600">Your stack is empty</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Add technologies from the list to start building your ideal stack.</p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div key={technology.id} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white p-2 shadow-sm">
                <img src={technology.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">{technology.name}</p>
                <p className="text-[11px] font-medium text-slate-400">{technology.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(technology)}
                aria-label={`Remove ${technology.name}`}
                className="grid h-7 w-7 place-items-center rounded-full bg-white text-sm font-bold text-slate-400 shadow-sm transition hover:bg-rose-50 hover:text-rose-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}
