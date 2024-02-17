import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import EIcon from 'react-native-vector-icons/Entypo';
import {Product} from '../../../zustand/useHome';

type ProductCard3Props = Product;

const ProductCard3: React.FC<ProductCard3Props> = product => {
  return (
    <View
      style={{
        flexDirection: 'row',
        maxWidth: 300,
      }}>
      <View
        style={{
          backgroundColor: colors.secondary,
          height: '100%',
          width: 100,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={{
          uri: product.images[0],
        }} style={{
          width: 95,
          height: 95,
          resizeMode: 'contain',
          borderRadius: 18 -6,
        }} />
      </View>
      <View
        style={{
          maxWidth: 200,
          height: '100%',
          flexDirection: 'column',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: colors.textColor,
            width: '100%',
            marginBottom: 2,
            fontFamily: 'Gilroy-Bold',
          }}>
          {product.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.textColor,
            width: '100%',
            marginBottom: 2,
            fontFamily: 'Gilroy-Medium',
          }}>
          {product.size.amount} {product.size.unit}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}>
            <EIcon
              name="price-tag"
              style={{
                fontSize: 14,
                color: colors.textColor,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
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
                ₹{product?.discount?.newAmount ?? product.price}
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 30,
                  height: 'auto',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textColor,
                    textAlign: 'center',
                    fontFamily: 'Gilroy-Medium',
                  }}>
                  {product?.discount?.percentage}%
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textColor,
                    textAlign: 'center',
                    textDecorationLine: 'line-through',
                    fontFamily: 'Gilroy-Bold',
                  }}>
                  ₹{product?.price}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              borderColor: colors.primary,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EIcon
              name="plus"
              style={{
                fontSize: 25,
                color: colors.primary,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard3;
