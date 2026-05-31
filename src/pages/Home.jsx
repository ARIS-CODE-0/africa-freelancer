import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="landing-page-wrapper">
      {/* ── HERO ────────────────────────────── */}
      <section className="hero">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="hero-title">La plateforme freelance<br /><span>made in Africa 🌍</span></h1>
          <p className="hero-sub">
            Connectez-vous avec les meilleurs talents africains. <br />
            Paiements sécurisés via Mobile Money, Orange Money, M-Pesa et plus.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">Trouver un talent <span style={{ marginLeft: '8px' }}>→</span></Link>
            <Link to="/register" className="btn btn-outline">Devenir freelance</Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────── */}
      <section className="section container">
        <h2 className="section-title animate-fade-up">Explorer par expertise</h2>
        <div className="categories-grid">
          <div className="cat-card glass animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="cat-icon">💻</span>
            <h3>Développement Web</h3>
            <p style={{ color: 'var(--text-muted)' }}>Sites vitrines, E-commerce, Applications Web sur mesure.</p>
          </div>
          <div className="cat-card glass animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="cat-icon">🎨</span>
            <h3>Design UI/UX</h3>
            <p style={{ color: 'var(--text-muted)' }}>Interfaces modernes, prototypage Figma, design centré utilisateur.</p>
          </div>
          <div className="cat-card glass animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <span className="cat-icon">📢</span>
            <h3>Marketing Digital</h3>
            <p style={{ color: 'var(--text-muted)' }}>SEO, Growth Hacking, Gestion de campagnes publicitaires.</p>
          </div>
          <div className="cat-card glass animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className="cat-icon">📈</span>
            <h3>Consulting Business</h3>
            <p style={{ color: 'var(--text-muted)' }}>Stratégie de croissance, optimisation de processus, analyse de marché.</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">
          <h2 className="section-title animate-fade-up">Ils nous font confiance</h2>
          <div className="testimonials-grid">
            <div className="testi-card glass animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="stars">★★★★★</div>
              <p className="testi-comment">"L'équipe d'Africa Freelancer a transformé notre vision en un produit concret. Le design est époustouflant et la performance est au rendez-vous."</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '15px' }}>
                <img src="https://i.pravatar.cc/150?u=amadou" className="testi-avatar" alt="Amadou Diallo" />
                <div>
                  <span className="testi-name">Amadou Diallo</span>
                  <span className="testi-role">CEO de TechVision</span>
                </div>
              </div>
            </div>
            <div className="testi-card glass animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="stars">★★★★★</div>
              <p className="testi-comment">"Un professionnalisme rare. Ils ont compris exactement nos besoins et nous ont livrés un site qui attire réellement des clients."</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '15px' }}>
                <img src="https://i.pravatar.cc/150?u=fatou" className="testi-avatar" alt="Fatou Traoré" />
                <div>
                  <span className="testi-name">Fatou Traoré</span>
                  <span className="testi-role">Fondatrice de Sahel Art</span>
                </div>
              </div>
            </div>
            <div className="testi-card glass animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="stars">★★★★☆</div>
              <p className="testi-comment">"Très bonne réactivité et une qualité d'exécution impeccable. Je recommande vivement pour tout projet sérieux de digitalisation."</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '15px' }}>
                <img src="https://i.pravatar.cc/150?u=koffi" className="testi-avatar" alt="Koffi Mensah" />
                <div>
                  <span className="testi-name">Koffi Mensah</span>
                  <span className="testi-role">Directeur Marketing, Global Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; 2026 Africa Freelancer. Propulsé par l'excellence africaine.
      </footer>
    </div>
  )
}
