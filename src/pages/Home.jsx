import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { projectsAPI, profileAPI } from '../api/client'
import { ArrowRight, Shield, Smartphone, Star, Layout, Code, Megaphone, PenTool } from 'lucide-react'

const CATEGORIES = [
  { id: 'DESIGN', label: 'Design Graphique', desc: 'Logos, Identité Visuelle, UI/UX Design.', icon: <Layout className="w-6 h-6" />, color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white' },
  { id: 'DEV_WEB', label: 'Développement Web', desc: 'React, Vue, Python, Shopify, WordPress.', icon: <Code className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white' },
  { id: 'MARKETING', label: 'Marketing Digital', desc: 'SEO, Ads, Gestion Social Media, Growth.', icon: <Megaphone className="w-6 h-6" />, color: 'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white' },
  { id: 'REDACTION', label: 'Rédaction & Traduction', desc: 'Copywriting, Anglais, Français, Swahili, Wolof.', icon: <PenTool className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white' },
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
    <div className="bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans']">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.1'%3E%3Cpath d='M92.5 40H75l-5 10V30h-10v10l-5-10H35v10l-5-10H12.5v10l-5-10H0v10l5 10H15l5-10h10l5 10H45l5-10h10l5 10H75l5-10V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 font-['Syne']">
              Libérez le <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">Potentiel Digital</span> de l'Afrique.
            </h1>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
              La première plateforme qui connecte les entreprises mondiales avec les meilleurs talents freelances à travers tout le continent africain. Qualité, passion et innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-lg flex items-center justify-center gap-2">
                Estimer mon projet <ArrowRight size={20} />
              </Link>
              <Link to="/register" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Devenir Freelance
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-orange-100 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="African Professionals" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-bold">{freelances?.length || '12,400'}+ Talents en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold mb-2">54+</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Pays Couverts</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2">{projects?.length || '1M'}+</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Projets Livrés</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2">4.9/5</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Note Moyenne</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-2">24/7</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Support Local</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">Des compétences pour <span className="text-orange-500">chaque besoin.</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Explorez les catégories de services proposées par nos experts certifiés.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/projects?category=${cat.id}`} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-300 hover:shadow-xl transition-all group cursor-pointer">
                <div className={`w-12 h-12 ${cat.color} rounded-2xl flex items-center justify-center mb-6 transition-all`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.label}</h3>
                <p className="text-slate-500 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      {projects?.length > 0 && (
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div className="text-left">
                <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">Projets Récents</h2>
                <p className="text-slate-500">Découvrez les dernières opportunités disponibles.</p>
              </div>
              <Link to="/projects" className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                Voir tout <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Africa Freelancer Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-['Syne']">Pourquoi Africa Freelancer ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Smartphone className="w-10 h-10 text-orange-500" />, title: 'Paiements Mobile Money', desc: 'Orange Money, M-Pesa, Airtel Money. Recevez votre argent où vous êtes.' },
              { icon: <Shield className="w-10 h-10 text-orange-500" />, title: 'Paiement sécurisé (Escrow)', desc: 'Les fonds sont bloqués et libérés seulement après validation de votre travail.' },
              { icon: <Star className="w-10 h-10 text-orange-500" />, title: 'Talents africains', desc: 'Des professionnels certifiés dans toute l\'Afrique, pour tous les budgets.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-orange-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-['Syne']">Prêt à propulser votre business ?</h2>
          <p className="text-orange-100 text-lg mb-10">Rejoignez des milliers d'entreprises qui font confiance au talent africain pour leur croissance numérique.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all">Je cherche un talent</Link>
            <Link to="/register" className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all">Je suis freelance</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-extrabold tracking-tighter font-['Syne']">
            AFRICA<span className="text-orange-500">FREELANCER</span>
          </div>
          <div className="text-slate-400 text-sm">© 2026 Africa Freelancer. Empowering the continent.</div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }) {
  const STATUS_LABELS = { OPEN: 'Ouvert', IN_PROGRESS: 'En cours', COMPLETED: 'Terminé' }
  return (
    <Link to={`/projects/${project.id}`} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all block">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
          {project.category}
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
          {STATUS_LABELS[project.status] || project.status}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-3">
        {project.description}
      </p>
      <div className="flex justify-between items-center pt-6 border-t border-slate-50">
        <span className="text-xl font-extrabold text-slate-900">
          {Number(project.budget).toLocaleString()} XOF
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {project.proposals_count} offre(s)
        </span>
      </div>
    </Link>
  )
}
