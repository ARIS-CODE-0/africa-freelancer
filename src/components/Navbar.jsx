// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useQuery } from '@tanstack/react-query'
import { notificationsAPI } from '../api/client'
import { Bell, MessageSquare, LogOut, PlusCircle, LayoutDashboard, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const { data: unreadNotifs } = useQuery({
    queryKey: ['notif-unread'],
    queryFn: () => notificationsAPI.unread().then(r => r.data.count),
    enabled: !!user,
    refetchInterval: 30000,  // Rafraîchir toutes les 30 secondes
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  const handleLogout = () => {
    closeMenu()
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname.startsWith(path) ? 'nav-link active' : 'nav-link'
  const isActiveMobile = (path) => location.pathname.startsWith(path) ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-dot" />
          Africa Freelancer
        </Link>

        {/* Navigation */}
        <div className="navbar-links">
          <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>
            <span>Projets</span>
          </Link>
          <Link to="/freelances" className={isActive('/freelances')} onClick={closeMenu}>
            <span>Freelances</span>
          </Link>

          {user ? (
            <>
              {user.role === 'CLIENT' && (
                <Link to="/create-project" className="btn btn-orange btn-sm" onClick={closeMenu}>
                  <PlusCircle size={16} /> Publier un projet
                </Link>
              )}
              <Link to="/messages" className={isActive('/messages')} style={{ position: 'relative' }} onClick={closeMenu}>
                <MessageSquare size={18} />
              </Link>
              <Link to="/dashboard" className={isActive('/dashboard')} style={{ position: 'relative' }} onClick={closeMenu}>
                <Bell size={18} />
                {unreadNotifs > 0 && <span className="notif-badge">{unreadNotifs}</span>}
              </Link>
              <Link to="/dashboard" className={isActive('/dashboard')} onClick={closeMenu}>
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
              <button onClick={handleLogout} className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link" onClick={closeMenu}>Connexion</Link>
              <Link to="/register" className="btn btn-orange btn-sm" onClick={closeMenu}>S'inscrire</Link>
            </>
          )}
        </div>

        {/* Hamburger toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className="mobile-nav-overlay open" onClick={closeMenu} />}

      {/* Mobile panel */}
      <div className={`mobile-nav-panel ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-close">
          <button onClick={closeMenu} aria-label="Fermer"><X size={24} /></button>
        </div>

        <Link to="/projects" className={`mobile-nav-link ${isActiveMobile('/projects')}`} onClick={closeMenu}>
          Projets
        </Link>
        <Link to="/freelances" className={`mobile-nav-link ${isActiveMobile('/freelances')}`} onClick={closeMenu}>
          Freelances
        </Link>

        {user ? (
          <>
            {user.role === 'CLIENT' && (
              <Link to="/create-project" className="btn btn-orange btn-sm" onClick={closeMenu} style={{ marginTop: 8 }}>
                <PlusCircle size={16} /> Publier un projet
              </Link>
            )}
            <Link to="/messages" className={`mobile-nav-link ${isActiveMobile('/messages')}`} onClick={closeMenu}>
              <MessageSquare size={18} /> Messages
            </Link>
            <Link to="/dashboard" className={`mobile-nav-link ${isActiveMobile('/dashboard')}`} onClick={closeMenu}>
              <Bell size={18} /> Dashboard
              {unreadNotifs > 0 && <span className="notif-badge">{unreadNotifs}</span>}
            </Link>
            <div style={{ flex: 1 }} />
            <button onClick={handleLogout} className="mobile-nav-link" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <LogOut size={18} /> Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mobile-nav-link" onClick={closeMenu}>Connexion</Link>
            <Link to="/register" className="btn btn-orange btn-sm" onClick={closeMenu} style={{ marginTop: 8, justifyContent: 'center' }}>S'inscrire</Link>
          </>
        )}
      </div>
    </nav>
  )
}
