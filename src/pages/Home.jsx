import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { projectsAPI, profileAPI } from '../api/client'
import { Search, Code, Megaphone, Palette, PenTool, Globe, Film, CheckCircle, ArrowRight, UserPlus, Briefcase } from 'lucide-react'

const CATEGORIES = [
  { id: 'DEV_WEB', label: 'Software Development', desc: 'Expert developers for web, mobile and software solutions.', icon: <Code className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white' },
  { id: 'MARKETING', label: 'Digital Marketing', desc: 'Growth hacking, SEO and social media strategies.', icon: <Megaphone className="w-6 h-6" />, color: 'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white' },
  { id: 'DESIGN', label: 'Graphic Design', desc: 'UI/UX design, branding and visual identity.', icon: <Palette className="w-6 h-6" />, color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white' },
  { id: 'REDACTION', label: 'Content Writing', desc: 'Copywriting, translation and storytelling.', icon: <PenTool className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white' },
  { id: 'TRANSLATION', label: 'Translation', desc: 'Connecting languages across the continent.', icon: <Globe className="w-6 h-6" />, color: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white' },
  { id: 'VIDEO', label: 'Video Editing', desc: 'High-impact video content for brands and creators.', icon: <Film className="w-6 h-6" />, color: 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white' },
]

export default function Home() {
  const { data: projects } = useQuery({
    queryKey: ['projects-home'],
    queryFn: () => projectsAPI.list({ status: 'OPEN' }).then(r => r.data.results || r.data),
  })

  const { data: freelances } = useQuery({
    queryKey: ['freelances-home'],
    queryFn: () => profileAPI.listFreelances({ available: true }).then(r => r.data),
  })

  return (
    <div className="bg-white text-slate-900 font-['Plus_Jakarta_Sans']">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-50 rounded-bl-full opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 font-['Syne']">
            Unlock the Power of <br />
            <span className="text-orange-600">African Talent</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            The most diverse and skilled freelance marketplace on the continent. <br className="hidden md:block" />
            Find expert developers, designers, and creators from Lagos to Nairobi.
          </p>
          
          {/* Search Component */}
          <div className="max-w-2xl mx-auto relative mb-16">
            <div className="flex items-center bg-white rounded-full shadow-2xl border border-slate-100 p-2 transition-all focus-within:ring-4 ring-orange-100">
              <div className="pl-4 text-slate-400">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                placeholder="What service are you looking for today?" 
                className="w-full px-4 py-3 outline-none text-lg font-medium"
              />
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-all shadow-md">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
            <span>Popular:</span>
            <span className="bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">React Developer</span>
            <span className="bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">UI/UX Design</span>
            <span className="bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">SEO Expert</span>
          </div>
        </div>
      </section>

      {/* Popular Categories Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">Top Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Access premium skills across various domains to scale your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/projects?category=${cat.id}`} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all group cursor-pointer flex items-start gap-6">
                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center shrink-0 transition-all`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{cat.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Africa Freelancer? (Value Props) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">Why Africa Freelancer?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A unique ecosystem designed for growth and excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Globe className="w-10 h-10" />, title: 'Diverse Expertise', desc: 'Access to talent specialized in emerging markets and diverse cultural contexts.' },
              { icon: <CheckCircle className="w-10 h-10" />, title: 'Cost Effective', desc: 'Get premium quality results at competitive global rates without compromising excellence.' },
              { icon: <Briefcase className="w-10 h-10" />, title: 'Cultural Insight', desc: 'Leverage local expertise for businesses expanding into the African market.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="flex justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works (Step-by-Step) */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">How it Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">A seamless process from the first post to the final delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>
            
            {[
              { step: '01', title: 'Post a Gig', desc: 'Define your project needs and budget.' },
              { step: '02', title: 'Review Talent', desc: 'Browse profiles and select the best match.' },
              { step: '03', title: 'Collaborate', desc: 'Work together through our secure platform.' },
              { step: '04', title: 'Deliver Results', desc: 'Receive high-quality work on time.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg ring-8 ring-slate-900">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-24 px-6 bg-orange-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 font-['Syne']">Ready to scale your business or start your freelance journey?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/projects" className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xl">
              <Briefcase size={20} /> I want to Hire
            </Link>
            <Link to="/register" className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl">
              <UserPlus size={20} /> I want to Earn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-extrabold tracking-tighter font-['Syne'] mb-6">
              AFRICA<span className="text-orange-600">FREELANCER</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the African continent by connecting global ambition with local excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-orange-600 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-orange-600 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/help" className="hover:text-orange-600 transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/forum" className="hover:text-orange-600 transition-colors">Forum</Link></li>
              <li><Link to="/events" className="hover:text-orange-600 transition-colors">Events</Link></li>
              <li><Link to="/newsletter" className="hover:text-orange-600 transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <p>© 2026 Africa Freelancer Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-orange-600 transition-colors">LinkedIn</Link>
            <Link to="#" className="hover:text-orange-600 transition-colors">Twitter</Link>
            <Link to="#" className="hover:text-orange-600 transition-colors">Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
