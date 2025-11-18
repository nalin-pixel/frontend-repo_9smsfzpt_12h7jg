import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink to={to} onClick={()=>setOpen(false)} className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive? 'text-white bg-blue-600':'text-blue-100 hover:text-white hover:bg-blue-600/40'}`}>
      {label}
    </NavLink>
  )
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/flame-icon.svg" className="w-8 h-8"/>
            <span className="text-white font-semibold">Campus Careers</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
            {navItem('/jobs', 'Jobs')}
            {navItem('/login', 'Login')}
          </nav>
          <button className="md:hidden text-blue-100" onClick={()=>setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col rounded-lg bg-slate-800/80 p-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
            {navItem('/jobs', 'Jobs')}
            {navItem('/login', 'Login')}
          </div>
        </div>
      )}
    </header>
  )
}
