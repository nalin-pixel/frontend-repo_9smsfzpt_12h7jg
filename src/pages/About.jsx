import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Section, Card } from '../components/Sections'

export default function About(){
  const values = [
    {title: 'Campus‑first', text: 'Designed with placement cells and faculty mentors to fit real approval workflows.'},
    {title: 'Privacy by design', text: 'Role‑based access. Employers only see what they must. Students control their profile.'},
    {title: 'Open & affordable', text: 'Runs on common infrastructure to keep recurring costs low for public institutes.'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <div className="pt-24">
        <Section title="About the Platform">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Card title="The Problem">
              Colleges juggle scattered notices, manual approvals and spreadsheets. Students miss deadlines; staff lose hours on status bookkeeping.
            </Card>
            <Card title="Our Solution">
              A single portal where profiles, applications, approvals, interviews and certificates live in one place — with analytics to guide action.
            </Card>
          </div>
        </Section>
        <Section title="Principles">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => (
              <Card key={v.title} title={v.title}>{v.text}</Card>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  )
}
