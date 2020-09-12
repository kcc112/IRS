import React from 'react';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useStyles } from './styles';
import { UsersInformationsIndex } from '../../../redux/types';


interface Props {
  usersInformations: UsersInformationsIndex[];
}

export function SimpleTable({ 
  usersInformations,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{t('Email')}</TableCell>
            <TableCell>{t('Created at')}</TableCell>
            <TableCell>{t('Enterprise name')}</TableCell>
            <TableCell>{t('User name')}</TableCell>
            <TableCell>{t('Phone number')}</TableCell>
            <TableCell>{t('Role')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersInformations.map((userInformations) => (
            <TableRow key={userInformations.id}>
              <TableCell>
                {userInformations.attributes.email}
              </TableCell>
              <TableCell>{userInformations.attributes.createdAt}</TableCell>
              <TableCell>{userInformations.attributes.enterpriseName}</TableCell>
              <TableCell>
                {`${userInformations.attributes.name} ${userInformations.attributes.surname}`}
              </TableCell>
              <TableCell>{userInformations.attributes.phone_number}</TableCell>
              <TableCell>{userInformations.attributes.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
