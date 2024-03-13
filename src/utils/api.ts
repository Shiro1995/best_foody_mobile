import auth from '@react-native-firebase/auth';



export const signUpUserWithEmailAndPassword = (email: string, password:string) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((value) => {
      console.log('User account created & signed in!');

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const signInUserWithEmailAndPassword = (email: string, password:string) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        
        console.log('User account created & signed in!'); 
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
  
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
  
        console.error(error);
      });
  };
  