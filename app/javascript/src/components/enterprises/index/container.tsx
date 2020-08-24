import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEnterprises } from './actions';
import { selectIndexEnterprises } from '../redux/selectors';

export function EnterprisesIndex() {
  const dispatch = useDispatch();
  const enterprises = useSelector(selectIndexEnterprises);

  useEffect(() => {
    dispatch(fetchEnterprises());
  }, [dispatch])

  return (
    <div>
      <h1>Enterprises</h1>
      { enterprises && enterprises.map(enterprise => (
          <div>
            <div>{enterprise.attributes.name}</div>
            <div>{enterprise.attributes.description}</div>
          </div>
        ))
      }
    </div>
  );
}