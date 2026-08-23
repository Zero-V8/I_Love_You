import PanelShell from './PanelShell'

function APIsPanel() {
  return (
    <PanelShell title="APIs">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <article className="rounded-xl border border-emerald-300/40 bg-emerald-300/10 p-3">
          <h3 className="font-semibold text-emerald-100">Spotify</h3>
          <p className="mt-1 text-sm text-emerald-50/85">API / reproductor preparado para conectar OAuth.</p>
        </article>

        <article className="rounded-xl border border-rose-300/40 bg-rose-300/10 p-3">
          <h3 className="font-semibold text-rose-100">Netflix</h3>
          <p className="mt-1 text-sm text-rose-50/85">API no conectado</p>
        </article>

        <article className="rounded-xl border border-indigo-300/40 bg-indigo-300/10 p-3 sm:col-span-2">
          <h3 className="font-semibold text-indigo-100">Hub</h3>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <a href="#" className="rounded-full border border-indigo-200/50 px-3 py-1 text-indigo-50 hover:bg-indigo-200/20">
              Docs
            </a>
            <a href="#" className="rounded-full border border-indigo-200/50 px-3 py-1 text-indigo-50 hover:bg-indigo-200/20">
              Console
            </a>
            <a href="#" className="rounded-full border border-indigo-200/50 px-3 py-1 text-indigo-50 hover:bg-indigo-200/20">
              Status
            </a>
          </div>
        </article>
      </div>
    </PanelShell>
  )
}

export default APIsPanel
