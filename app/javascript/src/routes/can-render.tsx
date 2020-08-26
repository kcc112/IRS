import React from 'react';

import { Error403 } from '../errors/403';

interface Props {
  render: boolean;
  component: JSX.Element;
}

export function CanRender({ 
  render,
  component,
 }: Props) {

  return render ? (
    component
  ) : (
    <Error403 />
  )
}