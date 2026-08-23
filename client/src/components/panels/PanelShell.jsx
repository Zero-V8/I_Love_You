function PanelShell({ title, tag, children, className = '' }) {
  return (
    <section
      className={`rounded-2xl border border-slate-700/90 bg-slate-900/70 p-4 shadow-[inset_0_1px_0_rgba(148,163,184,0.15)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-slate-100">{title}</h2>
        {tag ? (
          <span className="rounded-full border border-amber-300/40 bg-amber-200/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
            {tag}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default PanelShell
