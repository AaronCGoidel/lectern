import React, {createContext, useState} from "react";
export const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [isLoggedIn, setLogin] = useState(false);
    const [type, setType] = useState(null); // "student" or "instructor"
    const [name, setName] = useState(null); 
    const handleName = (name) => {
        setName(name);
    }
    const [email, setEmail] = useState(null);
    const [courses, setCourses] = useState([]);
    const lst = {
        login: [isLoggedIn, setLogin], 
        type: [type, setType], 
        name: [name, setName], 
        email: [email, setEmail], 
        courses: [courses, setCourses]
    }

    return (
    <LoginContext.Provider value={lst}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;