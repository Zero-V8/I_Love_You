import { useMemo, useState } from 'react'
import PanelShell from './PanelShell'

function NotesPanel() {
  const [note, setNote] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Definir endpoints iniciales', done: false },
    { id: 2, text: 'Conectar Spotify', done: true },
  ])

  const doneCount = useMemo(() => tasks.filter((task) => task.done).length, [tasks])

  const addTask = (event) => {
    event.preventDefault()

    if (!note.trim()) {
      return
    }

    setTasks((prev) => [...prev, { id: Date.now(), text: note.trim(), done: false }])
    setNote('')
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <PanelShell title="Notes">
      <form onSubmit={addTask} className="mb-3 flex gap-2">
        <input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Nueva tarea"
          className="w-full rounded-xl border border-slate-600 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-400 transition focus:ring"
        />
        <button
          type="submit"
          className="rounded-xl border border-cyan-300/50 bg-cyan-300/20 px-3 py-2 font-semibold text-cyan-100"
        >
          +
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm"
          >
            <label className="flex items-center gap-2 text-slate-200">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 accent-cyan-400"
              />
              <span className={task.done ? 'line-through text-slate-500' : ''}>{task.text}</span>
            </label>
            <button
              type="button"
              onClick={() => removeTask(task.id)}
              className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-300 hover:bg-slate-800"
              aria-label="Eliminar tarea"
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">
        {doneCount}/{tasks.length} tareas completadas
      </p>
    </PanelShell>
  )
}

export default NotesPanel
