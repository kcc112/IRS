import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Loader } from '../shared/loader/loader';
import { AlertIrs } from '../shared/alerts';
import { selectShowAlert } from '../app/redux/selectors';
import { selectCurrentUser } from '../../session/redux/selectors';
import defineAbilitiesFor from '../../session/abilities';

interface Props {
  routes: React.ReactNode;
  isLoading: boolean;
}

export function IrsLayout({
  routes,
  isLoading,
}: Props) {
  const classes = useStyles();
  const isAlertVisable = useSelector(selectShowAlert); 
  const currentUser = useSelector(selectCurrentUser);
  const abilities = defineAbilitiesFor(currentUser);

  return (
    <div className={classes.root} >
      <div className={classes.alert}>
        {isAlertVisable && <AlertIrs /> } 
      </div>
      <div className={classes.header}>
        <Header abilities={abilities} />
      </div>
      <div className={classes.main}>
        <nav className={classes.sidebar}>
          <Sidebar abilities={abilities} />
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
      <Loader visible={isLoading} />
    </div>
  );
}