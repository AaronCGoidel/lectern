import React, {createContext, useState} from "react";
export const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [type, setType] = useState(null); // "student" or "instructor"
    const [name, setName] = useState(null); 
    const [email, setEmail] = useState(null);
    const [courses, setCourses] = useState([]);
    const [uid, setUid] = useState(null);
    const lst = {
      user: {
       type, name, email, courses, uid,
      },
      mutate: {
        setType, setName, setEmail, setCourses, setUid
      }
    }

    return (
    <LoginContext.Provider value={lst}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;