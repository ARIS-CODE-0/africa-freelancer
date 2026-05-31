import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { projectsAPI, profileAPI } from '../api/client'
import { Search, Code, Megaphone, Palette, PenTool, Globe, Film, Star, ArrowRight, UserPlus, Briefcase } from 'lucide-react'
import './Home.css'

const CATEGORIES = [
  { id: 'DEV_WEB', label: 'Développement Web', desc: 'Sites vitrines, E-commerce, Applications Web sur mesure.', icon: '💻', color: 'text-yellow-400' },
  { id: 'DESIGN', label: 'Design UI/UX', desc: 'Interfaces modernes, prototypage Figma, design centré utilisateur.', icon: '🎨', color: 'text-blue-400' },
  { id: 'MARKETING', label: 'Marketing Digital', desc: 'SEO, Growth Hacking, Gestion de campagnes publicitaires.', icon: '📢', color: 'text-green-400' },
  { id: 'CONSULTING', label: 'Consulting Business', desc: 'Stratégie de croissance, optimisation de processus, analyse de marché.', icon: '📈', color: 'text-purple-400' },
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
    <div className="landing-page-wrapper">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20" 
               style={{ background: 'radial-gradient(circle at top right, #2c3e50, #000)' }}>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
            La plateforme freelance<br />
            <span className="text-[#f5d76e]">made in Africa 🌍</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Connectez-vous avec les meilleurs talents africains. <br />
            Paiements sécurisés via Mobile Money, Orange Money, M-Pesa et plus.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/projects" className="bg-[#f5d76e] text-[#2d3436] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,215,110,0.4)] flex items-center gap-2">
              Trouver un talent <ArrowRight size={20} />
            </Link>
            <Link to="/register" className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Devenir freelance
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 animate-fade-up text-white">
            Explorer par expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.id} to={`/projects?category=${cat.id}`} className="glass-card p-10 text-center animate-fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <span className="text-6xl mb-6 block">{cat.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-white">{cat.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 animate-fade-up text-white">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Amadou Diallo', role: 'CEO de TechVision', text: '"L\'équipe d\'Africa Freelancer a transformé notre vision en un produit concret. Le design est époustouflant et la performance est au rendez-vous."', img: 'https://i.pravatar.cc/150?u=amadou' },
              { name: 'Fatou Traoré', role: 'Fondatrice de Sahel Art', text: '"Un professionnalisme rare. Ils ont compris exactement nos besoins et nous ont livrés un site qui attire réellement des clients."', img: 'https://i.pravatar.cc/150?u=fatou' },
              { name: 'Koffi Mensah', role: 'Directeur Marketing, Global Logistics', text: '"Très bonne réactivité et une qualité d\'exécution impeccable. Je recommande vivement pour tout projet sérieux de digitalisation."', img: 'https://i.pravatar.cc/150?u=koffi' },
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 animate-fade-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <div className="flex text-[#f5d76e] mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#f5d76e]" />
                  <div>
                    <span className="block font-bold text-white">{t.name}</span>
                    <span className="block text-sm text-white/50">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-white/40 text-sm border-t border-white/10">
        &copy; 2026 Africa Freelancer. Propulsé par l'excellence africaine.
      </footer>
    </div>
  )
}
