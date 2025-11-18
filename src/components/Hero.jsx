import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-3xl">
          <span className="inline-block text-blue-300 bg-blue-900/40 border border-blue-500/30 px-3 py-1 rounded-full mb-4">Internship & Industrial Training Portal</span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">Turn campus internships into a transparent, data‑driven journey</h1>
          <p className="mt-6 text-blue-100 text-lg">One profile. One click apply. Real‑time approvals and placement‑ready analytics for Students, Recruiters and Admins.</p>
          <div className="mt-8 flex gap-3">
            <a href="#features" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">Explore Features</a>
            <a href="/login" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20">Get Started</a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none select-none absolute -bottom-24 inset-x-0 blur-3xl opacity-50" aria-hidden>
        <div className="mx-auto h-56 w-[80%] bg-gradient-to-r from-blue-600/30 via-cyan-400/30 to-indigo-500/30 rounded-full"></div>
      </div>
    </section>
  )
}
