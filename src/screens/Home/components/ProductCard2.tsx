import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {Product} from '../../../zustand/useHome';

type ProductCard2Props = Product;

const ProductCard2: React.FC<ProductCard2Props> = product => {
  return (
    <View
      style={{
        width: 120,
        flexDirection: 'column',
        marginHorizontal: 5,
      }}>
      <View
        style={{
          backgroundColor: colors.secondary,
          width: '100%',
          height: 120,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: product?.images[0],
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
            borderRadius: 18 - 6,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: colors.textColor,
          width: '100%',
          fontFamily: 'Gilroy-Bold',
        }}>
        {product?.name.length > 20
          ? product?.name.slice(0, 30) + '...'
          : product?.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.textColor,
            textAlign: 'center',
            fontFamily: 'Gilroy-Bold',
          }}>
          ₹
          {product?.discount?.newAmount
            ? product?.discount?.newAmount
            : product?.price}
        </Text>
        <TouchableOpacity
          style={{
            borderColor: colors.primary,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 18,
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

export default ProductCard2;
