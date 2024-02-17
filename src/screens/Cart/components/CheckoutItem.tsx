import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'
import Entypo from 'react-native-vector-icons/Entypo';
import { Image } from 'react-native'

const CheckoutItem = () => {
  return (
    <View style={{display:'flex', flexDirection:'row', borderWidth:0.3, borderColor:'gray'}}>
    <View style={{width:"30%", padding:20}}><Image style={{width:'100%', height:120}}  source={require('../../../../assets/backgrounds/2.jpg')}/></View>
    <View style={{width:"70%", display:'flex', justifyContent:'center', gap:5, padding:20}}>
        <Text style={{color:colors.textColor, fontSize:18, fontWeight:'500'}}>
            Fortune Sun Lite Refined Sunflower Oil
        </Text>
        <Text style={{color:colors.tertiary}}>5 L</Text>
        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <Text style={{color:colors.textColor, fontSize:16, fontWeight:'600'}}>$12</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', borderColor:colors.primary, borderWidth:1, width:75, borderRadius:8, padding:5}}>
                <Entypo name="minus" size={25} color={colors.primary}/>
                <Text style={{color:colors.tertiary}}>1</Text>
                <Entypo name="plus" size={25} color={colors.primary}/>
            </View>
        </View>
    </View>
</View>
  )
}

export default CheckoutItem