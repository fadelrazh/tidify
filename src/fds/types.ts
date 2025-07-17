/**
 * FDS Type Definitions
 */

export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral' | 'info'
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ComponentProps extends BaseProps {
  size?: Size
  variant?: Variant
  disabled?: boolean
  rounded?: BorderRadius
}

export interface LayoutProps extends BaseProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: boolean
} 