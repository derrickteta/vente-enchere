import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  ConnectedUserEntity,
  RoleType,
} from '../../../entities/ConnectedUserEntity';
import { ROUTES } from '../../../routes';
import { Unauthorized } from '../Unauthorized';

export const ProtectedRoutes = ({
  children,
  authorization,
}: {
  children: ReactNode;
  authorization: RoleType;
}) => {
  const connectedUser: ConnectedUserEntity = useSelector(
    (state: any) => state.userReducer,
  ).user;
  const router = useHistory();

  if (new Date().getTime() > connectedUser.nextAuthDate) {
    router.push(ROUTES.SIGNIN);
  }
  if (!connectedUser.authentifie) {
    router.push(ROUTES.SIGNIN);
  }

  if (connectedUser.roles?.includes(authorization)) {
    return <>{children}</>;
  } else {
    return <Unauthorized />;
  }
};
