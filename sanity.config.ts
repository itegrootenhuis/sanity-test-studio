import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { structure } from './structure'
import { defaultDocumentNode } from './structure/DefaultDocumentNode'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'SanityPoc',

  projectId: '1s6iue8u',
  dataset: 'production',

  plugins: [structureTool({
    structure,
    defaultDocumentNode,
  }),
  visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

