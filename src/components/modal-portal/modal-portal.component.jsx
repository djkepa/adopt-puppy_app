import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Backdrop from './backdrop/backdrop.component';
// Styles
import { WrappedModal, InsideWrapper } from './modal-portal.styles';

const ModalPortal = React.memo(
  ({ opened, close, children }) => {
    return ReactDOM.createPortal(
      <>
        <Backdrop close={close} opened={opened} />
        <WrappedModal opened={opened}>
          <InsideWrapper>{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById('root-modal'),
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  },
);
export default ModalPortal;
