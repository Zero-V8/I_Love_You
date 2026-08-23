import PanelShell from './PanelShell'

function VoidPanel() {
  return (
    <PanelShell title="The Void" tag="zero//" className="void-card relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="void-pulse absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="relative flex min-h-56 items-center justify-center">
        <div className="void-orbit h-40 w-40 rounded-full border border-cyan-300/70" />
        <div className="absolute h-24 w-24 rounded-full border border-cyan-200/90 bg-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.45)]" />
      </div>

      <p className="relative text-center text-sm text-cyan-100/85">Nodo visual en expansion para experiencias misteriosas.</p>
    </PanelShell>
  )
}

export default VoidPanel
