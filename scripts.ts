import { ScriptsConfiguration } from 'https://deno.land/x/velociraptor@1.0.1/mod.ts'

export default {
  scripts: {
    start: {
      cmd: 'deno run src/server.ts',
      allow: ['all'],
    },
  },
} as ScriptsConfiguration
