"use client"

/**
 * FDS Navbar Component
 */

import React, { useState, useEffect } from 'react'
import { BaseProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import { Button } from '../Button'
import { Input } from '../Input'
import { Menu, X, Home, Search, Heart, User, Settings, LogOut, ChevronDown, MapPin } from 'lucide-react'
import styles from './Navbar.module.css'

const cx = createClassNameBuilder(styles)

export interface NavbarProps extends BaseProps {
  /**
   * Navigation links
   */
  links?: Array<{
    label: string
    href: string
    active?: boolean
  }>
  
  /**
   * Whether user is logged in
   */
  isLoggedIn?: boolean
  
  /**
   * User data if logged in
   */
  user?: {
    name: string
    email: string
    avatar?: string
  }
  
  /**
   * Logo click handler
   */
  onLogoClick?: () => void
  
  /**
   * Login button click handler
   */
  onLoginClick?: () => void
  
  /**
   * Register button click handler
   */
  onRegisterClick?: () => void
  
  /**
   * User menu item click handler
   */
  onUserMenuClick?: (action: string) => void
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      links = [
        { label: 'Hotel', href: '/', active: true },
        { label: 'Vila & Apt.', href: '/villas', active: false },
        { label: 'Docs', href: '/docs', active: false },
      ],
      isLoggedIn = false,
      user,
      onLogoClick,
      onLoginClick,
      onRegisterClick,
      onUserMenuClick,
      className,
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const placeholders = [
      "Hotel di Jakarta",
      "Villa di Bali",
      "Apartemen di Bandung", 
      "Resort di Lombok",
      "Penginapan di Yogyakarta",
      "Hotel di Surabaya"
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setIsTransitioning(true)
        
        setTimeout(() => {
          setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
          
          setTimeout(() => {
            setIsTransitioning(false)
          }, 50) // Small delay for smooth transition
        }, 400) // Wait for slide out animation
      }, 2500) // Change every 2.5 seconds

      return () => clearInterval(interval)
    }, [placeholders.length])

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleUserMenu = () => {
      setIsUserMenuOpen(!isUserMenuOpen)
    }

    const handleUserMenuClick = (action: string) => {
      setIsUserMenuOpen(false)
      onUserMenuClick?.(action)
    }

    const getUserInitials = (name: string) => {
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    return (
      <nav ref={ref} className={cn(cx('navbar'), className)} {...props}>
        <div className={cx('container')}>
          {/* Logo */}
          <div className={cx('logo')} onClick={onLogoClick}>
            <div style={{ 
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', 
              borderRadius: '0.75rem', 
              width: '2.25rem', 
              height: '2.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)'
            }}>
              <Home size={20} style={{ color: 'white' }} />
              <div style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '6px',
                height: '6px',
                backgroundColor: '#facc15',
                borderRadius: '50%'
              }} />
            </div>
            <span style={{ 
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: 'var(--font-size-2xl)'
            }}>
              Tidify
            </span>
          </div>

          {/* Search Bar */}
          <div className={cx('searchContainer')}>
            <Input
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              placeholder="" // Remove default placeholder
              startIcon={<Search size={16} />}
              rounded="full"
            />
            {/* Animated Placeholder Overlay */}
            {!inputValue && (
              <div className={cx('placeholderOverlay')}>
                <span 
                  key={currentPlaceholder}
                  className={cn(
                    cx('placeholderText'),
                    isTransitioning && cx('slideOut')
                  )}
                >
                  {placeholders[currentPlaceholder]}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className={cx('nav')}>
            <ul className={cx('navLinks')}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      cx('navLink'),
                      link.active && cx('active')
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className={cx('rightSection')}>
            {isLoggedIn && user ? (
              /* User Menu */
              <div className={cx('userMenu')}>
                <button
                  className={cx('userButton')}
                  onClick={toggleUserMenu}
                >
                  <div className={cx('avatar')}>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} />
                    ) : (
                      getUserInitials(user.name)
                    )}
                  </div>
                  <ChevronDown size={16} />
                </button>

                {isUserMenuOpen && (
                  <div className={cx('userDropdown')}>
                    <div className={cx('dropdownItem')}>
                      <User size={16} />
                      <div>
                        <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                          {user.name}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          {user.email}
                        </div>
                      </div>
                    </div>
                    
                    <div className={cx('dropdownDivider')} />
                    
                    <a
                      href="/profile"
                      className={cx('dropdownItem')}
                      onClick={() => handleUserMenuClick('profile')}
                    >
                      <User size={16} />
                      Profile
                    </a>
                    
                    <a
                      href="/bookings"
                      className={cx('dropdownItem')}
                      onClick={() => handleUserMenuClick('bookings')}
                    >
                      <Search size={16} />
                      My Bookings
                    </a>
                    
                    <a
                      href="/favorites"
                      className={cx('dropdownItem')}
                      onClick={() => handleUserMenuClick('favorites')}
                    >
                      <Heart size={16} />
                      Favorites
                    </a>
                    
                    <a
                      href="/settings"
                      className={cx('dropdownItem')}
                      onClick={() => handleUserMenuClick('settings')}
                    >
                      <Settings size={16} />
                      Settings
                    </a>
                    
                    <div className={cx('dropdownDivider')} />
                    
                    <button
                      className={cx('dropdownItem')}
                      onClick={() => handleUserMenuClick('logout')}
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Auth Buttons */
              <div className={cx('authButtons')}>
                <Button
                  variant="primary"
                  size="sm"
                  rounded="full"
                  onClick={onLoginClick}
                  style={{ color: 'var(--color-accent-500)' }}
                >
                  Sign In
                </Button>
                <Button
                  variant="accent"
                  size="sm"
                  rounded="full"
                  onClick={onRegisterClick}
                >
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className={cx('mobileMenuButton')}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(cx('mobileMenu'), cx('open'))}>
            <div className={cx('mobileNavLinks')}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    cx('mobileNavLink'),
                    link.active && cx('active')
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {!isLoggedIn && (
              <div className={cx('mobileAuthButtons')}>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onLoginClick?.()
                  }}
                  style={{ color: 'var(--color-accent-500)' }}
                >
                  Sign In
                </Button>
                <Button
                  variant="accent"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onRegisterClick?.()
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        )}
      </nav>
    )
  }
)

Navbar.displayName = 'Navbar' 