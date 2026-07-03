import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://archcode-lab.github.io',
  base: process.env.GITHUB_ACTIONS ? '/spqe-lab' : '/',
  integrations: [
    starlight({
      title: 'ARCHCode Lab',
      description: 'Applied research on controlled AI software generation.',
      customCss: ['./src/styles/archcode.css', './src/styles/custom.css'],
      sidebar: [
        { slug: 'index' },
        { slug: 'foundations' },
        {
          label: 'Experiments',
          items: [
            { slug: 'experiments/self-audit' },
            { slug: 'experiments/noisedoselab' },
            { slug: 'experiments/data-workspace' },
            { slug: 'experiments/blender-spatial-relationships' },
            { slug: 'experiments/um-harness' }
          ]
        },
        {
          label: 'Methods',
          items: [
            { label: 'Methods overview', slug: 'methods' },
            { slug: 'methods/family-driven-generation' }
          ]
        },
        {
          label: 'Request Kit',
          items: [
            { slug: 'request-kit' },
            { slug: 'request-kit/contact-dossier-form' },
            { slug: 'request-kit/prototype-request-form' },
            { slug: 'request-kit/specblock-best-practices' },
            { slug: 'request-kit/complete-specblock-example' },
            { slug: 'request-kit/noisedoselab-complete-specblock-example' }
          ]
        },
        {
          label: 'About',
          items: [
            { slug: 'about' },
            { slug: 'about/why-this-showcase' }
          ]
        }
      ]
    })
  ]
});
