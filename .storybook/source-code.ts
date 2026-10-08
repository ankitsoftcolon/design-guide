import { examples } from './generated-examples';
import themeSource from '../src/styles/theme.css?raw';

const implementations = import.meta.glob<string>('../src/components/ui/*.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function developerSource(source: string, context: { title: string }) {
  if (source.startsWith("// Usage example") || source.startsWith("/* src/styles/theme.css */")) return source;
  if (context.title === 'Foundations/Design Tokens') {
    return `/* src/styles/theme.css */\n${themeSource}`;
  }
  const component = context.title.split('/').at(-1)?.toLowerCase().replaceAll(' ', '-');
  const implementation = implementations[`../src/components/ui/${component}.tsx`];
  const componentName = context.title.split("/").at(-1)?.replaceAll(" ", "");
  const usage = examples[context.title] ?? `import { ${componentName} } from "@/components/ui/${component}";\n\nexport function Example() {\n  return (\n${source}\n  );\n}`;
  const sections = [`// Usage example — save separately from the component implementation below.\n// Import src/styles/globals.css and load Inter in your application.\n${usage}`];
  if (implementation) sections.push(`// Component implementation: src/components/ui/${component}.tsx\n${implementation}`);
  return sections.join('\n\n');
}
