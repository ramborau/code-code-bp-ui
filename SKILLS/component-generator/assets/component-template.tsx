import { forwardRef } from 'react'
import classNames from '@/utils/classNames'

export interface ComponentNameProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Additional CSS classes to apply
     */
    className?: string
    /**
     * Visual variant of the component
     */
    variant?: 'default' | 'primary' | 'secondary'
    /**
     * Size of the component
     */
    size?: 'sm' | 'md' | 'lg'
    /**
     * Whether the component is disabled
     */
    disabled?: boolean
    /**
     * Loading state
     */
    loading?: boolean
}

/**
 * ComponentName - [Brief description of what this component does]
 *
 * @component
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="md">
 *   Content here
 * </ComponentName>
 * ```
 */
const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
    (
        {
            className,
            variant = 'default',
            size = 'md',
            disabled = false,
            loading = false,
            children,
            ...rest
        },
        ref,
    ) => {
        // Component logic here

        const componentClasses = classNames(
            // Base classes
            'component-name',
            'relative inline-flex items-center justify-center',
            'transition-all duration-200',

            // Variant classes
            variant === 'default' && 'bg-white text-gray-900',
            variant === 'primary' && 'bg-primary text-white',
            variant === 'secondary' && 'bg-gray-200 text-gray-900',

            // Size classes
            size === 'sm' && 'text-sm px-3 py-1.5',
            size === 'md' && 'text-base px-4 py-2',
            size === 'lg' && 'text-lg px-6 py-3',

            // State classes
            disabled && 'opacity-50 cursor-not-allowed',
            loading && 'pointer-events-none',

            // Dark mode
            'dark:bg-gray-800 dark:text-white',

            // Custom className
            className,
        )

        return (
            <div
                ref={ref}
                className={componentClasses}
                aria-disabled={disabled}
                aria-busy={loading}
                {...rest}
            >
                {loading && (
                    <span className="mr-2">
                        {/* Loading spinner icon */}
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </span>
                )}
                {children}
            </div>
        )
    },
)

ComponentName.displayName = 'ComponentName'

export default ComponentName
