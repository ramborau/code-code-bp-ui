#!/usr/bin/env node

/**
 * MCP Server for UI Component Library
 *
 * This server exposes UI components from the demo/ folder through the Model Context Protocol.
 * It provides tools to:
 * - List available components
 * - Get component details and examples
 * - Search components by category
 * - Get component props and usage information
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');
const fs = require('fs').promises;
const path = require('path');

const DEMO_PATH = path.join(__dirname, 'demo');
const COMPONENTS_PATH = path.join(DEMO_PATH, 'src', 'components', 'ui');

class UIComponentsServer {
  constructor() {
    this.server = new Server(
      {
        name: 'ui-components-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    this.server.onerror = (error) => console.error('[MCP Error]', error);
  }

  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'list_components',
          description: 'List all available UI components from the demo folder',
          inputSchema: {
            type: 'object',
            properties: {
              category: {
                type: 'string',
                description: 'Optional category filter (e.g., "common", "form", "data-display")',
              },
            },
          },
        },
        {
          name: 'get_component_info',
          description: 'Get detailed information about a specific component including props and examples',
          inputSchema: {
            type: 'object',
            properties: {
              componentName: {
                type: 'string',
                description: 'Name of the component (e.g., "Button", "Input", "Table")',
              },
            },
            required: ['componentName'],
          },
        },
        {
          name: 'get_component_example',
          description: 'Get usage example for a specific component',
          inputSchema: {
            type: 'object',
            properties: {
              componentName: {
                type: 'string',
                description: 'Name of the component',
              },
              exampleType: {
                type: 'string',
                description: 'Type of example (e.g., "Basic", "Advanced", "Customize")',
              },
            },
            required: ['componentName'],
          },
        },
        {
          name: 'get_uigod_rules',
          description: 'Get the UI GOD rules and workflow for working with components',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
      ],
    }));

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const { name, arguments: args } = request.params;

        switch (name) {
          case 'list_components':
            return await this.listComponents(args.category);

          case 'get_component_info':
            return await this.getComponentInfo(args.componentName);

          case 'get_component_example':
            return await this.getComponentExample(args.componentName, args.exampleType);

          case 'get_uigod_rules':
            return await this.getUIGodRules();

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async listComponents(category) {
    try {
      const components = await this.scanComponents(COMPONENTS_PATH);
      let filtered = components;

      if (category) {
        filtered = components.filter(c =>
          c.path.toLowerCase().includes(category.toLowerCase())
        );
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(filtered, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to list components: ${error.message}`);
    }
  }

  async scanComponents(dir) {
    const components = [];

    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          // Check if this directory contains a component
          const files = await fs.readdir(fullPath);
          const hasComponent = files.some(f =>
            f.endsWith('.tsx') || f.endsWith('.jsx')
          );

          if (hasComponent) {
            components.push({
              name: entry.name,
              path: fullPath.replace(__dirname, ''),
              type: 'component',
            });
          }
        }
      }
    } catch (error) {
      console.error('Error scanning components:', error);
    }

    return components;
  }

  async getComponentInfo(componentName) {
    try {
      const componentPath = path.join(COMPONENTS_PATH, componentName);
      const exists = await fs.access(componentPath).then(() => true).catch(() => false);

      if (!exists) {
        throw new Error(`Component "${componentName}" not found`);
      }

      const files = await fs.readdir(componentPath);
      const mainFile = files.find(f =>
        f === `${componentName}.tsx` || f === 'index.tsx'
      );

      if (!mainFile) {
        throw new Error(`Main component file not found for "${componentName}"`);
      }

      const content = await fs.readFile(
        path.join(componentPath, mainFile),
        'utf-8'
      );

      return {
        content: [
          {
            type: 'text',
            text: `Component: ${componentName}\n\nSource:\n${content}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to get component info: ${error.message}`);
    }
  }

  async getComponentExample(componentName, exampleType = 'Basic') {
    try {
      const markdownPath = path.join(
        DEMO_PATH,
        'src',
        'assets',
        'markdown',
        'ui-components',
        componentName,
        `${exampleType}.md`
      );

      const content = await fs.readFile(markdownPath, 'utf-8');

      return {
        content: [
          {
            type: 'text',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Example not found: ${error.message}`);
    }
  }

  async getUIGodRules() {
    try {
      const rulesPath = path.join(__dirname, 'UIGOD-RULES.MD');
      const content = await fs.readFile(rulesPath, 'utf-8');

      return {
        content: [
          {
            type: 'text',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to get UI GOD rules: ${error.message}`);
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('UI Components MCP Server running on stdio');
  }
}

// Start the server
const server = new UIComponentsServer();
server.run().catch(console.error);
