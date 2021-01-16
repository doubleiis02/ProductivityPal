import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";

export default function LoginRegister(props){
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [verifyPassword, onChangeVerify] = React.useState("");

    const {login} = useContext(AuthContext);
    function handleRegister(){
        if (!(password == verifyPassword)){
            PasswordError();
            return;
        }
        register(email,password);
        



    }

    function handleLogin(){
        login(email,password);
    }
    function PasswordError(){
            Alert.alert(
                "Error Creating Account",
                "Passwords Don't Match",
                [
                    {
                    text: "Ok",
                    onPress: () =>console.log("OK")
                    }
                ]);
        }
            
    return (
        <View style = {styles.container}>
            <Text>Log In or Register to ProductivityPal</Text>
            <View style = {styles.register}>
                <Text>Email:</Text>
                <TextInput
                style = {styles.registerInput}
                onChangeText= {text=> onChangeEmail(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                autoCompleteType ="email"
                value ={email}
                />
            </View>
            

            <View style = {styles.register}>
                <Text>Password:</Text>
                <TextInput
                style = {styles.registerInput}
                onChangeText= {text=> onChangePassword(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                autoCompleteType="password"
                secureTextEntry = {true}
                value ={password}
                />
            </View>

            <View style = {styles.register}>
                <Text>Verify Password:</Text>
                <TextInput
                style = {styles.registerInput}
                onChangeText= {text=> onChangeVerify(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                autoCompleteType="password"
                secureTextEntry = {true}
                value ={verifyPassword}
                />
            </View>


            <Button 
            title = "Sign in with Email"
            onPress = {handleLogin}/>


            <Button 
            title = "Register with Email"
            onPress = {handleRegister}/>

            <Button title = "Back to Home Screen!"
            onPress={() => props.navigation.navigate("Home")}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column"
    },

    register: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    }
  });

