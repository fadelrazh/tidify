"use client"

/**
 * FDS Button Component
 */

import React from 'react'
import { Loader2 } from 'lucide-react'
import { ComponentProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import styles from './Button.module.css'

const cx = createClassNameBuilder(styles)

export interface ButtonProps extends ComponentProps {
  /**
   * Button content
   */
  children: React.ReactNode
  
  /**
   * Button type for form submission
   */
  type?: 'button' | 'submit' | 'reset'
  
  /**
   * Loading state
   */
  loading?: boolean
  
  /**
   * Icon to display before text
   */
  startIcon?: React.ReactNode
  
  /**
   * Icon to display after text
   */
  endIcon?: React.ReactNode
  
  /**
   * Full width button
   */
  fullWidth?: boolean
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Inline styles
   */
  style?: React.CSSProperties
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'md', 
      variant = 'primary',
      rounded = 'md',
      type = 'button',
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      fullWidth = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return
      onClick?.(event)
    }

    const buttonClasses = cn(
      cx('button'),
      size === 'sm' ? cx('small') : null,
      size === 'md' ? cx('medium') : null,
      size === 'lg' ? cx('large') : null,
      variant === 'primary' ? cx('primary') : null,
      variant === 'secondary' ? cx('secondary') : null,
      variant === 'outline' ? cx('outline') : null,
      variant === 'ghost' ? cx('ghost') : null,
      variant === 'accent' ? cx('accent') : null,
      rounded ? cx(`rounded-${rounded}`) : null,
      fullWidth ? 'w-full' : null,
      className
    )

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={buttonClasses}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={16} />
            Loading...
          </>
        ) : (
          <>
            {startIcon && <span>{startIcon}</span>}
            {children}
            {endIcon && <span>{endIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button' 