import { build } from 'vite';

await build({ configFile: 'packages/core/vite.config.ts' });
await build({ configFile: 'packages/vue3/vite.config.ts' });
await build({ configFile: 'packages/vue2/vite.config.ts' });
