import { Link } from 'react-router-dom'
import { Search, Code, Megaphone, Palette, PenTool, Globe, Film, Award, TrendingDown, Lightbulb, CheckCircle, ArrowRight, UserPlus, Briefcase } from 'lucide-react'
import './Home.css'

export default function Home() {
  return (
    <div className="landing-page-wrapper">
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Libérez le potentiel du <span className="text-gradient">talent africain</span></h1>
            <p>La marketplace de freelances la plus diversifiée et qualifiée du continent. Trouvez des développeurs, designers et créateurs experts de Lagos à Nairobi.</p>
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="Quel service recherchez-vous aujourd'hui ?" />
              <button className="btn-primary">Rechercher</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Professionnels africains collaborant" />
          </div>
        </div>
      </header>

      <section id="services" className="categories">
        <div className="container">
          <h2 className="section-title">Catégories Populaires</h2>
          <div className="category-grid">
            {[
              { icon: <Code />, label: 'Développement Web' },
              { icon: <Megaphone />, label: 'Marketing Digital' },
              { icon: <Palette />, label: 'Design Graphique' },
              { icon: <PenTool />, label: 'Rédaction Web' },
              { icon: <Globe />, label: 'Traduction' },
              { icon: <Film />, label: 'Montage Vidéo' },
            ].map((cat, i) => (
              <div key={i} className="cat-card">
                <div className="cat-icon">{cat.icon}</div>
                <h3>{cat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container grid-3">
          {[
            { icon: <Award />, title: 'Expertise Diversifiée', desc: 'Accédez à des talents spécialisés dans les marchés émergents et les standards mondiaux.' },
            { icon: <TrendingDown />, title: 'Coûts Optimisés', desc: 'Une qualité premium à des tarifs compétitifs sur le marché global.' },
            { icon: <Lightbulb />, title: 'Insight Culturel', desc: 'Une expertise locale pour les entreprises souhaitant s\'étendre en Afrique.' },
          ].map((prop, i) => (
            <div key={i} className="prop-card">
              <div className="prop-icon">{prop.icon}</div>
              <h3>{prop.title}</h3>
              <p>{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="steps-flow">
            {[
              { step: '1', title: 'Postez un besoin', desc: 'Décrivez précisément vos attentes pour votre projet.' },
              { step: '2', title: 'Choisissez le talent', desc: 'Sélectionnez le meilleur freelance pour votre mission.' },
              { step: '3', title: 'Collaborez', desc: 'Travaillez ensemble via notre plateforme sécurisée.' },
              { step: '4', title: 'Recevez vos livrables', desc: 'Obtenez un résultat professionnel et de haute qualité.' },
            ].map((s, i) => (
              <div key={i} className="step">
                <span className="step-num">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <h2>Prêt à propulser votre business ou à lancer votre carrière ?</h2>
          <div className="cta-btns">
            <Link to="/projects" className="cta-btn cta-btn-primary">
              <Briefcase size={20} /> Je veux Recruter
            </Link>
            <Link to="/register" className="cta-btn cta-btn-secondary">
              <UserPlus size={20} /> Je veux Gagner
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Globe size={20} /> Africa Freelancer
            </a>
            <p>Le cœur battant du talent freelance africain.</p>
          </div>
          <div className="footer-col">
            <h4>Entreprise</h4>
            <a href="#">À propos</a>
            <a href="#">Carrières</a>
            <a href="#">Presse</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Centre d'aide</a>
            <a href="#">Confiance & Sécurité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
          <div className="footer-col">
            <h4>Communauté</h4>
            <a href="#">Blog</a>
            <a href="#">Forum</a>
            <a href="#">Événements</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Africa Freelancer Inc. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
