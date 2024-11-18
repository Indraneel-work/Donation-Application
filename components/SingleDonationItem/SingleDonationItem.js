import React from "react";
import style from "./style";
import PropTypes from "prop-types";
import { Image, Pressable, View } from "react-native";
import Header from "../Header/Header";
import Badge from "../Badge/Badge";

const SingleDonationItem = (props) =>{
    return(
        <Pressable onPress={()=> props.onPress()}>
            <View>
                <View style={style.badgeContainer}>
                    <Badge title={props.badgeTitle}/>
                </View>
                <Image resizeMode={'cover'} source={{uri: props.uri}} style={style.image}/>
            </View>
            <View style={style.donationInfoContainer}>
            <Header title={props.donationTitle} type={3} color={'#0A043C'} numberOfLines={1}/>
            <View style={style.priceContainer}>
            <Header title={'$' + props.price.toFixed().toString()} type={3} color={'#156CF7'}/>
            </View>
            </View>
        </Pressable>
    );
};
SingleDonationItem.defaultProps= {
    onPress:() =>{},
};

SingleDonationItem.proptypes = {
    donationItemId: PropTypes.number.isRequired,
    uri : PropTypes.string.isRequired,
    badgeTitle : PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    onPress: PropTypes.func,
};

export default SingleDonationItem;
