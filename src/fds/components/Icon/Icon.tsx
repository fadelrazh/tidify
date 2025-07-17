"use client"

/**
 * FDS Icon Component
 * Wrapper for Lucide React icons with consistent styling
 */

import React from 'react'
import { LucideIcon } from 'lucide-react'
import { BaseProps } from '../../types'
import { cn } from '../../utils'

export interface IconProps extends BaseProps {
  /**
   * Lucide icon component
   */
  icon: LucideIcon
  
  /**
   * Icon size
   */
  size?: number | 'sm' | 'md' | 'lg' | 'xl'
  
  /**
   * Icon color
   */
  color?: string
  
  /**
   * Stroke width
   */
  strokeWidth?: number
  
  /**
   * Whether the icon should be filled
   */
  filled?: boolean
}

const sizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: IconComponent,
      size = 'md',
      color,
      strokeWidth = 2,
      filled = false,
      className,
      ...props
    },
    ref
  ) => {
    const iconSize = typeof size === 'number' ? size : sizeMap[size]
    
    return (
      <IconComponent
        ref={ref}
        size={iconSize}
        color={color}
        strokeWidth={strokeWidth}
        fill={filled ? 'currentColor' : 'none'}
        className={cn('fds-icon', className)}
        {...props}
      />
    )
  }
)

Icon.displayName = 'Icon'

// Common icon exports for convenience
export {
  // Navigation
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  
  // Actions
  Search,
  Plus,
  Minus,
  Edit,
  Trash2 as Delete,
  Download,
  Upload,
  Share,
  Copy,
  
  // UI Elements
  Home,
  Settings,
  User,
  Users,
  Heart,
  Star,
  Eye,
  EyeOff,
  
  // Communication
  Mail,
  Phone,
  MessageCircle,
  Bell,
  
  // Status
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  
  // Media
  Image,
  Camera,
  Video,
  Volume2,
  VolumeX,
  
  // Location & Travel
  MapPin,
  Navigation,
  Compass,
  Calendar,
  Clock,
  
  // Business
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  
  // Technology
  Wifi,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  
  // Accommodation specific
  Bed,
  Car,
  UtensilsCrossed as Kitchen,
  Waves as Pool,
  Trees as Garden,
  Dumbbell as Gym,
  
  // Loaders
  Loader2,
  RotateCw,
} from 'lucide-react' 