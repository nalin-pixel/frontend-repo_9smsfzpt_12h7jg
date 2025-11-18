export function Section({title, children, id}){
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export function Card({title, subtitle, children}){
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60 p-5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
      <h3 className="text-white font-semibold">{title}</h3>
      {subtitle && <p className="text-blue-200/70 text-sm">{subtitle}</p>}
      <div className="mt-3 text-blue-100/90 text-sm">
        {children}
      </div>
    </div>
  )
}
