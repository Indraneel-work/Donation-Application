import React from 'react';
import {style} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItemScreen = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  // const dispatch = useDispatch();

// dispatch(donationItemInformation);
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.scrollViewContainer}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{uri: donationItemInformation.image}} style={style.donationItemImage}/>
        <View style={style.badgeContainer}>
        <Badge title={categoryInformation.name}/>
        </View>
        <Header type={1} title={donationItemInformation.name}/>
        <Text style={style.textDescription}>{donationItemInformation.description}</Text>
      </ScrollView>
      <View style={style.donateButtonContainer}>
        <Button title={'Donate'}/>
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
