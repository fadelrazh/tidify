/**
 * FDS (Fadel Design System)
 * 
 * A modern, accessible design system for Tidify accommodation platform
 * Built with TypeScript, CSS Modules, and React
 */

// Design Tokens
export * from './tokens'

// Components
export { Button } from './components/Button'
export { Card } from './components/Card'
export { Input } from './components/Input'
export { Badge } from './components/Badge'
export { Modal, useModal } from './components/Modal'
export { Layout } from './components/Layout'
export { Icon } from './components/Icon'
export { Navbar } from './components/Navbar'
export { Hero } from './components/Hero'
export { TopBar } from './components/TopBar'

// Component Types
export type { ButtonProps } from './components/Button'
export type { CardProps } from './components/Card'
export type { InputProps } from './components/Input'
export type { BadgeProps, BadgeVariant, BadgeStyle } from './components/Badge'
export type { ModalProps, ModalSize, FooterAlignment } from './components/Modal'
export type { IconProps } from './components/Icon'
export type { NavbarProps } from './components/Navbar'
export type { HeroProps } from './components/Hero'
export type { TopBarProps } from './components/TopBar'

// Icons - Re-export for convenience
export {
  Search, MapPin, Calendar, Users, Star, Heart, Settings, 
  Check, CheckCircle, AlertCircle, Info, X, Menu,
  Home, Mail, Phone, Car, Wifi, Kitchen, Pool, Gym,
  Plus, Minus, Edit, Delete, Share, Copy, Upload, Download
} from './components/Icon'

// Utilities
export * from './utils'

// Hooks
export * from './hooks'

// Types
export type * from './types' 