export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffff74b757c677f667493db',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iib2syp2',
                  apiId: 'ab003f6b-e28a-4004-8be3-5f4754bcc2b8'
                },
                {
                  buildHookId: '5ffff74ca7cc2172ec2a4ee5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s188f26d',
                  apiId: '8d5e0667-23a7-4040-805e-ff327454e88f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drichar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s188f26d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
