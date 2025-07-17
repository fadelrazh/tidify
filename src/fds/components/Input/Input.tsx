"use client"

/**
 * FDS Input Component
 */

import React from 'react'
import { ComponentProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import styles from './Input.module.css'

const cx = createClassNameBuilder(styles)

export interface InputProps extends Omit<ComponentProps, 'children'> {
  /**
   * Input label
   */
  label?: string
  
  /**
   * Whether the field is required
   */
  required?: boolean
  
  /**
   * Input placeholder
   */
  placeholder?: string
  
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  
  /**
   * Input value
   */
  value?: string
  
  /**
   * Default value for uncontrolled input
   */
  defaultValue?: string
  
  /**
   * Validation state
   */
  state?: 'default' | 'error' | 'success'
  
  /**
   * Helper text
   */
  helperText?: string
  
  /**
   * Error message
   */
  error?: string
  
  /**
   * Icon to display at the start
   */
  startIcon?: React.ReactNode
  
  /**
   * Icon to display at the end
   */
  endIcon?: React.ReactNode
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required = false,
      placeholder,
      type = 'text',
      size = 'md',
      rounded = 'md',
      state = 'default',
      helperText,
      error,
      startIcon,
      endIcon,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const inputClasses = cn(
      cx('input'),
      size === 'sm' ? cx('small') : null,
      size === 'md' ? cx('medium') : null,
      size === 'lg' ? cx('large') : null,
      rounded ? cx(`rounded-${rounded}`) : null,
      state === 'error' ? cx('error') : null,
      state === 'success' ? cx('success') : null,
      startIcon ? cx('hasStartIcon') : null,
      endIcon ? cx('hasEndIcon') : null
    )

    const currentState = error ? 'error' : state
    const currentHelperText = error || helperText

    return (
      <div className={cn(cx('inputWrapper'), className)}>
        {label && (
          <label className={cx('label')}>
            {label}
            {required && <span className={cx('required')}> *</span>}
          </label>
        )}
        
        <div className={cx('inputContainer')}>
          {startIcon && (
            <div className={cx('startIcon')}>
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
          
          {endIcon && (
            <div className={cx('endIcon')}>
              {endIcon}
            </div>
          )}
        </div>
        
        {currentHelperText && (
          <div className={cn(
            cx('helperText'),
            currentState === 'error' && cx('errorText'),
            currentState === 'success' && cx('successText')
          )}>
            {currentHelperText}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input' 