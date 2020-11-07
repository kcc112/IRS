import { Ability, AbilityBuilder } from '@casl/ability';

import { 
  Actions, 
  Subjects, 
  CurrentUser, 
  AppRolesConst
} from './redux/types';

export function defineAbilitiesFor(user?: CurrentUser): Ability {
  const { can, cannot, rules } = new AbilityBuilder<Ability<[keyof typeof Actions, keyof typeof Subjects]>>();
  
  if (!user) return new Ability(rules);

  if (user.role === AppRolesConst.ADMIN) {
    can(Actions.VIEW, Subjects.HOME);
    can(Actions.VIEW, Subjects.ENTERPRISES);
    can(Actions.VIEW, Subjects.ENTERPRISE);
    can(Actions.VIEW, Subjects.COMMENTS);
    can(Actions.DELETE, Subjects.COMMENTS);
    can(Actions.VIEW, Subjects.USERS_INFORMATIONS);
    can(Actions.VIEW, Subjects.ISSUES);
    cannot(Actions.EDIT, Subjects.ISSUE);
    cannot(Actions.CREATE, Subjects.ISSUE);
    cannot(Actions.ASSIGN, Subjects.ISSUE);
    cannot(Actions.RESOLVE, Subjects.ISSUE);
    can(Actions.VIEW, Subjects.ISSUE);

    can(Actions.EDIT, Subjects.ENTERPRISE);
    can(Actions.EDIT, Subjects.USER_INFORMATIONS);

    can(Actions.CREATE, Subjects.ENTERPRISE);

    can(Actions.DELETE, Subjects.ENTERPRISE);
    
  }

  if (user.role === AppRolesConst.NOTIFIER) {
    can(Actions.VIEW, Subjects.HOME);
    cannot(Actions.VIEW, Subjects.ENTERPRISES);
    cannot(Actions.VIEW, Subjects.USERS_INFORMATIONS);
    can(Actions.VIEW, Subjects.COMMENTS);
    can(Actions.DELETE, Subjects.COMMENTS);
    can(Actions.VIEW, Subjects.ISSUES);
    can(Actions.EDIT, Subjects.ISSUE);
    can(Actions.CREATE, Subjects.ISSUE);
    cannot(Actions.ASSIGN, Subjects.ISSUE);
    cannot(Actions.RESOLVE, Subjects.ISSUE);
    can(Actions.VIEW, Subjects.ISSUE);


    can(Actions.EDIT, Subjects.USER_INFORMATIONS);
  }

  if (user.role === AppRolesConst.RECEIVER) {
    can(Actions.VIEW, Subjects.HOME);
    cannot(Actions.VIEW, Subjects.ENTERPRISES);
    cannot(Actions.VIEW, Subjects.USERS_INFORMATIONS);
    can(Actions.EDIT, Subjects.USER_INFORMATIONS);
    can(Actions.DELETE, Subjects.COMMENTS);
    can(Actions.VIEW, Subjects.ISSUES);
    cannot(Actions.EDIT, Subjects.ISSUE);
    cannot(Actions.CREATE, Subjects.ISSUE);
    can(Actions.ASSIGN, Subjects.ISSUE);
    can(Actions.RESOLVE, Subjects.ISSUE);
    can(Actions.VIEW, Subjects.ISSUE);
  }

  return new Ability(rules);
};

export default defineAbilitiesFor;