const paths = {
  baseUrl: process.env.REACT_APP_API_BASEURL,
  devise: {
    delete: '/users/sign_out',
  },
  session: {
    roles: {
      index: '/api/v1/session/roles',
    },
    currentUser: {
      index: '/api/v1/session/current_user',
    },
  },
  enterprises: {
    index: '/api/v1/enterprises',
  }
};

export default paths;