/**
 * FDS Layout Component
 */

import React from 'react'
import { LayoutProps } from '../../types'
import { cn, createClassNameBuilder } from '../../utils'
import styles from './Layout.module.css'

const cx = createClassNameBuilder(styles)

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      children,
      maxWidth = 'xl',
      padding = true,
      className,
      ...props
    },
    ref
  ) => {
    const containerClasses = cn(
      cx('container'),
      cx(`maxWidth-${maxWidth}`),
      padding && cx('padding'),
      className
    )

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    )
  }
)

Layout.displayName = 'Layout' 