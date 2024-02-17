import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import {Image} from 'react-native';
import {useHome} from '../../../zustand/useHome';

const Category = () => {
  const {categories} = useHome();
  return (
    <View
      style={{
        width: '100%',
        height: 380,
        marginTop: 10,
        borderRadius: 18,
        marginBottom: 10,
      }}>
      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/down-arrow-8532770-6715262.gif',
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: colors.textColor,
            marginBottom: 10,
            fontFamily: 'Gilroy-Black',
          }}>
          TOP CATEGORIES
        </Text>
        <Image
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/down-arrow-8532770-6715262.gif',
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <FlatList
        data={categories}
        keyExtractor={(_, i) => `${i}`}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        renderItem={({item: {icon, name}}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.secondary,
                height: 100,
                width: 100,
                marginBottom: 10,
                borderRadius: 14,
                padding: 10,
                elevation: 1,
              }}>
              <Image
                source={{
                  uri: icon,
                }}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
              <Text
                style={{color: colors.textColor, fontFamily: 'Gilroy-Bold', fontSize:12, textAlign:'center'}}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        }}
        numColumns={3}
      />
    </View>
  );
};

export default Category;
