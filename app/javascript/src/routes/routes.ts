const routes = {
  irs: {
    root: '/irs',
    enterprises: {
      index: '/irs/enterprises',
      create: '/irs/enterprise/create',
      edit: '/irs/enterprise/:id/edit',
      show: '/irs/enterprise/:id',
      delete: '/irs/enterprise/:id/delete',
    },
    usersInformations: {
      index: '/irs/users_informations',
      edit: '/irs/users_informations/:id/edit',
    },
    issues: {
      index: '/irs/issues',
      create: '/irs/issue/create',
      edit: '/irs/issue/:id/edit',
      show: '/irs/issue/:id',
      delete: '/irs/issue/:id/delete',
    },
    comments: {
      index: '/irs/comments',
    }
  },
};

export default routes;