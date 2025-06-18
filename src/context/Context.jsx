import { memo } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  

  return (
    <UserContext.Provider value={{ current }}>
      {children}
    </UserContext.Provider>
  );
}

export default memo(UserProvider);