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
    },
    comments: {
      index: '/irs/comments',
    }
  },
};

export default routes;