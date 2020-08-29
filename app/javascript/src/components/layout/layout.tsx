import React from 'react';

import { useStyles } from './styles';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

interface Props {
  routes: React.ReactNode;
}

export function IrsLayout({
  routes,
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.main}>
        <nav className={classes.sidebar}>
          <Sidebar />
        </nav>
        <div className={classes.container}>
          <div className={classes.body}>
            {routes}
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}