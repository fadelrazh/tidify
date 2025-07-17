/**
 * FDS Utility Functions
 */

/**
 * Combines CSS class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Creates a CSS Module class name combiner
 */
export function createClassNameBuilder(styles: Record<string, string>) {
  return (...classes: (string | undefined | null | false)[]): string => {
    return classes
      .filter(Boolean)
      .map(cls => styles[cls as string] || cls)
      .join(' ')
  }
}

/**
 * Utility for responsive breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

/**
 * Generate responsive CSS custom properties
 */
export function generateResponsiveProps(
  baseValue: string | number,
  responsiveValues?: Partial<Record<keyof typeof breakpoints, string | number>>
): Record<string, string> {
  const props: Record<string, string> = {
    '--fds-value': String(baseValue),
  }

  if (responsiveValues) {
    Object.entries(responsiveValues).forEach(([breakpoint, value]) => {
      props[`--fds-value-${breakpoint}`] = String(value)
    })
  }

  return props
} 