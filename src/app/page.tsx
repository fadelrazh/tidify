"use client"

/**
 * Tidify - Homepage
 * Showcase of FDS (Fadel Design System) components
 */

import { useEffect } from 'react'
import { Button, Card, Layout, Modal, useModal, Input, Badge, Navbar, Hero, TopBar } from '@/fds'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Star, 
  ChevronDown, 
  // Wifi, Car, UtensilsCrossed, Waves - removed unused imports
} from 'lucide-react';

export default function Home() {
  const bookingModal = useModal()

  // Helper function to update progress indicator
  const updateProgressIndicator = (currentIndex: number) => {
    const progressDots = document.querySelectorAll('.promo-progress-dot');
    const progressCounter = document.getElementById('promoProgressCounter');
    const totalCards = 5;
    
    progressDots.forEach((dot, index) => {
      if (index === currentIndex % totalCards) {
        (dot as HTMLElement).style.width = '24px';
        (dot as HTMLElement).style.backgroundColor = '#3b82f6';
      } else {
        (dot as HTMLElement).style.width = '6px';
        (dot as HTMLElement).style.backgroundColor = '#d1d5db';
      }
    });
    
    if (progressCounter) {
      progressCounter.textContent = `${(currentIndex % totalCards) + 1}/${totalCards}`;
    }
  };

  // Initialize progress indicator
  useEffect(() => {
    const initializeProgress = () => {
      updateProgressIndicator(0); // Start with first card
    };

    setTimeout(initializeProgress, 100);
  }, [])
 
  
  const accommodations = [
    {
      id: 1,
      name: 'Ravarine Suite Apartment',
      category: 'Apartemen',
      categoryStars: 3,
      location: 'Kelapa Gading, Jakarta Utara',
      originalPrice: 'IDR 888.428',
      discountedPrice: 'IDR 666.742',
      rating: 4.7,
      reviewCount: 106,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 25%',
      badgeColor: '#2563eb'
    },
    {
      id: 2,
      name: 'Cozy The Hive Tamansari Cawang by Bonzela',
      category: 'Apartemen',
      categoryStars: 3,
      location: 'Jatinegara, Jakarta Timur',
      originalPrice: 'IDR 447.350',
      discountedPrice: 'IDR 338.842',
      rating: 4.5,
      reviewCount: 231,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 24%',
      badgeColor: '#2563eb'
    },
    {
      id: 3,
      name: 'Taman Anggrek Residence By All Property',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Grogol Petamburan, Jakarta Barat',
      originalPrice: 'IDR 640.834',
      discountedPrice: 'IDR 557.850',
      rating: 4.6,
      reviewCount: 382,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Top Stay 8',
      badgeColor: '#059669'
    },
    {
      id: 4,
      name: 'Taman Anggrek Residences by Micky Studio',
      category: 'Apartemen',
      categoryStars: 3,
      location: 'Grogol Petamburan, Jakarta Barat',
      originalPrice: 'IDR 447.350',
      discountedPrice: 'IDR 338.842',
      rating: 4.3,
      reviewCount: null,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 24%',
      badgeColor: '#2563eb'
    },
    {
      id: 5,
      name: 'Magnolia ApartHotel by Kozystay',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Kemayoran, Jakarta Pusat',
      originalPrice: 'IDR 1.466.126',
      discountedPrice: 'IDR 971.009',
      rating: 4.5,
      reviewCount: null,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'GREAT OFFER',
      badgeColor: '#059669'
    },
    {
      id: 6,
      name: 'Citadines Rasuna Jakarta',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Setiabudi, Jakarta Selatan',
      originalPrice: 'IDR 890.000',
      discountedPrice: 'IDR 712.000',
      rating: 4.8,
      reviewCount: 453,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 20%',
      badgeColor: '#2563eb'
    },
    {
      id: 7,
      name: 'Somerset Grand Citra Jakarta',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Kuningan, Jakarta Selatan',
      originalPrice: 'IDR 1.200.000',
      discountedPrice: 'IDR 960.000',
      rating: 4.7,
      reviewCount: 289,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Top Stay 10',
      badgeColor: '#059669'
    },
    {
      id: 8,
      name: 'Oakwood Premier Cozmo Jakarta',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Kemang, Jakarta Selatan',
      originalPrice: 'IDR 1.500.000',
      discountedPrice: 'IDR 1.125.000',
      rating: 4.9,
      reviewCount: 578,
      image: 'https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 25%',
      badgeColor: '#2563eb'
    },
    {
      id: 9,
      name: 'Residence 8 Senopati Jakarta',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Senopati, Jakarta Selatan',
      originalPrice: 'IDR 750.000',
      discountedPrice: 'IDR 600.000',
      rating: 4.4,
      reviewCount: 167,
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 20%',
      badgeColor: '#2563eb'
    },
    {
      id: 10,
      name: 'The Kempinski Residences Jakarta',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Bundaran HI, Jakarta Pusat',
      originalPrice: 'IDR 2.000.000',
      discountedPrice: 'IDR 1.400.000',
      rating: 4.8,
      reviewCount: 312,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'LUXURY',
      badgeColor: '#7c3aed'
    },
    {
      id: 11,
      name: 'Verde Two Residence Kuningan',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Kuningan, Jakarta Selatan',
      originalPrice: 'IDR 680.000',
      discountedPrice: 'IDR 544.000',
      rating: 4.2,
      reviewCount: 91,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 20%',
      badgeColor: '#2563eb'
    },
    {
      id: 12,
      name: 'Pakubuwono Residence Jakarta',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Kebayoran Baru, Jakarta Selatan',
      originalPrice: 'IDR 1.800.000',
      discountedPrice: 'IDR 1.260.000',
      rating: 4.6,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 30%',
      badgeColor: '#2563eb'
    },
    {
      id: 13,
      name: 'Kemang Village Residence',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Kemang, Jakarta Selatan',
      originalPrice: 'IDR 920.000',
      discountedPrice: 'IDR 690.000',
      rating: 4.3,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 25%',
      badgeColor: '#2563eb'
    },
    {
      id: 14,
      name: 'Ascott Jakarta Premium Suites',
      category: 'Apartemen',
      categoryStars: 5,
      location: 'Sudirman, Jakarta Pusat',
      originalPrice: 'IDR 1.350.000',
      discountedPrice: 'IDR 1.080.000',
      rating: 4.7,
      reviewCount: 421,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Top Stay 9',
      badgeColor: '#059669'
    },
    {
      id: 15,
      name: 'Fraser Residence Menteng Jakarta',
      category: 'Apartemen',
      categoryStars: 4,
      location: 'Menteng, Jakarta Pusat',
      originalPrice: 'IDR 780.000',
      discountedPrice: 'IDR 624.000',
      rating: 4.5,
      reviewCount: 198,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'HEMAT 20%',
      badgeColor: '#2563eb'
    }
  ]

  const backgroundImages = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const handleSearch = (searchData: Record<string, unknown>) => {
    console.log('Search data:', searchData);
  };

  const handleNavigation = (action: string) => {
    console.log('Navigation action:', action)
    // Handle navigation logic here
  }

  const handleLanguageChange = (language: string) => {
    console.log('Language changed to:', language)
    // Handle language change logic here
  }

  return (
    <>
      {/* Top Bar & Navbar - Hidden on mobile */}
      <div className="desktop-only">
        <TopBar
          onDeveloperClick={() => window.open('https://github.com/fadelrazh', '_blank')}
          onSourceCodeClick={() => window.open('https://github.com/fadelrazh/tidify', '_blank')}
          onLanguageChange={handleLanguageChange}
          currentLanguage="IDN"
        />

        <Navbar
          onLogoClick={() => window.location.href = '/'}
          onLoginClick={() => console.log('Sign In clicked')}
          onRegisterClick={() => console.log('Sign Up clicked')}
          onUserMenuClick={handleNavigation}
          isLoggedIn={false}
        />
      </div>

      {/* Hero Section */}
      <Hero
        title="Sewa Villa & Apartemen, atau Cobain Nginep Seru di"
        backgroundImages={backgroundImages}
        onSearch={handleSearch}
      />

      {/* Search History Section */}
      <section style={{ 
        padding: 'var(--spacing-8) calc(var(--spacing-4) + var(--spacing-24))',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--spacing-6)'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              margin: 0 
            }}>
              Riwayat Pencarianmu
            </h2>
            <button style={{
              color: '#2563eb',
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Hapus semua
            </button>
          </div>

          <div 
            style={{ 
              position: 'relative',
              marginBottom: 'var(--spacing-8)'
            }}
            onMouseEnter={(e) => {
              const container = e.currentTarget.querySelector('#searchHistoryContainer') as HTMLElement;
              const leftBtn = e.currentTarget.querySelector('.nav-left') as HTMLElement;
              const rightBtn = e.currentTarget.querySelector('.nav-right') as HTMLElement;
              
              if (container) {
                const canScrollLeft = container.scrollLeft > 0;
                const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
                
                if (leftBtn && canScrollLeft) leftBtn.style.opacity = '1';
                if (rightBtn && canScrollRight) rightBtn.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              const leftBtn = e.currentTarget.querySelector('.nav-left') as HTMLElement;
              const rightBtn = e.currentTarget.querySelector('.nav-right') as HTMLElement;
              
              if (leftBtn) leftBtn.style.opacity = '0';
              if (rightBtn) rightBtn.style.opacity = '0';
            }}
          >
            <div 
              id="searchHistoryContainer"
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onScroll={(e) => {
                const container = e.currentTarget;
                const leftBtn = container.parentElement?.querySelector('.nav-left') as HTMLElement;
                const rightBtn = container.parentElement?.querySelector('.nav-right') as HTMLElement;
                
                const canScrollLeft = container.scrollLeft > 0;
                const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
                
                if (leftBtn) leftBtn.style.display = canScrollLeft ? 'flex' : 'none';
                if (rightBtn) rightBtn.style.display = canScrollRight ? 'flex' : 'none';
              }}
            >
            {/* Search History Cards */}
            {[
              {
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
                title: "The Awandari Villas Resort & Spa",
                location: "Seminyak, Badung"
              },
              {
                icon: <MapPin size={18} color="#2563eb" />,
                title: "Di dekat kamu",
                location: "24 Jul 25 - 25 Jul 25 • 1 Tamu"
              },
              {
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
                title: "Anari Villas Kuta",
                location: "🏨 Kuta, Badung"
              },
              {
                icon: <MapPin size={18} color="#2563eb" />,
                title: "Bali, Indonesia",
                location: "24 Jul 25 - 25 Jul 25 • 1 Tam"
              },
              {
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
                title: "Villa Kayu Raja Luxury Resort and Spa",
                location: "Ubud, Gianyar"
              },
              {
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
                title: "Four Seasons Resort Bali at Sayan",
                location: "Ubud, Bali"
              }
            ].map((item, index) => (
              <div key={index} style={{ 
                minWidth: '280px',
                width: '280px',
                minHeight: '90px',
                height: '90px',
                maxHeight: '90px',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                backgroundColor: 'white',
                padding: '16px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {item.image ? (
                    <img 
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ 
                      fontSize: '14px', 
                      fontWeight: '600',
                      margin: '0 0 2px 0',
                      color: '#111827',
                      lineHeight: '20px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: '16px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.location}
                    </p>
                  </div>
                  <button style={{
                    background: '#f9fafb',
                    border: 'none',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    ×
                  </button>
                </div>
              </div>
            ))}
            </div>
            
            {/* Left Navigation Button */}
            <button 
              className="nav-left"
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 0,
                transition: 'opacity 0.2s ease',
                fontSize: '16px',
                color: '#374151',
                fontWeight: 'bold'
              }}
              onClick={() => {
                const container = document.getElementById('searchHistoryContainer');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              ←
            </button>

            {/* Right Navigation Button */}
            <button 
              className="nav-right"
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 0,
                transition: 'opacity 0.2s ease',
                fontSize: '16px',
                color: '#374151',
                fontWeight: 'bold'
              }}
              onClick={() => {
                const container = document.getElementById('searchHistoryContainer');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              →
            </button>

            <style jsx>{`
              #searchHistoryContainer::-webkit-scrollbar {
                display: none;
              }
              
              .promo-cards-container::-webkit-scrollbar {
                display: none;
              }
              
              .accommodation-container::-webkit-scrollbar {
                display: none;
              }
              
              .city-tabs-container::-webkit-scrollbar {
                display: none;
              }
              
              .promo-container {
                display: flex;
                gap: 24px;
                align-items: flex-start;
                margin-bottom: 24px;
              }
              
              .promo-title-section {
                display: flex;
                align-items: center;
                gap: var(--spacing-3);
                min-width: 320px;
                flex-shrink: 0;
              }
              
              .promo-cards-container {
                display: flex;
                gap: 16px;
                flex: 1;
                min-width: 0;
              }
              
              .promo-card {
                flex: 1;
                border-radius: 24px;
                position: relative;
                min-height: 200px;
                max-height: 200px;
                height: 200px;
                cursor: pointer;
                transition: transform 0.2s ease;
              }
              
              .promo-card:hover {
                transform: translateY(-2px);
              }
              
              @media (max-width: 480px) {
                .promo-container {
                  flex-direction: column;
                  gap: 16px;
                  margin-bottom: 16px;
                }
                
                .promo-title-section {
                  min-width: auto;
                  margin-bottom: 0;
                }
                
                .promo-cards-container {
                  overflow-x: auto;
                  scrollbar-width: none;
                  -ms-overflow-style: none;
                }
                
                .promo-cards-container::-webkit-scrollbar {
                  display: none;
                }
                
                .promo-card {
                  flex: 0 0 280px;
                  min-width: 280px;
                  width: 280px;
                  max-width: 280px;
                  min-height: 200px;
                  max-height: 200px;
                  height: 200px;
                }
              }
            `}</style>
          </div>

          {/* Category Icons */}
          <div style={{ 
            display: 'flex',
            gap: 'var(--spacing-6)',
            justifyContent: 'space-between',
            marginTop: '6rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            {[
              { 
                icon: '🔥', 
                title: 'Top picks', 
                bgColor: '#fff7ed',
                shadowColor: '#fed7aa'
              },
              { 
                icon: '👥', 
                title: 'Nginep ramean', 
                bgColor: '#f0f9ff',
                shadowColor: '#bae6fd'
              },
              { 
                icon: '🏊‍♀️', 
                title: 'Kolamnya kece', 
                bgColor: '#ecfdf5',
                shadowColor: '#a7f3d0'
              },
              { 
                icon: '🏔️', 
                title: 'View menawan', 
                bgColor: '#fef3c7',
                shadowColor: '#fde68a'
              },
              { 
                icon: '🌲', 
                title: 'Dekat alam', 
                bgColor: '#f0fdf4',
                shadowColor: '#bbf7d0'
              },
              { 
                icon: '📸', 
                title: 'Tempat estetis', 
                bgColor: '#fdf4ff',
                shadowColor: '#e9d5ff'
              }
            ].map((category, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flex: '1',
                minWidth: '120px',
                width: '120px',
                minHeight: '140px',
                height: '140px',
                maxHeight: '140px'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: category.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  boxShadow: `0 4px 12px ${category.shadowColor}40`,
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    right: '8px',
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                    borderRadius: '50%',
                    opacity: 0.7
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '10px',
                    width: '6px',
                    height: '6px',
                    background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
                    borderRadius: '50%',
                    opacity: 0.5
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '12px',
                    width: '5px',
                    height: '5px',
                    background: 'linear-gradient(45deg, #fb7185, #f43f5e)',
                    borderRadius: '50%',
                    opacity: 0.6
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '8px',
                    width: '4px',
                    height: '4px',
                    background: 'linear-gradient(45deg, #34d399, #10b981)',
                    borderRadius: '50%',
                    opacity: 0.4
                  }} />
                  {category.icon}
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Offers Section */}
      <section style={{ 
        padding: 'var(--spacing-8) calc(var(--spacing-4) + var(--spacing-24))',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          {/* Title Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
            maxWidth: '340px',
            flexShrink: 0
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>%</span>
            </div>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              lineHeight: 1.2
            }}>
              Penawaran menarik buatmu
            </h2>
          </div>

          {/* Promo Cards Container - Horizontal */}
          <div 
            id="promoCardsContainer"
            className="promo-cards-container"
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              flex: 1
            }}
            onScroll={(e) => {
              const container = e.currentTarget;
              const cardWidth = 316; // 300px + 16px gap
              const currentIndex = Math.round(container.scrollLeft / cardWidth);
              
              // Update progress indicator using helper function
              updateProgressIndicator(currentIndex);
            }}>
            {/* Promo Card 1 */}
            <div style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              minHeight: '200px',
              maxHeight: '200px',
              borderRadius: '12px',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </div>

            {/* Promo Card 2 */}
            <div style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
              minHeight: '200px',
              maxHeight: '200px',
              borderRadius: '12px',
              minWidth: '300px',
              maxWidth: '300px',
              width: '300px',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </div>

            {/* Promo Card 3 */}
            <div style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
              minHeight: '200px',
              maxHeight: '200px',
              borderRadius: '12px',
              minWidth: '300px',
              maxWidth: '300px',
              width: '300px',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </div>

            {/* Promo Card 4 */}
            <div style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
              minHeight: '200px',
              maxHeight: '200px',
              borderRadius: '12px',
              minWidth: '300px',
              maxWidth: '300px',
              width: '300px',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </div>

            {/* Promo Card 5 */}
            <div style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
              minHeight: '200px',
              maxHeight: '200px',
              borderRadius: '12px',
              minWidth: '300px',
              maxWidth: '300px',
              width: '300px',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </div>
          </div>
        </div>



        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'center',
          gap: '16px',
          paddingLeft: '362px'
        }}>
          <button 
            style={{
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#6b7280'
            }}
            onClick={() => {
              const container = document.getElementById('promoCardsContainer');
              if (container) {
                const cardWidth = 316;
                let targetIndex: number;
                
                // Jika sudah di awal, pindah ke akhir
                if (container.scrollLeft <= 0) {
                  targetIndex = 4; // Last card (index 4)
                  container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'smooth' });
                } else {
                  const currentIndex = Math.round(container.scrollLeft / cardWidth);
                  targetIndex = currentIndex - 1;
                  container.scrollBy({ left: -316, behavior: 'smooth' });
                }
                
                // Update progress indicator after scroll
                setTimeout(() => updateProgressIndicator(targetIndex), 300);
              }
            }}
          >
            ←
          </button>
          <button 
            style={{
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#6b7280'
            }}
            onClick={() => {
              const container = document.getElementById('promoCardsContainer');
              if (container) {
                const cardWidth = 316;
                let targetIndex: number;
                
                // Jika sudah di akhir, pindah ke awal
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                  targetIndex = 0; // First card (index 0)
                  container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                  const currentIndex = Math.round(container.scrollLeft / cardWidth);
                  targetIndex = currentIndex + 1;
                  container.scrollBy({ left: 316, behavior: 'smooth' });
                }
                
                // Update progress indicator after scroll
                setTimeout(() => updateProgressIndicator(targetIndex), 300);
              }
            }}
          >
            →
          </button>
          <div style={{ 
            display: 'flex', 
            gap: '4px',
            alignItems: 'center',
            marginLeft: '8px'
          }}>
            <div 
              className="promo-progress-dot"
              style={{
                width: '24px',
                height: '3px',
                backgroundColor: '#3b82f6',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }} 
            />
            <div 
              className="promo-progress-dot"
              style={{
                width: '6px',
                height: '3px',
                backgroundColor: '#d1d5db',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }} 
            />
            <div 
              className="promo-progress-dot"
              style={{
                width: '6px',
                height: '3px',
                backgroundColor: '#d1d5db',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }} 
            />
            <div 
              className="promo-progress-dot"
              style={{
                width: '6px',
                height: '3px',
                backgroundColor: '#d1d5db',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }} 
            />
            <div 
              className="promo-progress-dot"
              style={{
                width: '6px',
                height: '3px',
                backgroundColor: '#d1d5db',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }} 
            />
          </div>
          <span 
            id="promoProgressCounter"
            style={{ 
              fontSize: '14px', 
              color: '#6b7280',
              marginLeft: '12px',
              fontWeight: '500'
            }}
          >
            1/5
          </span>
        </div>
      </section>

      <main>
        {/* Featured Accommodations */}
        <section style={{ 
          padding: 'var(--spacing-8) calc(var(--spacing-4) + var(--spacing-24))',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '12px',
            marginBottom: 'var(--spacing-6)'
          }}>
            <div style={{
              fontSize: '1.5rem'
            }}>
              📝
            </div>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              color: '#111827',
              margin: 0
            }}>
              Nginep nyaman di apartemen
            </h2>
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: 'var(--spacing-4)',
            margin: '0 0 var(--spacing-4) 0'
          }}>
            Pesannya pakai promo Jumbo Holideals, diskon hingga 40% + cashback 5%.
          </p>
          
          {/* City Tabs */}
          <div 
            className="city-tabs-container"
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: 'var(--spacing-6)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
            {['Jakarta', 'Bandung', 'Yogyakarta', 'Bekasi', 'Surabaya', 'Semarang', 'Tangerang Selatan', 'Bali', 'Batam', 'Canggu'].map((city, index) => (
              <button
                key={city}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: index === 0 ? '#dbeafe' : 'white',
                  color: index === 0 ? '#2563eb' : '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                {city}
              </button>
            ))}
          </div>

          <div 
            style={{ 
              position: 'relative',
              marginBottom: 'var(--spacing-16)'
            }}
            onMouseEnter={(e) => {
              const container = e.currentTarget.querySelector('#accommodationContainer') as HTMLElement;
              const leftBtn = e.currentTarget.querySelector('.nav-left-accommodation') as HTMLElement;
              const rightBtn = e.currentTarget.querySelector('.nav-right-accommodation') as HTMLElement;
              
              if (container) {
                const canScrollLeft = container.scrollLeft > 0;
                const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
                
                if (leftBtn && canScrollLeft) leftBtn.style.opacity = '1';
                if (rightBtn && canScrollRight) rightBtn.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              const leftBtn = e.currentTarget.querySelector('.nav-left-accommodation') as HTMLElement;
              const rightBtn = e.currentTarget.querySelector('.nav-right-accommodation') as HTMLElement;
              
              if (leftBtn) leftBtn.style.opacity = '0';
              if (rightBtn) rightBtn.style.opacity = '0';
            }}
          >
            <div 
              id="accommodationContainer"
              className="accommodation-container"
              style={{ 
                display: 'flex',
                gap: '14px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingBottom: '8px'
              }}
              onScroll={(e) => {
                const container = e.currentTarget;
                const leftBtn = container.parentElement?.querySelector('.nav-left-accommodation') as HTMLElement;
                const rightBtn = container.parentElement?.querySelector('.nav-right-accommodation') as HTMLElement;
                
                const canScrollLeft = container.scrollLeft > 0;
                const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
                
                if (leftBtn) leftBtn.style.display = canScrollLeft ? 'flex' : 'none';
                if (rightBtn) rightBtn.style.display = canScrollRight ? 'flex' : 'none';
              }}
            >
            {accommodations.map((accommodation) => (
              <Card 
                key={accommodation.id} 
                padding="none" 
                onClick={() => console.log(`Clicked accommodation: ${accommodation.name}`)}
                style={{
                  minWidth: '200px',
                  maxWidth: '200px',
                  width: '200px',
                  minHeight: '380px',
                  maxHeight: '380px',
                  height: '380px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ 
                  position: 'relative',
                  height: '150px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* JUMBO Badge - Top Left */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#FF6B35',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    JUMBO
                  </div>
                  
                  {/* Discount/Special Badge - Top Right */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: accommodation.badgeColor,
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {accommodation.badge}
                  </div>
                  
                  {/* Rating - Bottom Right of Image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="currentColor" color="#FFC107" />
                    <span>{accommodation.rating}/5</span>
                    {accommodation.reviewCount && (
                      <span style={{ opacity: 0.8 }}>({accommodation.reviewCount})</span>
                    )}
                  </div>
                </div>
                
                <Card.Body style={{ 
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  {/* Property Name */}
                  <h3 style={{ 
                    fontSize: '12px', 
                    fontWeight: '600',
                    marginBottom: '3px',
                    color: '#111827',
                    lineHeight: '1.3',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {accommodation.name}
                  </h3>
                  
                  {/* Category with Stars */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '3px',
                    marginBottom: '3px'
                  }}>
                    <span style={{ 
                      fontSize: '11px', 
                      color: '#6b7280',
                      fontWeight: '500'
                    }}>
                      {accommodation.category}
                    </span>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {Array.from({ length: accommodation.categoryStars }).map((_, i) => (
                        <Star key={i} size={9} fill="#FFC107" color="#FFC107" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Location */}
                  <p style={{ 
                    color: '#6b7280',
                    fontSize: '11px',
                    marginBottom: '6px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {accommodation.location}
                  </p>
                  
                  {/* Rating Score with Reviews */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '3px',
                    marginBottom: '6px'
                  }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#2563eb',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '9px',
                      fontWeight: 'bold'
                    }}>
                      {accommodation.rating}
                    </div>
                    <span style={{ fontSize: '11px', color: '#6b7280' }}>
                      /5 {accommodation.reviewCount ? `(${accommodation.reviewCount})` : ''}
                    </span>
                  </div>

                  {/* Spacer to push pricing to bottom */}
                  <div style={{ flex: 1 }} />
                  
                  {/* Pricing */}
                  <div style={{ marginBottom: '3px' }}>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      textDecoration: 'line-through',
                      marginBottom: '1px'
                    }}>
                      {accommodation.originalPrice}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#dc2626'
                    }}>
                      {accommodation.discountedPrice}
                    </div>
                  </div>
                  
                  {/* Tax Notice */}
                  <p style={{ 
                    fontSize: '10px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Belum termasuk pajak
                  </p>
                </Card.Body>
              </Card>
            ))}
            </div>
            
            {/* Left Navigation Button */}
            <button 
              className="nav-left-accommodation"
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 0,
                transition: 'opacity 0.2s ease',
                fontSize: '16px',
                color: '#374151',
                fontWeight: 'bold'
              }}
              onClick={() => {
                const container = document.getElementById('accommodationContainer');
                if (container) {
                  container.scrollBy({ left: -210, behavior: 'smooth' }); // 200px card + 10px gap
                }
              }}
            >
              ←
            </button>

            {/* Right Navigation Button */}
            <button 
              className="nav-right-accommodation"
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                opacity: 0,
                fontSize: '16px',
                color: '#374151',
                fontWeight: 'bold'
              }}
              onClick={() => {
                const container = document.getElementById('accommodationContainer');
                if (container) {
                  container.scrollBy({ left: 210, behavior: 'smooth' }); // 200px card + 10px gap
                }
              }}
            >
              →
            </button>
          </div>
          
          {/* Lihat Semua Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'var(--spacing-2)'
          }}>
            <button style={{
              background: '#dbeafe',
              color: '#2563eb',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minWidth: '200px',
              width: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#bfdbfe';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#dbeafe';
            }}
            >
              Lihat Semua
            </button>
          </div>
        </section>

        {/* FDS Showcase Section */}
        <section style={{ 
          textAlign: 'center',
          padding: 'var(--spacing-16) calc(var(--spacing-4) + var(--spacing-24))',
          borderTop: '1px solid var(--color-neutral-200)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-text-primary)'
          }}>
            Built with FDS (Fadel Design System)
          </h2>
          
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-8)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-8) auto'
          }}>
            This portfolio showcases a custom design system built from scratch using TypeScript, CSS Modules, and modern React patterns. No external CSS frameworks detected! 🚀
          </p>

          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-4)', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-8)'
          }}>
            <Button variant="primary">View Source Code</Button>
            <Button variant="secondary" onClick={() => window.location.href = '/docs'}>
              Design System Docs
            </Button>
            <Button variant="outline">Contact Developer</Button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'var(--spacing-6)',
            marginTop: 'var(--spacing-12)'
          }}>
            <div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--color-text-primary)'
              }}>
                🎨 Custom Design Tokens
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Scalable design tokens for consistent theming
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--color-text-primary)'
              }}>
                🧩 Modular Components
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Reusable components built with CSS Modules
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--color-text-primary)'
              }}>
                🌙 Dark Mode Ready
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Automatic dark mode with CSS custom properties
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--color-text-primary)'
              }}>
                📱 Fully Responsive
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Mobile-first responsive design principles
              </p>
            </div>
        </div>
        </section>

        {/* Booking Modal */}
        <Modal
          isOpen={bookingModal.isOpen}
          onClose={bookingModal.close}
          title="Find Your Perfect Stay"
          size="md"
        >
          <Modal.Body>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
                             <Input 
                 label="Destination"
                 placeholder="Where are you going?"
                 startIcon={<MapPin size={16} />}
               />
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-4)'
            }}>
                             <Input 
                 label="Check-in"
                 type="text"
                 placeholder="Select date"
                 startIcon={<Calendar size={16} />}
               />
               <Input 
                 label="Check-out"
                 type="text"
                 placeholder="Select date"
                 startIcon={<Calendar size={16} />}
               />
            </div>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
                             <Input 
                 label="Guests"
                 type="number"
                 placeholder="2 guests"
                 startIcon={<Users size={16} />}
               />
            </div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 'var(--spacing-2)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <p style={{ 
                width: '100%',
                margin: '0 0 var(--spacing-2) 0',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-primary)'
              }}>
                Property Type:
              </p>
              <Badge variant="primary" style="outline" interactive>Villa</Badge>
              <Badge variant="secondary" style="outline" interactive>Apartment</Badge>
              <Badge variant="secondary" style="outline" interactive>Hotel</Badge>
              <Badge variant="secondary" style="outline" interactive>Resort</Badge>
    </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={bookingModal.close}>
              Cancel
            </Button>
                         <Button variant="primary" startIcon={<Search size={16} />}>
               Search Accommodations
             </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  )
}
