import { Authenticator, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp } from 'aws-amplify-react-native';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Authenticator
            authState="signUp"
            hideDefault={true}
            usernameAttributes="email"
          >
            <SignIn signedOutMessage=" " />
            <SignUp
              signedOutMessage=" "
              signUpConfig={{
                hideAllDefaults: true,
              }}
            />
            <ConfirmSignUp />

            <ForgotPassword />
            <RequireNewPassword />
          </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
