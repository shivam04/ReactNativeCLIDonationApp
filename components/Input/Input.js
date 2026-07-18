import { Text, TextInput, View } from "react-native";
import style from "./style";
import { useState } from "react";

const Input = props => {
    const [value, setValue] = useState('');
    return (
        <View>
            <Text style={style.label}>{props.label}</Text>
            <TextInput
                placeholder={props.placeholder ? props.placeholder : null}
                style={style.input}
                value={value}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                onChangeText={val => {
                    setValue(val);
                    props.onChangeText(val);
                }}
            />
        </View>
    );
};

export default Input;