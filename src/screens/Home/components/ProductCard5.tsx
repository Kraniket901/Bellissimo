import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ProductCardProps {
  item: {
    title: string;
    currentPrice: number;
    originalPrice: number;
    weight: number;
  };
}

const ProductCard5: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <View
      style={{
        width: 100,
        marginHorizontal: 15,
        flexDirection: 'column',
        margin: 10,
        position:'relative',
      }}>
        <AntDesign style={{
              fontSize: 18,
              fontWeight:'900',
              color: colors.secondary,
              position:'absolute',
              top:5,
              right:5,
              zIndex:1
            }}
            name="hearto"/>
      <Image style={{ width: '100%', height: 120 }} source={require('../../../../assets/backgrounds/2.jpg')} />
      <Text
        style={{
          fontSize: 14,
          color: colors.textColor,
          width: '100%',
          fontFamily: 'Gilroy-Bold',
          lineHeight: 17,
          marginVertical: 5
        }}>
        {item.title}
      </Text>
      <Text style={{ color: colors.tertiary, marginBottom: 5, fontSize: 11 }}>{item.weight} g</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.textColor,
              textAlign: 'center',
              fontFamily: 'Gilroy-Bold',
            }}>
            ₹{item.currentPrice}
          </Text>
          <Text style={{ color: colors.tertiary, fontSize: 12, textDecorationLine: 'line-through' }}>₹{item.originalPrice}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: colors.primary,
            borderWidth: 1,
            flexDirection: 'row',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'white',
              fontFamily: 'Gilroy-Bold',
              backgroundColor: colors.primary,
              paddingHorizontal: 10,
              borderRadius: 10,
              paddingVertical: 8,
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard5;