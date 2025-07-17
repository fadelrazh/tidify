"use client"

/**
 * FDS Documentation Page
 * Comprehensive showcase of all FDS components and design tokens
 */

import { Button, Card, Layout, Input, Badge, Modal, useModal } from '@/fds'
import { Search, Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react'

export default function DocsPage() {
  const bookingModal = useModal()
  const confirmModal = useModal()

  return (
    <main style={{ minHeight: '100vh', paddingTop: 'var(--spacing-8)' }}>
      <Layout maxWidth="2xl">
        {/* Header */}
        <section style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
          <h1 style={{ 
            fontSize: 'var(--font-size-5xl)', 
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-text-primary)'
          }}>
            FDS Documentation
          </h1>
          <p style={{ 
            fontSize: 'var(--font-size-xl)', 
            color: 'var(--color-text-secondary)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Fadel Design System - A modern, accessible component library built with TypeScript and CSS Modules
          </p>
        </section>

        {/* Design Tokens Section */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            🎨 Design Tokens
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-8)'
          }}>
            {/* Colors */}
            <Card>
              <Card.Body>
                <h3 style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--color-text-primary)'
                }}>
                  Colors
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      backgroundColor: 'var(--color-primary-500)', 
                      borderRadius: 'var(--radius-md)' 
                    }}></div>
                    <div>
                      <div style={{ fontWeight: 'var(--font-weight-medium)' }}>Primary</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>#0ea5e9</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      backgroundColor: 'var(--color-success)', 
                      borderRadius: 'var(--radius-md)' 
                    }}></div>
                    <div>
                      <div style={{ fontWeight: 'var(--font-weight-medium)' }}>Success</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>#22c55e</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      backgroundColor: 'var(--color-error)', 
                      borderRadius: 'var(--radius-md)' 
                    }}></div>
                    <div>
                      <div style={{ fontWeight: 'var(--font-weight-medium)' }}>Error</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>#ef4444</div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Typography */}
            <Card>
              <Card.Body>
                <h3 style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--color-text-primary)'
                }}>
                  Typography
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <div style={{ fontSize: 'var(--font-size-5xl)', fontWeight: 'var(--font-weight-bold)' }}>5XL Bold</div>
                  <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)' }}>3XL Semibold</div>
                  <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-medium)' }}>XL Medium</div>
                  <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-normal)' }}>Base Normal</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Small Muted</div>
                </div>
              </Card.Body>
            </Card>

            {/* Spacing */}
            <Card>
              <Card.Body>
                <h3 style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--color-text-primary)'
                }}>
                  Spacing
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  {[1, 2, 4, 8, 16].map(space => (
                    <div key={space} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                      <div style={{ 
                        width: `var(--spacing-${space})`, 
                        height: 'var(--spacing-4)', 
                        backgroundColor: 'var(--color-primary-500)',
                        minWidth: 'var(--spacing-1)'
                      }}></div>
                      <span style={{ fontSize: 'var(--font-size-sm)' }}>--spacing-{space}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* Button Component */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            🔘 Button Component
          </h2>

          <Card>
            <Card.Body>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Variants
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-4)', 
                marginBottom: 'var(--spacing-6)' 
              }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>

              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Sizes
              </h3>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                flexWrap: 'wrap', 
                gap: 'var(--spacing-4)', 
                marginBottom: 'var(--spacing-6)' 
              }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>

              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Border Radius
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-4)',
                marginBottom: 'var(--spacing-6)' 
              }}>
                <Button rounded="none">None</Button>
                <Button rounded="sm">Small</Button>
                <Button rounded="md">Medium</Button>
                <Button rounded="lg">Large</Button>
                <Button rounded="xl">XL</Button>
                <Button rounded="full">Full</Button>
              </div>

              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                States
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-4)' 
              }}>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* Input Component */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            📝 Input Component
          </h2>

          <Card>
            <Card.Body>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: 'var(--spacing-6)' 
              }}>
                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Basic Input
                  </h3>
                  <Input 
                    label="Email Address" 
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--color-text-primary)'
                  }}>
                    With Icons
                  </h3>
                  <Input 
                    label="Search" 
                    placeholder="Search accommodations..."
                    startIcon={<Search size={16} />}
                  />
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Error State
                  </h3>
                  <Input 
                    label="Password" 
                    type="password"
                    error="Password must be at least 8 characters"
                    defaultValue="123"
                  />
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Success State
                  </h3>
                  <Input 
                    label="Username" 
                    state="success"
                    helperText="Username is available"
                    defaultValue="fadel_user"
                    endIcon={<CheckCircle size={16} />}
                  />
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Border Radius
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <Input 
                      label="None" 
                      placeholder="No border radius"
                      rounded="none"
                    />
                    <Input 
                      label="Small" 
                      placeholder="Small border radius"
                      rounded="sm"
                    />
                    <Input 
                      label="Large" 
                      placeholder="Large border radius"
                      rounded="lg"
                    />
                    <Input 
                      label="Full" 
                      placeholder="Full border radius"
                      rounded="full"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* Badge Component */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            🏷️ Badge Component
          </h2>

          <Card>
            <Card.Body>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Variants & Styles
              </h3>
              
              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <h4 style={{ 
                  fontSize: 'var(--font-size-lg)', 
                  marginBottom: 'var(--spacing-3)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Soft Style
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 'var(--spacing-3)' 
                }}>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <h4 style={{ 
                  fontSize: 'var(--font-size-lg)', 
                  marginBottom: 'var(--spacing-3)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Solid Style
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 'var(--spacing-3)' 
                }}>
                  <Badge variant="primary" style="solid">Primary</Badge>
                  <Badge variant="success" style="solid">Available</Badge>
                  <Badge variant="warning" style="solid">Pending</Badge>
                  <Badge variant="error" style="solid">Unavailable</Badge>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <h4 style={{ 
                  fontSize: 'var(--font-size-lg)', 
                  marginBottom: 'var(--spacing-3)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Outline Style
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 'var(--spacing-3)' 
                }}>
                  <Badge variant="primary" style="outline">Featured</Badge>
                  <Badge variant="success" style="outline">Verified</Badge>
                  <Badge variant="info" style="outline">New</Badge>
                </div>
              </div>

                            <h4 style={{ 
                fontSize: 'var(--font-size-lg)', 
                marginBottom: 'var(--spacing-3)',
                color: 'var(--color-text-secondary)'
              }}>
                Border Radius
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-3)',
                marginBottom: 'var(--spacing-6)' 
              }}>
                <Badge variant="primary" rounded="none">None</Badge>
                <Badge variant="primary" rounded="sm">Small</Badge>
                <Badge variant="primary" rounded="md">Medium</Badge>
                <Badge variant="primary" rounded="lg">Large</Badge>
                <Badge variant="primary" rounded="xl">XL</Badge>
                <Badge variant="primary" rounded="full">Full</Badge>
              </div>

              <h4 style={{ 
                fontSize: 'var(--font-size-lg)', 
                marginBottom: 'var(--spacing-3)',
                color: 'var(--color-text-secondary)'
              }}>
                With Icons & Dots
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-3)' 
              }}>
                <Badge variant="primary" icon={<Search size={12} />}>4.9 Rating</Badge>
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="info" icon={<Users size={12} />}>Villa</Badge>
                <Badge variant="warning" icon={<Calendar size={12} />}>Bali</Badge>
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* Modal Component */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            🪟 Modal Component
          </h2>

          <Card>
            <Card.Body>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Modal Examples
              </h3>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--spacing-4)', 
                marginBottom: 'var(--spacing-6)' 
              }}>
                <Button variant="primary" onClick={bookingModal.open}>
                  Open Booking Modal
                </Button>
                <Button variant="secondary" onClick={confirmModal.open}>
                  Open Confirm Modal
                </Button>
              </div>

              <p style={{ color: 'var(--color-text-secondary)' }}>
                Click the buttons above to see modals in action. Features include:
              </p>
              <ul style={{ 
                marginTop: 'var(--spacing-2)',
                paddingLeft: 'var(--spacing-4)',
                color: 'var(--color-text-secondary)'
              }}>
                <li>Portal rendering</li>
                <li>Smooth animations</li>
                <li>Escape key support</li>
                <li>Overlay click to close</li>
                <li>Body scroll lock</li>
                <li>Accessibility features</li>
              </ul>
            </Card.Body>
          </Card>
        </section>

        {/* Card Component */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            📄 Card Component
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-6)' 
          }}>
            <Card>
              <Card.Header>
                <h3 style={{ fontSize: 'var(--font-size-lg)', margin: 0 }}>Basic Card</h3>
              </Card.Header>
              <Card.Body>
                <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                  This is a simple card with header and body sections.
                </p>
              </Card.Body>
            </Card>

            <Card interactive onClick={() => alert('Card clicked!')}>
              <Card.Body>
                <h3 style={{ fontSize: 'var(--font-size-lg)', margin: '0 0 var(--spacing-2) 0' }}>Interactive Card</h3>
                <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                  This card has hover effects and is clickable.
                </p>
              </Card.Body>
            </Card>

            <Card padding="none">
              <Card.Image 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Sample accommodation"
              />
              <Card.Body>
                <h3 style={{ fontSize: 'var(--font-size-lg)', margin: '0 0 var(--spacing-2) 0' }}>Card with Image</h3>
                <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                  Perfect for accommodation listings.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="primary">Book Now</Button>
              </Card.Footer>
            </Card>
          </div>
        </section>

        {/* Usage Examples */}
        <section style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-primary)'
          }}>
            💡 Usage Examples
          </h2>

          <Card>
            <Card.Body>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)', 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-text-primary)'
              }}>
                Import Components
              </h3>
              <pre style={{ 
                backgroundColor: 'var(--color-neutral-100)', 
                padding: 'var(--spacing-4)', 
                borderRadius: 'var(--radius-md)',
                overflow: 'auto',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-primary)'
              }}>
{`import { Button, Card, Input, Badge, Layout } from '@/fds'

// Basic button usage
<Button variant="primary" size="lg">
  Get Started
</Button>

// Input with validation
<Input 
  label="Email"
  type="email"
  required
  error="Please enter a valid email"
/>

// Interactive card
<Card interactive onClick={handleClick}>
  <Card.Body>
    <h3>Card Title</h3>
    <p>Card content...</p>
  </Card.Body>
</Card>

// Status badge
<Badge variant="success" style="solid">
  Available
</Badge>`}
              </pre>
            </Card.Body>
          </Card>
        </section>

        {/* Footer */}
        <section style={{ 
          textAlign: 'center',
          padding: 'var(--spacing-8) 0',
          borderTop: '1px solid var(--color-neutral-200)'
        }}>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-4)'
          }}>
            FDS (Fadel Design System) - Built with ❤️ using TypeScript & CSS Modules
          </p>
          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-4)', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              ← Back to Tidify
            </Button>
            <Button variant="primary">
              View Source Code
            </Button>
          </div>
        </section>

        {/* Modal Instances */}
        <Modal
          isOpen={bookingModal.isOpen}
          onClose={bookingModal.close}
          title="Book Accommodation"
          size="md"
        >
          <Modal.Body>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
                             <Input 
                 label="Check-in Date"
                 type="text"
                 placeholder="Select date"
                 startIcon={<Calendar size={16} />}
               />
             </div>
             <div style={{ marginBottom: 'var(--spacing-4)' }}>
               <Input 
                 label="Check-out Date"
                 type="text"
                 placeholder="Select date"
                 startIcon={<Calendar size={16} />}
               />
             </div>
             <div style={{ marginBottom: 'var(--spacing-4)' }}>
               <Input 
                 label="Number of Guests"
                 type="number"
                 placeholder="2"
                 startIcon={<Users size={16} />}
               />
            </div>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <Input 
                label="Special Requests"
                placeholder="Any special requirements..."
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={bookingModal.close}>
              Cancel
            </Button>
            <Button variant="primary">
              Book Now - Rp 2,500,000
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          isOpen={confirmModal.isOpen}
          onClose={confirmModal.close}
          title="Confirm Action"
          size="sm"
        >
          <Modal.Body>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
              Are you sure you want to proceed? This action cannot be undone.
            </p>
          </Modal.Body>
          <Modal.Footer alignment="spaceBetween">
            <Button variant="secondary" onClick={confirmModal.close}>
              Cancel
            </Button>
            <Button variant="error" onClick={confirmModal.close}>
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    </main>
  )
} 