import React, { useEffect, useContext } from 'react';
import Characters from '../characters/Characters';
import AuthContext from '../../context/auth/authContext';

const Character = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Characters />
    </div>
  );
};

export default Character;
