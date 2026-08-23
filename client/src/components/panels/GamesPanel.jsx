import { useState } from 'react'
import PanelShell from './PanelShell'

function GamesPanel() {
  const [score, setScore] = useState(0)

  return (
    <PanelShell title="Games" tag="Basic">
      <p className="text-sm text-slate-300">Mini-juego rapido: aumenta el score antes de conectar nuevos modos.</p>
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 p-4">
        <span className="text-3xl font-bold text-amber-300">{score}</span>
        <button
          type="button"
          onClick={() => setScore((value) => value + 1)}
          className="rounded-xl bg-amber-400 px-4 py-2 font-semibold text-slate-900 transition hover:brightness-95"
        >
          +1
        </button>
      </div>
    </PanelShell>
  )
}

export default GamesPanel
