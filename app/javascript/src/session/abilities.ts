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
    can(Actions.VIEW, Subjects.ENTERPRISES);
    can(Actions.VIEW, Subjects.COMMENTS);
    can(Actions.VIEW, Subjects.USERS);
    can(Actions.VIEW, Subjects.ISSUES);

    can(Actions.EDIT, Subjects.ENTERPRISE);

    can(Actions.CREATE, Subjects.ENTERPRISE);
  }

  if (user.role === AppRolesConst.NOTIFIER) {
    cannot(Actions.VIEW, Subjects.ENTERPRISES);
    cannot(Actions.VIEW, Subjects.USERS);
    can(Actions.VIEW, Subjects.COMMENTS);
    can(Actions.VIEW, Subjects.ISSUES);
  }


  return new Ability(rules);
};

export default defineAbilitiesFor;