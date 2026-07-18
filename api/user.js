import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
        return userCredential;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return { error: 'The email you entered is already in use.' }
        } else if (error.code === 'auth/invalid-email') {
            return { error: 'Please enter a valid email.' }
        }
        return { error: 'Something went wrong with your request.' }
    }
};