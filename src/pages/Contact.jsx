import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Contact</h1>
        <p className="text-blue-200/80 mt-2">Placement cells and institutes can reach out for pilots and deployments.</p>
        <form className="mt-6 grid gap-3">
          <input placeholder="Your name" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          <input placeholder="Email address" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          <textarea placeholder="Message" rows="5" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white"></textarea>
          <button className="justify-self-start bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
