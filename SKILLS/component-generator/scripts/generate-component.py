#!/usr/bin/env python3
"""
Component Generator Script
Generates boilerplate code for new UI components following project conventions.
"""

import os
import sys
from pathlib import Path

def generate_component(name: str, component_type: str, props: list = None):
    """
    Generate a new React component with TypeScript

    Args:
        name: Component name (PascalCase)
        component_type: Type of component (ui, shared, template, view)
        props: List of prop names and types
    """

    # Validate component type
    valid_types = ['ui', 'shared', 'template', 'view']
    if component_type not in valid_types:
        print(f"Error: Invalid component type. Must be one of: {', '.join(valid_types)}")
        sys.exit(1)

    # Generate component path
    base_path = f"src/components/{component_type}"
    component_dir = os.path.join(base_path, name)

    # Create component directory
    os.makedirs(component_dir, exist_ok=True)

    # Generate TypeScript interface for props
    props_interface = generate_props_interface(name, props or [])

    # Generate component code
    component_code = generate_component_code(name, props_interface)

    # Write component file
    component_file = os.path.join(component_dir, f"{name}.tsx")
    with open(component_file, 'w') as f:
        f.write(component_code)

    # Generate index file
    index_code = f"export {{ default }} from './{name}'\n"
    index_file = os.path.join(component_dir, "index.ts")
    with open(index_file, 'w') as f:
        f.write(index_code)

    print(f"✓ Component created: {component_file}")
    print(f"✓ Index file created: {index_file}")

def generate_props_interface(name: str, props: list) -> str:
    """Generate TypeScript interface for component props"""
    if not props:
        return f"export interface {name}Props {{\n    className?: string\n}}"

    props_lines = ["    className?: string"]
    for prop in props:
        props_lines.append(f"    {prop}")

    return f"export interface {name}Props {{\n" + "\n".join(props_lines) + "\n}"

def generate_component_code(name: str, props_interface: str) -> str:
    """Generate React component code"""
    return f"""import {{ forwardRef }} from 'react'
import classNames from '@/utils/classNames'

{props_interface}

/**
 * {name} Component
 *
 * @component
 * @example
 * ```tsx
 * <{name} />
 * ```
 */
const {name} = forwardRef<HTMLDivElement, {name}Props>(
    ({{ className, ...rest }}, ref) => {{
        return (
            <div
                ref={{ref}}
                className={{classNames(
                    '{name.lower()}',
                    className
                )}}
                {{...rest}}
            >
                {{/* Component content */}}
            </div>
        )
    }}
)

{name}.displayName = '{name}'

export default {name}
"""

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: generate-component.py <ComponentName> <type> [props...]")
        print("Example: generate-component.py MyButton ui 'onClick?: () => void' 'variant?: string'")
        sys.exit(1)

    name = sys.argv[1]
    component_type = sys.argv[2]
    props = sys.argv[3:] if len(sys.argv) > 3 else []

    generate_component(name, component_type, props)
