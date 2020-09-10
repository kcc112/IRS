const routes = {
  irs: {
    root: '/irs',
    enterprises: {
      index: '/irs/enterprises',
      create: '/irs/enterprise/create',
      edit: '/irs/enterprise/:id/edit',
      delete: '/irs/enterprise/:id/delete',
    },
    users: {
      index: '/irs/users',
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