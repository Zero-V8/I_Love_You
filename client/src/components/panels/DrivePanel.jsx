import { useState } from 'react'
import PanelShell from './PanelShell'

const initialItems = ['briefing.md', 'ideas.txt', 'capturas.zip']

function DrivePanel() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <PanelShell title="Drive">
      <div
        className={`rounded-2xl border-2 border-dashed p-4 transition ${
          isDragging ? 'border-cyan-300 bg-cyan-300/10' : 'border-slate-600 bg-slate-950/60'
        }`}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault()
          setIsDragging(false)
        }}
      >
        <p className="mb-3 text-sm text-slate-300">Arrastra archivos aqui o revisa los items actuales</p>
        <ul className="space-y-2 text-sm">
          {initialItems.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
            >
              <span>{item}</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">item</span>
            </li>
          ))}
        </ul>
      </div>
    </PanelShell>
  )
}

export default DrivePanel
