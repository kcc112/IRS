import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useStyles } from './styles';

interface Props {
  children: ReactNode;
  visible: boolean;
  width?: string;
  height?: string;
  className?: string;
  onClose: () => void;
}

export function Modal({
  children,
  visible,
  className,
  width = '895px',
  height,
  onClose,
}: Props) {
  const classes = useStyles({});

  if (!visible) return <></>;

  const onCloseHandler = (event: any) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div onClick={onCloseHandler} className={classes.backdrop}>
      <CSSTransition in={visible} timeout={{ enter: 300, exit: 300 }}>
        <div 
          className={`${classes.modal} ${className || ''}`}
          style={{ maxWidth: width, minWidth: width, minHeight: height, maxHeight: height }}
        >
          <div className={classes.body}>{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
}