import routes from '../../../../routes/routes';

export const resolveIsActive = (page: string, pathname: string): boolean => {
  switch (page) {
    case 'enterprises':
      return pathname.includes(routes.irs.enterprises.index);
    case 'users':
      return pathname.includes(routes.irs.users.index);
    case 'issues':
      return pathname.includes(routes.irs.issues.index);
    default:
      return false;
  }
}