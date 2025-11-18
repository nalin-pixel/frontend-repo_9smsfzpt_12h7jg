import { Briefcase, Sparkles, BellRing, CalendarDays, ShieldCheck, Users } from 'lucide-react'

export default function Features(){
  const items = [
    { icon: Sparkles, title: 'Smart Matching', desc: 'Jobs automatically ranked by your skills and preferences.' },
    { icon: Briefcase, title: 'One‑Click Apply', desc: 'Use your verified profile and resume across all listings.' },
    { icon: CalendarDays, title: 'Drive Calendar', desc: 'Interviews synced with academic timetables to avoid clashes.' },
    { icon: BellRing, title: 'Live Notifications', desc: 'Instant updates for approvals, shortlists and offers.' },
    { icon: ShieldCheck, title: 'Privacy First', desc: 'Role‑based access so data is shared only when needed.' },
    { icon: Users, title: 'Unified Portal', desc: 'Students, recruiters and admins on a single source of truth.' },
  ]
  return (
    <section id="features" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Built for real campus workflows</h2>
        <p className="text-blue-200/80 text-center mt-2">Replace PDFs and WhatsApp threads with auditable, automated flows.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc})=> (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/40 p-6 hover:from-blue-900/20 hover:border-blue-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mt-4">{title}</h3>
              <p className="text-blue-200/80 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
