"use client"

/**
 * FDS Modal Component
 */

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { BaseProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import { useModal } from '../../hooks'
import styles from './Modal.module.css'

const cx = createClassNameBuilder(styles)

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type FooterAlignment = 'start' | 'center' | 'end' | 'spaceBetween'

export interface ModalProps extends BaseProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean
  
  /**
   * Function to call when modal should close
   */
  onClose: () => void
  
  /**
   * Modal title
   */
  title?: string
  
  /**
   * Modal size
   */
  size?: ModalSize
  
  /**
   * Whether to show close button
   */
  showCloseButton?: boolean
  
  /**
   * Whether clicking overlay closes modal
   */
  closeOnOverlayClick?: boolean
  
  /**
   * Whether pressing escape closes modal
   */
  closeOnEscape?: boolean
  
  /**
   * Footer alignment
   */
  footerAlignment?: FooterAlignment
}

export interface ModalHeaderProps extends BaseProps {
  /**
   * Whether to show close button
   */
  showCloseButton?: boolean
  
  /**
   * Function to call when close button is clicked
   */
  onClose?: () => void
}

export interface ModalBodyProps extends BaseProps {}

export interface ModalFooterProps extends BaseProps {
  /**
   * Footer alignment
   */
  alignment?: FooterAlignment
}

const ModalRoot = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      isOpen,
      onClose,
      title,
      size = 'md',
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      footerAlignment = 'end',
      className,
      ...props
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
    }, [])

    useEffect(() => {
      if (isOpen) {
        setIsAnimating(true)
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
        const timer = setTimeout(() => setIsAnimating(false), 200)
        return () => clearTimeout(timer)
      }

      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (closeOnEscape && event.key === 'Escape' && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
      }
    }, [isOpen, onClose, closeOnEscape])

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && event.target === event.currentTarget) {
        onClose()
      }
    }

    const overlayClasses = cn(
      cx('overlay'),
      isOpen && cx('open'),
      isAnimating && cx('entering')
    )

    const modalClasses = cn(
      cx('modal'),
      size === 'sm' && cx('small'),
      size === 'md' && cx('medium'),
      size === 'lg' && cx('large'),
      size === 'xl' && cx('extraLarge'),
      size === 'full' && cx('fullWidth'),
      isOpen && cx('open'),
      isAnimating && cx('entering'),
      className
    )

    if (!mounted || (!isOpen && !isAnimating)) {
      return null
    }

    const modalContent = (
      <div 
        className={overlayClasses}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div ref={ref} className={modalClasses} {...props}>
          {title && (
            <ModalHeader showCloseButton={showCloseButton} onClose={onClose}>
              <h2 id="modal-title" className={cx('title')}>
                {title}
              </h2>
            </ModalHeader>
          )}
          {children}
        </div>
      </div>
    )

    return createPortal(modalContent, document.body)
  }
)

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, showCloseButton = true, onClose, className, ...props }, ref) => {
    const headerClasses = cn(cx('header'), className)

    return (
      <div ref={ref} className={headerClasses} {...props}>
        {children}
        {showCloseButton && onClose && (
          <button
            className={cx('closeButton')}
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <X className={cx('closeIcon')} />
          </button>
        )}
      </div>
    )
  }
)

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    const bodyClasses = cn(cx('body'), className)

    return (
      <div ref={ref} className={bodyClasses} {...props}>
        {children}
      </div>
    )
  }
)

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, alignment = 'end', className, ...props }, ref) => {
    const footerClasses = cn(
      cx('footer'),
      alignment === 'start' && cx('start'),
      alignment === 'center' && cx('center'),
      alignment === 'spaceBetween' && cx('spaceBetween'),
      className
    )

    return (
      <div ref={ref} className={footerClasses} {...props}>
        {children}
      </div>
    )
  }
)

ModalRoot.displayName = 'Modal'
ModalHeader.displayName = 'ModalHeader'
ModalBody.displayName = 'ModalBody'
ModalFooter.displayName = 'ModalFooter'

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})

// Export useModal hook for convenience
export { useModal } 