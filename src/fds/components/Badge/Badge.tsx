"use client"

/**
 * FDS Badge Component
 */

import React from 'react'
import { ComponentProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import styles from './Badge.module.css'

const cx = createClassNameBuilder(styles)

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'accent'
export type BadgeStyle = 'soft' | 'solid' | 'outline'

export interface BadgeProps extends Omit<ComponentProps, 'variant'> {
  /**
   * Badge content
   */
  children: React.ReactNode
  
  /**
   * Badge color variant
   */
  variant?: BadgeVariant
  
  /**
   * Badge style
   */
  style?: BadgeStyle
  
  /**
   * Whether to show a dot indicator
   */
  dot?: boolean
  
  /**
   * Icon to display
   */
  icon?: React.ReactNode
  
  /**
   * Whether the badge is interactive (clickable)
   */
  interactive?: boolean
  
  /**
   * Click handler for interactive badges
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      size = 'md',
      variant = 'primary',
      rounded = 'full',
      style = 'soft',
      dot = false,
      icon,
      interactive = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const getVariantClass = () => {
      if (style === 'solid') {
        return cx(`${variant}Solid`)
      } else if (style === 'outline') {
        return cx(`${variant}Outline`)
      }
      return cx(variant)
    }

    const badgeClasses = cn(
      cx('badge'),
      size === 'sm' ? cx('small') : null,
      size === 'md' ? cx('medium') : null,
      size === 'lg' ? cx('large') : null,
      rounded ? cx(`rounded-${rounded}`) : null,
      getVariantClass(),
      dot ? cx('dot') : null,
      dot ? cx('dotPadding') : null,
      icon ? cx('hasIcon') : null,
      interactive ? cx('interactive') : null,
      className
    )

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (interactive && onClick) {
        onClick(event)
      }
    }

    return (
      <span
        ref={ref}
        className={badgeClasses}
        onClick={handleClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge' 