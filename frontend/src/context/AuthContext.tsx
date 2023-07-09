import React, { useContext, useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseConfig } from '@/lib/FirebaseConfig';

type Props = {
  children: React.ReactNode;
};

// コンテキストを作成
export const AuthContext = React.createContext<User | null>(null);

export const useAuth = () => {
  // useContextで作成したコンテキストを呼び出す
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
      setLoading(false);
    });
    return unSubscribe;
  }, [auth]);

  const value = user;

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
