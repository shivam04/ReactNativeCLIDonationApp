import { ScrollView, Pressable, View, Text } from "react-native";
import style from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "./../../components/Input/Input";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Route } from '../../navigation/Route';
import { loginUser } from "../../api/user";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/reducers/User";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.container}>
                <View style={globalStyle.marginBottom24}>
                    <Header type={1} title={'Welcome Back'} />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        keyboardType={'email-address'}
                        label={'Email'}
                        placeholder={'Enter your email...'}
                        onChangeText={value => setEmail(value)}
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        secureTextEntry={true}
                        label={'Password'}
                        placeholder={'******'}
                        onChangeText={value => setPassword(value)}
                    />
                </View>
                {error.length > 0 && <Text style={style.error}>{error}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button
                        isDisabled={
                            email.length < 5
                            || password.length < 8
                        }
                        title={'Login'}
                        onPress={async () => {
                            let user = await loginUser(email, password);
                            if (!user.status) {
                                setError(user.error);
                            } else {
                                setError('');
                                dispatch(logIn(user.data))
                            }
                        }}
                    />
                </View>
                <Pressable
                    style={style.registrationButton}
                    onPress={() => navigation.navigate(Route.Registration)}
                >
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;