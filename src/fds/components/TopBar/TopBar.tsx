"use client"

/**
 * FDS TopBar Component - Small bar above main navbar
 */

import React, { useState } from 'react'
import { BaseProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import { ChevronDown, Globe } from 'lucide-react'
import styles from './TopBar.module.css'

const cx = createClassNameBuilder(styles)

// Indonesian Flag Icon Component
const IndonesianFlag = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 12 9" fill="none">
    <rect width="12" height="4.5" fill="#ff0000" />
    <rect y="4.5" width="12" height="4.5" fill="#ffffff" />
    <rect width="12" height="9" stroke="#e5e7eb" strokeWidth="0.5" fill="none" />
  </svg>
)

// US Flag Icon Component (simplified)
const USFlag = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 12 9" fill="none">
    <rect width="12" height="9" fill="#B22234" />
    <rect y="1" width="12" height="1" fill="#ffffff" />
    <rect y="3" width="12" height="1" fill="#ffffff" />
    <rect y="5" width="12" height="1" fill="#ffffff" />
    <rect y="7" width="12" height="1" fill="#ffffff" />
    <rect width="5" height="5" fill="#3C3B6E" />
    <rect width="12" height="9" stroke="#e5e7eb" strokeWidth="0.5" fill="none" />
  </svg>
)

export interface TopBarProps extends BaseProps {
  /**
   * Developer name click handler
   */
  onDeveloperClick?: () => void
  
  /**
   * Source code link click handler
   */
  onSourceCodeClick?: () => void
  
  /**
   * Language change handler
   */
  onLanguageChange?: (language: string) => void
  
  /**
   * Current language
   */
  currentLanguage?: string
  
  /**
   * Available languages
   */
  languages?: Array<{
    code: string
    label: string
    icon?: React.ReactNode
  }>
}

export const TopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  (
    {
      onDeveloperClick,
      onSourceCodeClick,
      onLanguageChange,
      currentLanguage = "IDN",
      languages = [
        { code: "IDN", label: "IDN", icon: <IndonesianFlag /> },
        { code: "ENG", label: "ENG", icon: <USFlag /> }
      ],
      className,
      ...props
    },
    ref
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleLanguageSelect = (langCode: string) => {
      onLanguageChange?.(langCode)
      setIsDropdownOpen(false)
    }

    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]
    return (
      <div ref={ref} className={cn(cx('topBar'), className)} {...props}>
        <div className={cx('container')}>
          <div className={cx('rightSection')}>
            <a 
              className={cx('link')} 
              onClick={onDeveloperClick}
            >
              Fadel Razsiah
            </a>
            
            <a 
              className={cx('link')} 
              onClick={onSourceCodeClick}
            >
              Source Code
            </a>
            
            <div className={cx('currencySelector')} style={{ position: 'relative' }}>
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)' }}
              >
                {currentLang.icon}
                <span>{currentLang.label}</span>
                <ChevronDown size={10} />
              </div>
              
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '4px',
                  backgroundColor: 'white',
                  border: '1px solid var(--color-neutral-300)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  zIndex: 100,
                  minWidth: '80px'
                }}>
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      style={{
                        padding: 'var(--spacing-2) var(--spacing-3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                        fontSize: 'var(--font-size-xs)',
                        color: currentLanguage === lang.code ? 'var(--color-primary-600)' : 'var(--color-text-primary)',
                        backgroundColor: currentLanguage === lang.code ? 'var(--color-primary-50)' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (currentLanguage !== lang.code) {
                          e.currentTarget.style.backgroundColor = 'var(--color-neutral-50)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentLanguage !== lang.code) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }
                                             }}
                     >
                       {lang.icon}
                       <span>{lang.label}</span>
                     </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

TopBar.displayName = 'TopBar' 