import React, {useState} from 'react';
import {style} from './style';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Registration from '../Registration/Registration';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn, resetToInitialState } from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={[globalStyle.marginBottom24]}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label={'Password'}
            secureTextEntry={true}
            placeholder={'*******'}
            onChangeText={value => setPassword(value)}
          />
          {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}
        </View>
        <View style={[globalStyle.marginBottom24]}>
          <Button
            onPress={async () => {
              const user = loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'Login'}
            isDisabled={email.length <= 5 || password.length <= 8}
          />
        </View>
        <Pressable
          style={style.registrationButtonContainer}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header type={3} title={"Don't have an account"} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
