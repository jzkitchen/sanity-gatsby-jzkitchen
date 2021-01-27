export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6010b44fdc571c3e9e5f8b0b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-jzkitchen-studio',
                  apiId: 'c4fda0f0-0099-4db9-ae04-cd577121308b'
                },
                {
                  buildHookId: '6010b44f2a7ccf4423c0148b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-jzkitchen',
                  apiId: 'f68b91bf-bfaf-4772-a078-379df2ccff69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jzkitchen/sanity-gatsby-jzkitchen',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-jzkitchen.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
