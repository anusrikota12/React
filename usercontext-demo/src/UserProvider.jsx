import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Anu");
  return (
    <UserContext.Provider value={{ username , setUsername }}>
        {children}
    </UserContext.Provider>
  );
}
export default UserProvider;