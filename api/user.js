import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import { updateToken } from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      //   console.log('That email is already in use');
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      //   console.log('Email is invalid');
      return {error: 'Please enter a valid email addess.'};
    }
    // console.log(error);
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.message === 'auth/wrong-password') {
      return {status: false, error: 'Please enter correct password'};
    }
    else if (error.message === 'auth/user-not-found') {
        return {status: false, error: 'The email you entered does not exist. Please create a new account.'};
      }
    return {status: false, error:'Something went wrong'}
  }
};

export const logOut = async() =>{
  await auth().signOut();
};


export const checkToken = async() =>{
  try{
    let response = await auth().currentUser.getIdToken(true);
    //updating the token here.
    store.dispatch(updateToken(response));
    return response;
  }
  catch(error){
    return error;
  }
}