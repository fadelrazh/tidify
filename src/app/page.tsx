"use client"

/**
 * Tidify - Homepage
 * Showcase of FDS (Fadel Design System) components
 */

import { Button, Card, Layout, Modal, useModal, Input, Badge, Navbar, Hero, TopBar } from '@/fds'
import { MapPin, Calendar, Users, Search, Star, Wifi, Car, UtensilsCrossed, Waves } from 'lucide-react'

export default function Home() {
  const bookingModal = useModal()
  
  const accommodations = [
    {
      id: 1,
      name: 'Villa Sunset Paradise',
      location: 'Bali, Indonesia',
      price: 'Rp 2,500,000',
      period: 'per night',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Pool', 'WiFi', 'Kitchen', 'AC'],
      guests: 8
    },
    {
      id: 2,
      name: 'Modern Apartment Downtown',
      location: 'Jakarta, Indonesia',
      price: 'Rp 850,000',
      period: 'per night',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['WiFi', 'Gym', 'Parking', 'AC'],
      guests: 4
    },
    {
      id: 3,
      name: 'Beachfront Cottage',
      location: 'Yogyakarta, Indonesia',
      price: 'Rp 1,200,000',
      period: 'per night',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Beach Access', 'WiFi', 'Kitchen', 'Garden'],
      guests: 6
    }
  ]

  const handleSearch = (searchData: any) => {
    console.log('Search data:', searchData)
    // Handle search logic here
  }

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
          onDeveloperClick={() => window.open('https://github.com/fadelrazsiah', '_blank')}
          onSourceCodeClick={() => window.open('https://github.com/fadelrazsiah/tidify', '_blank')}
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
        onSearch={handleSearch}
      />

      <main>
        <div style={{ paddingTop: 'var(--spacing-16)' }}>
        <Layout maxWidth="2xl">

        {/* Featured Accommodations */}
        <section>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--spacing-8)'
          }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-3xl)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-text-primary)'
            }}>
              Featured Accommodations
            </h2>
            
            <Button variant="ghost">
              View All
            </Button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 'var(--spacing-8)',
            marginBottom: 'var(--spacing-16)'
          }}>
            {accommodations.map((accommodation) => (
              <Card 
                key={accommodation.id} 
                padding="none" 
                interactive
                onClick={() => console.log(`Clicked accommodation: ${accommodation.name}`)}
              >
                <Card.Image 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  position="top" 
                />
                
                <Card.Body>
                  <div style={{ marginBottom: 'var(--spacing-4)' }}>
                    <h3 style={{ 
                      fontSize: 'var(--font-size-xl)', 
                      fontWeight: 'var(--font-weight-semibold)',
                      marginBottom: 'var(--spacing-2)',
                      color: 'var(--color-text-primary)'
                    }}>
                      {accommodation.name}
                    </h3>
                    
                                         <p style={{ 
                       color: 'var(--color-text-secondary)',
                       fontSize: 'var(--font-size-base)',
                       display: 'flex',
                       alignItems: 'center',
                       gap: 'var(--spacing-1)'
                     }}>
                       <MapPin size={16} />
                       {accommodation.location}
                     </p>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-4)'
                  }}>
                    <div>
                      <span style={{ 
                        fontSize: 'var(--font-size-lg)', 
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-primary-600)'
                      }}>
                        {accommodation.price}
                      </span>
                      <span style={{ 
                        fontSize: 'var(--font-size-sm)', 
                        color: 'var(--color-text-muted)',
                        marginLeft: 'var(--spacing-1)'
                      }}>
                        {accommodation.period}
                      </span>
                    </div>
                    
                                         <div style={{ 
                       display: 'flex', 
                       alignItems: 'center', 
                       gap: 'var(--spacing-1)'
                     }}>
                       <Star size={16} fill="currentColor" color="var(--color-warning)" />
                       <span style={{ 
                         fontSize: 'var(--font-size-sm)', 
                         fontWeight: 'var(--font-weight-medium)'
                       }}>
                         {accommodation.rating}
                       </span>
                     </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 'var(--spacing-2)',
                    marginBottom: 'var(--spacing-4)'
                  }}>
                    {accommodation.amenities.map((amenity) => (
                      <Badge 
                        key={amenity} 
                        variant="primary" 
                        size="sm"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                                     <p style={{ 
                     color: 'var(--color-text-secondary)',
                     fontSize: 'var(--font-size-sm)',
                     display: 'flex',
                     alignItems: 'center',
                     gap: 'var(--spacing-1)'
                   }}>
                     <Users size={16} />
                     Up to {accommodation.guests} guests
                   </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* FDS Showcase Section */}
        <section style={{ 
          textAlign: 'center',
          padding: 'var(--spacing-16) 0',
          borderTop: '1px solid var(--color-neutral-200)'
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
              </Layout>
        </div>
      </main>
    </>
  )
}
