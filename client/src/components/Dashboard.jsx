import ScrapingPanel from './panels/ScrapingPanel'
import DrivePanel from './panels/DrivePanel'
import APIsPanel from './panels/APIsPanel'
import NotesPanel from './panels/NotesPanel'
import GamesPanel from './panels/GamesPanel'
import VoidPanel from './panels/VoidPanel'

function Dashboard() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(2,6,23,0.7)] backdrop-blur md:p-6">
        <header className="mb-4 rounded-2xl border border-cyan-400/40 bg-slate-900/80 px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 className="title-gradient text-3xl font-semibold tracking-tight md:text-4xl">De Todo un Poco</h1>
            <div className="rounded-xl border border-cyan-300/30 bg-slate-900 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200">
              (Account) - zero and ♡
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ScrapingPanel />
          <DrivePanel />
          <APIsPanel />
          <NotesPanel />
          <GamesPanel />
          <VoidPanel />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
