import { useState } from 'react'

export default function Auth(){
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('student')
  const [form, setForm] = useState({name:'', email:'', password:'', roll:'', department:'', company:''})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try{
      const url = mode==='login' ? `${baseUrl}/auth/login` : `${baseUrl}/auth/register`
      const payload = mode==='login' ? {email: form.email, password: form.password} : {
        name: form.name, email: form.email, password: form.password, role,
        roll: role==='student'? form.roll: undefined,
        department: role==='student'? form.department: undefined,
        company: role==='recruiter'? form.company: undefined,
      }
      const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Request failed')
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      // redirect by role
      const r = data.user.role
      window.location.href = r==='student'? '/student' : r==='recruiter'? '/recruiter' : '/admin'
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <div className="flex justify-center gap-2 mb-4">
          <button onClick={()=>setMode('login')} className={`px-3 py-1 rounded ${mode==='login'?'bg-blue-600 text-white':'bg-white/10 text-blue-100'}`}>Login</button>
          <button onClick={()=>setMode('register')} className={`px-3 py-1 rounded ${mode==='register'?'bg-blue-600 text-white':'bg-white/10 text-blue-100'}`}>Register</button>
        </div>
        {mode==='register' && (
          <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
            {['student','recruiter','admin'].map(r=> (
              <button key={r} onClick={()=>setRole(r)} className={`py-1 rounded ${role===r? 'bg-blue-600 text-white':'bg-white/10 text-blue-100'}`}>{r}</button>
            ))}
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-3">
          {mode==='register' && (
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full Name" className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          )}
          <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          <input required type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          {mode==='register' && role==='student' && (
            <div className="grid grid-cols-2 gap-2">
              <input value={form.roll} onChange={e=>setForm({...form, roll:e.target.value})} placeholder="Roll No" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
              <input value={form.department} onChange={e=>setForm({...form, department:e.target.value})} placeholder="Department" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
            </div>
          )}
          {mode==='register' && role==='recruiter' && (
            <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Company" className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold py-2 rounded">{loading? 'Please wait...': (mode==='login'? 'Login':'Create account')}</button>
        </form>
      </div>
    </div>
  )
}
