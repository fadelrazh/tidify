"use client"

/**
 * FDS Hero Component
 */

import React, { useState, useEffect } from 'react'
import { BaseProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import { Button } from '../Button'

import { Search, MapPin, Calendar, Users, Star, ChevronLeft } from 'lucide-react'
import styles from './Hero.module.css'

const cx = createClassNameBuilder(styles)

export interface HeroProps extends BaseProps {
  /**
   * Hero title
   */
  title?: string
  
  /**
   * Hero subtitle
   */
  subtitle?: string
  
  /**
   * Background images for carousel
   */
  backgroundImages?: string[]
  
  /**
   * Whether to show search form
   */
  showSearch?: boolean
  
  /**
   * Whether to show promotional banner
   */
  showPromoBanner?: boolean
  
  /**
   * Promotional banner content
   */
  promoBanner?: {
    icon?: React.ReactNode
    title: string
    subtitle: string
  }
  
  /**
   * Search form submit handler
   */
  onSearch?: (data: {
    destination: string
    checkin: string
    checkout: string
    guests: string
  }) => void
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      title = "Sewa Villa & Apartemen, atau Cobain Nginep Seru di",

      backgroundImages = [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      ],
      showSearch = true,
      showPromoBanner = true,
      promoBanner = {
        icon: <Star size={20} />,
        title: "Jaminan Harga Termurah! Nemu yang lebih murah?",
        subtitle: "Klaim 2x selisihnya*"
      },
      onSearch,
      className,
      ...props
    },
    ref
  ) => {
    // Typing animation states
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isTyping] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)

    // Background carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Typing animation effect
    useEffect(() => {
      const typingWords = [
        'Cottage',
        'Villa',
        'Hotel',
        'Resort',
        'Apartemen'
      ]
      
      const currentWord = typingWords[currentWordIndex]
      
      const typingSpeed = isDeleting ? 100 : 150
      const pauseTime = isDeleting ? 500 : 2000

      const timer = setTimeout(() => {
        if (!isDeleting && displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && displayedText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length)
        } else if (isDeleting) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1))
        } else {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1))
        }
      }, typingSpeed)

      return () => clearTimeout(timer)
    }, [currentWordIndex, displayedText, isDeleting])

    // Background carousel effect
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
      }, 5000) // Change image every 5 seconds

      return () => clearInterval(interval)
    }, [backgroundImages.length])

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const searchData = {
        destination: formData.get('destination') as string,
        checkin: formData.get('checkin') as string,
        checkout: formData.get('checkout') as string,
        guests: formData.get('guests') as string,
      }
      onSearch?.(searchData)
    }

    const heroClasses = cn(
      cx('hero'),
      className
    )

    return (
      <section ref={ref} className={heroClasses} {...props}>
        {/* Mobile Back Button */}
        <button className={cx('mobileBackButton')} onClick={() => window.history.back()}>
          <ChevronLeft size={24} color="#374151" strokeWidth={2} />
        </button>

        {/* Background Image Carousel */}
        <div className={cx('backgroundCarousel')}>
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                cx('backgroundImage'),
                index === currentImageIndex && cx('active')
              )}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className={cx('overlay')} />
        
        <div className={cx('container')}>
          <div className={cx('content')}>
            {/* Left side - Title */}
            <div className={cx('titleSection')}>
              <h1 className={cx('title')}>
                {title}
                <br />
                <span className={cx('typingText')}>
                  {displayedText}
                  <span className={cx('cursor')}>|</span>
                </span>
              </h1>
            </div>

            {/* Right side - Search Form */}
            {showSearch && (
              <div className={cx('searchSection')}>
                <div className={cx('searchCard')}>
                  {/* Promotional Banner */}
                  {showPromoBanner && promoBanner && (
                    <div className={cx('promoBanner')}>
                      <div className={cx('promoIcon')}>
                        {promoBanner.icon}
                      </div>
                      <div className={cx('promoContent')}>
                        <div className={cx('promoTitle')}>
                          <span className={cx('promoBold')}>Jaminan Harga Termurah!</span>{' '}
                          <span className={cx('promoNormal')}>Nemu yang lebih murah?</span>
                        </div>
                        <div className={cx('promoSubtitle')}>{promoBanner.subtitle}</div>
                      </div>
                    </div>
                  )}

                  {/* Search Form */}
                  <form className={cx('searchForm')} onSubmit={handleSearchSubmit}>
                      {/* Location Field */}
                      <div className={cx('searchField')} onClick={() => console.log('Open location modal')}>
                        <div className={cx('inputField')}>
                          <Search size={18} className={cx('inputIcon')} />
                          <span className={cx('inputText')}>Di dekat kamu</span>
                          <div className={cx('locationIcon')}>
                            <MapPin size={18} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Date and Guest Fields Row */}
                      <div className={cx('searchField')} onClick={() => console.log('Open date and guest modal')}>
                        <div className={cx('inputField')}>
                          <Calendar size={18} className={cx('inputIcon')} />
                          <span className={cx('inputText')}>24 Jul - 25 Jul</span>
                          <div className={cx('divider')}></div>
                          <div className={cx('guestSection')}>
                            <Users size={18} className={cx('guestIcon')} />
                            <span className={cx('guestText')}>1</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Search Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        rounded="xl"
                        className={cx('searchButton')}
                      >
                                              Ayo Cari
                    </Button>
                  </form>
                </div>
                
                {/* Mobile Search History */}
                <div className={cx('mobileSearchHistory')}>
                  <div className={cx('searchHistory')}>
                    <div className={cx('historyHeader')}>
                      <h3 className={cx('historyTitle')}>Riwayat Pencarianmu</h3>
                      <button className={cx('clearHistory')}>Hapus semua</button>
                    </div>
                    <div className={cx('historyItem')}>
                      <div className={cx('historyContent')}>
                        <span className={cx('historyText')}>Di dekat kamu</span>
                        <span className={cx('historyDate')}>24 Jul 25 - 25 Jul 25 • 1 Tamu</span>
                      </div>
                      <button className={cx('removeHistory')}>×</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
)

Hero.displayName = 'Hero' 