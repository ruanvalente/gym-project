"use client";

import { createContext, useState } from "react";
type StudentType = {
  id?: string;
  name: string;
  email: string;
  age: number;
};

type StudentContextType = {
  state: StudentType;
  setState: React.Dispatch<React.SetStateAction<StudentType>>;
};

type StudentContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_STATE = {
  state: {
    name: "",
    email: "",
    age: 1,
  },
  setState: () => {},
};

export const StudentContext = createContext<StudentContextType>(DEFAULT_STATE);

export const StudentContextProvider = ({
  children,
}: StudentContextProviderProps) => {
  const [state, setState] = useState(DEFAULT_STATE.state);

  return (
    <StudentContext.Provider value={{ state, setState }}>
      {children}
    </StudentContext.Provider>
  );
};
