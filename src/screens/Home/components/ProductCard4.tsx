import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';
const ProductCard4 = () => {
  return (
    <View
      style={{
        width: 150,
        marginHorizontal:15,
        height: '100%',
        flexDirection: 'column',
      }}>
      <Image style={{width:'100%', height:120}}  source={require('../../../../assets/backgrounds/2.jpg')}/>
      <View style={{backgroundColor:'white', width:70, borderRadius:6, marginVertical:7, padding:1}}><Text style={{color:colors.textColor, fontSize:12, textAlign:'center'}}>12 Mins</Text></View>
      <Text
        style={{
          fontSize: 16,
          color: colors.textColor,
          width: '100%',
          fontFamily: 'Gilroy-Bold',
          lineHeight:20,
          marginBottom:5
        }}>
        Percale 100% Cotton King Bedsheet
      </Text>
      <Text style={{color:colors.tertiary, marginBottom:5}}>1 set</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
          <View style={{display:'flex', flexDirection:'column'}}>
        <Text
          style={{
            fontSize: 16,
            color: colors.textColor,
            textAlign: 'center',
            fontFamily: 'Gilroy-Bold',
          }}>
          ₹120
        </Text>
        <Text style={{color:colors.tertiary, fontSize:12, textDecorationLine:'line-through'}}>₹150</Text>
          </View>
        <TouchableOpacity
          style={{
            borderColor: colors.primary,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            ADD
          </Text>
          <AntDIcon
            style={{
              fontSize: 16,
              color: colors.primary,
            }}
            name="shoppingcart"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard4;