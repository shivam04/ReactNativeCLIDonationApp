import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
        return userCredential.user;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return { error: 'The email you entered is already in use.' }
        } else if (error.code === 'auth/invalid-email') {
            return { error: 'Please enter a valid email.' }
        }
        return { error: 'Something went wrong with your request.' }
    }
};

export const loginUser = async (email, password) => {
    try {
        console.log(email, password);
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await getIdToken(userCredential.user);
        return {
            status: true,
            data: {
                displayName: userCredential.user.displayName,
                email: userCredential.user.email,
                token
            }
        }
    } catch (error) {
        console.log(error.code);
        if (error.code === 'auth/wrong-password' || error.code === "auth/invalid-credential") {
            return { status: false, error: 'Please enter a correct password' };
        } else if (error.code === 'auth/user-not-found' || error.code === "auth/invalid-email") {
            return {
                status: false,
                error:
                    'The email you entered does not exist. Please create a new account.',
            };
        }
        return { status: false, error: 'Something went wrong' };
    }
}