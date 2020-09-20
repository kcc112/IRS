import React from 'react';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { UsersInformationsIndex } from '../../../redux/types';
import SimpleSelect from '../../../../shared/dropdown/simple-select';
import { selectRoles } from '../../../../../session/redux/selectors';
import { Option } from '../../../../../app/types';
import { Role } from '../../../../../session/redux/types';

interface Props {
  usersInformations: UsersInformationsIndex[];
}

export function SimpleTable({ 
  usersInformations,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const roles = useSelector(selectRoles);

  const resolveRoles = (roles: Role[]): Option[] => {
    return roles.map(role => {
      return ({
        value: role.role,
        id: role.role
      });
    });
  };

  const handleChange = (value: string) => {
  }

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
              <TableCell>
                <SimpleSelect
                  value={{
                    value: userInformations.attributes.role.toLocaleLowerCase(),
                    id: userInformations.attributes.role.toLocaleLowerCase()
                  }}
                  options={resolveRoles(roles)}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
