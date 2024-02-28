import React, { useEffect, useState } from 'react';

import { auth } from 'config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unSub;
  }, []);

  return { user };
}
