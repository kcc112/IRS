import React from 'react';
import GitHub from '@material-ui/icons/GitHub';

import { useStyles } from './styles';

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.info}>
        Copyright &copy; Kamil Celejewski
      </div>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kcc112/">
          <GitHub />
        </a>
      </div>
    </footer>
  );
}