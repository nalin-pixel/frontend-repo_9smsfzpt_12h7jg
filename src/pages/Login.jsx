import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Auth from '../components/Auth'

export default function Login(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <div className="pt-24">
        <Auth />
      </div>
      <Footer />
    </div>
  )
}
