import { auth } from "@/firebase";
import { AuthType } from "@/type";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  children: ReactNode;
}

const initialUser = JSON.parse(localStorage.getItem("user")!) || null;

const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const register = (user: AuthType) =>
    createUserWithEmailAndPassword(auth, user.email, user.password);

  const logOut = () => {
    localStorage.removeItem("user");
    return signOut(auth);
  };

  const logIn = (user: AuthType) =>
    signInWithEmailAndPassword(auth, user.email, user.password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("user", JSON.stringify(currentUser));
      setUser(currentUser);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthContext.Provider value={{ logIn, register, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
