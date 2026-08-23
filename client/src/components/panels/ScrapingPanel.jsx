import { useState } from 'react'
import PanelShell from './PanelShell'

function ScrapingPanel() {
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState('Listo para extraer contenido')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!url.trim()) {
      setMessage('Ingresa una URL valida para continuar')
      return
    }

    setMessage(`Extraccion iniciada para: ${url}`)
  }

  return (
    <PanelShell title="Scraping" tag="User zero">
      <form onSubmit={handleSubmit} className="space-y-3">
        <label htmlFor="scraping-url" className="block text-sm text-slate-300">
          URL objetivo
        </label>
        <input
          id="scraping-url"
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-xl border border-slate-600 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-400 transition focus:ring"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-semibold text-white transition hover:brightness-110"
        >
          Extraer
        </button>
      </form>
      <p className="mt-3 text-sm text-cyan-100/90">{message}</p>
    </PanelShell>
  )
}

export default ScrapingPanel
