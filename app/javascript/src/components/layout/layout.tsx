import React from 'react';

interface Props {
  routes: React.ReactNode;
}

export function IrsLayout({
  routes,
}: Props) {

  return (
    <div>
      {routes}
    </div>
  );
}