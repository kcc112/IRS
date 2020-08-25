import React from 'react';
import { useTranslation } from 'react-i18next';

import paths from '../../api/paths';

interface Props {
  routes: React.ReactNode;
}

export function IrsLayout({
  routes,
}: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <a rel="nofollow" data-method="delete" href={paths.devise.delete}>{t('Logout')}</a>
      {routes}
    </div>
  );
}