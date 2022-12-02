module.exports = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Docs',
    },
    {
      type: 'category',
      label: 'Enterprise SSO',
      collapsible: true,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
        {
          type: 'category',
          label: 'Deploy',
          items: [
            'jackson/deploy/index',
            'jackson/deploy/service',
            'jackson/deploy/npm-library',
            'jackson/deploy/env-variables',
            'jackson/deploy/pre-loaded-connections',
          ],
        },
        {
          type: 'category',
          label: 'Configure your SSO provider',
          link: { type: 'doc', id: 'jackson/sso-providers/index' },
          items: [
            'jackson/sso-providers/generic-saml',
            'jackson/sso-providers/azure',
            'jackson/sso-providers/microsoft-adfs',
            'jackson/sso-providers/okta',
            'jackson/sso-providers/auth0',
            'jackson/sso-providers/google',
            'jackson/sso-providers/onelogin',
            'jackson/sso-providers/pingone',
            'jackson/sso-providers/jumpcloud',
            'jackson/sso-providers/generic-oidc',
          ],
        },
        {
          type: 'category',
          label: 'Single Sign-on (SSO) Flow',
          link: { type: 'doc', id: 'jackson/sso-flow/index' },
          items: ['jackson/sso-flow/example-flow'],
        },
        'jackson/examples',
        'jackson/observability',
        'jackson/sbom',
        'jackson/container-signing',
        'jackson/security',
        'jackson/upgrade',
        'jackson/local-development',
      ],
    },
    {
      type: 'category',
      label: 'Directory Sync',
      collapsible: true,
      link: { type: 'doc', id: 'directory-sync/overview' },
      items: [
        'directory-sync/getting-started',
        'directory-sync/api-reference',
        'directory-sync/examples',
        'directory-sync/webhooks',
        'directory-sync/events',
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          link: { type: 'doc', id: 'directory-sync/providers/index' },
          items: [
            'directory-sync/providers/azure',
            'directory-sync/providers/okta',
            'directory-sync/providers/onelogin',
            'directory-sync/providers/jumpcloud',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Admin Portal',
      collapsible: true,
      link: { type: 'doc', id: 'admin-portal/overview' },
      items: ['admin-portal/enterprise-sso', 'admin-portal/directory-sync'],
    },
  ],
};
