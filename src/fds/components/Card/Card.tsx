"use client"

/**
 * FDS Card Component
 */

import React from 'react'
import { BaseProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import styles from './Card.module.css'

const cx = createClassNameBuilder(styles)

export interface CardProps extends BaseProps {
  /**
   * Padding size for the card
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  
  /**
   * Border radius for the card
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  
  /**
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean
  
  /**
   * Click handler for interactive cards
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export interface CardHeaderProps extends BaseProps {
  /**
   * Padding size for the header
   */
  padding?: 'sm' | 'md' | 'lg'
}

export interface CardBodyProps extends BaseProps {
  /**
   * Padding size for the body
   */
  padding?: 'sm' | 'md' | 'lg'
}

export interface CardFooterProps extends BaseProps {
  /**
   * Padding size for the footer
   */
  padding?: 'sm' | 'md' | 'lg'
}

export interface CardImageProps {
  /**
   * Image source
   */
  src: string
  
  /**
   * Image alt text
   */
  alt: string
  
  /**
   * Image position in card
   */
  position?: 'top' | 'bottom'
  
  /**
   * Additional CSS classes
   */
  className?: string
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      padding = 'md',
      rounded = 'lg',
      interactive = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      cx('card'),
      padding !== 'none' && cx(`padding-${padding}`),
      rounded && cx(`rounded-${rounded}`),
      interactive && cx('interactive'),
      className
    )

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={interactive ? onClick : undefined}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, padding = 'md', className, ...props }, ref) => {
    const headerClasses = cn(
      cx('header'),
      cx(`padding-${padding}`),
      className
    )

    return (
      <div ref={ref} className={headerClasses} {...props}>
        {children}
      </div>
    )
  }
)

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, padding = 'md', className, ...props }, ref) => {
    const bodyClasses = cn(
      cx('body'),
      cx(`padding-${padding}`),
      className
    )

    return (
      <div ref={ref} className={bodyClasses} {...props}>
        {children}
      </div>
    )
  }
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, padding = 'md', className, ...props }, ref) => {
    const footerClasses = cn(
      cx('footer'),
      cx(`padding-${padding}`),
      className
    )

    return (
      <div ref={ref} className={footerClasses} {...props}>
        {children}
      </div>
    )
  }
)

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ src, alt, position = 'top', className, ...props }, ref) => {
    const containerClasses = cn(
      cx('imageContainer'),
      position === 'bottom' && cx('imageBottom'),
      !position && cx('imageOnly')
    )

    const imageClasses = cn(cx('image'), className)

    return (
      <div className={containerClasses}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={imageClasses}
          {...props}
        />
      </div>
    )
  }
)

CardRoot.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardBody.displayName = 'CardBody'
CardFooter.displayName = 'CardFooter'
CardImage.displayName = 'CardImage'

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Image: CardImage,
}) 