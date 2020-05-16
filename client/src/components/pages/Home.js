import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Deployed to Heroku</p>
    </div>
  );
};

export default Home;
