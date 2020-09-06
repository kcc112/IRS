const routes = {
  irs: {
    root: '/irs',
    enterprises: {
      index: '/irs/enterprises',
      create: '/irs/enterprise/create',
      edit: '/irs/enterprise/:id/edit',
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