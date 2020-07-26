import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

export const UserContext = React.createContext({});
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const responseFacebook = response => {
    const data = {};
    data.email = response.email;
    data.name = response.name;
    data.img = response.picture.data.url;
    setUser(data);
  };
  const fbButton = (
    <FacebookLogin
      appId={process.env.FB_APP_ID}
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon="fa-facebook"
    />
  );
  return (
    <UserContext.Provider value={{ user, fbButton }}>
      {children}
    </UserContext.Provider>
  );
};
