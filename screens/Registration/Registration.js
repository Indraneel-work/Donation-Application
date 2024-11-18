import React, {useState} from 'react';
import {style} from './style';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setsuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <View style={style.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={[globalStyle.marginBottom24]}>
          <Header type={1} title={'Welcome to Donation App '} />
        </View>
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your Full Name'}
            onChangeText={value => setFullName(value)}
          />
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
        </View>
        {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}
        {success.length > 0 && (
          <Text style={style.successMessage}>{success}</Text>
        )}
        <View style={[globalStyle.marginBottom24]}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            title={'Register'}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setError(error);
              } else {
                setError('');
                setsuccess('You have registered');
              }
              setTimeout(() => navigation.goBack(), 3000);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
