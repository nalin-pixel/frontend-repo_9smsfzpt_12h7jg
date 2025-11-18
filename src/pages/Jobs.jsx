import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Jobs(){
  const [jobs, setJobs] = useState([])
  const [q, setQ] = useState('')
  const [skill, setSkill] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ fetchJobs() },[])

  const fetchJobs = async ()=>{
    try{
      const token = localStorage.getItem('token')
      const params = new URLSearchParams()
      if(q) params.set('q', q)
      if(skill) params.set('skill', skill)
      const res = await fetch(`${baseUrl}/jobs?${params.toString()}`, {headers:{'Authorization': `Bearer ${token}`}})
      const data = await res.json()
      if(res.ok) setJobs(data)
    }catch{}
  }

  const apply = async (id)=>{
    try{
      const token = localStorage.getItem('token')
      const res = await fetch(`${baseUrl}/jobs/${id}/apply`, {method:'POST', headers:{'Authorization': `Bearer ${token}`}})
      if(res.ok) fetchJobs()
    }catch{}
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Opportunities</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search roles or companies" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          <input value={skill} onChange={e=>setSkill(e.target.value)} placeholder="Filter by skill (e.g. React)" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          <button onClick={fetchJobs} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded">Search</button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map(j => (
            <div key={j._id} className={`rounded-xl border ${j.is_applied? 'border-green-500/40':'border-white/10'} bg-slate-800/60 p-5`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold">{j.title}</h3>
                  <p className="text-blue-200/80 text-sm">{j.company} — {j.location}</p>
                </div>
                {j.is_applied? <span className="text-green-300 bg-green-900/30 border border-green-500/30 text-xs px-2 py-1 rounded">Applied</span>
                  : <button onClick={()=>apply(j._id)} className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded">Apply</button>}
              </div>
              <p className="text-sm mt-3 line-clamp-3">{j.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {j.required_skills?.map(s => (
                  <span key={s} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
