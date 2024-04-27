import {defineConfig} from 'sanity';
// import { deskTool } from 'sanity/desk';
import {structureTool} from 'sanity/structure';

import schemas from './sanity/schemas';

const config = defineConfig({

  projectId: 'yvcn6jhd',
  dataset: 'production',
  title: 'next-ts-sanity-website',
  apiVersion: '2023-03-04',
  basePath: '/admin',
  // plugins : [deskTool() ], --deprecated, therefore import structureTool
  plugins: [structureTool() ],

  schema: { types : schemas}
  

});

export default config;
