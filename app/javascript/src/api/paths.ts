const paths = {
  baseUrl: process.env.REACT_APP_API_BASEURL,
  devise: {
    delete: '/users/sign_out',
  },
  session: {
    roles: {
      index: '/api/v1/session/roles',
      edit: (id: string) => `/api/v1/session/roles/${id}`,
    },
    currentUser: {
      index: '/api/v1/session/current_user',
    },
  },
  enterprises: {
    index: '/api/v1/enterprises',
    create: '/api/v1/enterprises',
    show: (id: string) => `/api/v1/enterprises/${id}`,
    edit: (id: string) => `/api/v1/enterprises/${id}`,
    delete: (id: string) => `/api/v1/enterprises/${id}`,
  },
  users: {
    activate: (id: string) =>`/api/v1/users/${id}/activate`,
    deactivate: (id: string) => `/api/v1/users/${id}/deactivate`,
  },
  usersInformations: {
    index: '/api/v1/users_informations',
    show: (id: string) => `/api/v1/users_informations/${id}`,
    edit: (id: string) => `/api/v1/users_informations/${id}`,
  },
  issues: {
    index: '/api/v1/issues',
    create: '/api/v1/issues',
    show: (id: string) => `/api/v1/issues/${id}`,
    edit: (id: string) => `/api/v1/issues/${id}`,
    delete: (id: string) => `/api/v1/issues/${id}`,
    issuesTypes: '/api/v1/issues/issue_types',
    assign: (id: string) => `/api/v1/issues/${id}/assign_receiver`,
    resolve: (id: string) => `/api/v1/issues/${id}/resolve_issue`,
  },
  comments: {
    comments_list: '/api/v1/comments/issues_list',
    create: '/api/v1/comments',
    edit: (id: string) => `/api/v1/comments/${id}`,
    delete: (id: string) => `/api/v1/comments/${id}`,
  }
};

export default paths;