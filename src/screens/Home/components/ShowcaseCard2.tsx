import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import ProductCard2 from './ProductCard2';
import {colors} from '../../../constants';
import {FlashList} from '@shopify/flash-list';
import {Product} from '../../../zustand/useHome';

type ShowcaseCard2Props = {
  title: string;
  subtitle: string;
  titleImage: string;
  data: Product[];
};

const ShowcaseCard2: React.FC<ShowcaseCard2Props> = ({
  data,
  subtitle,
  titleImage,
  title,
}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 18,
        marginBottom: 10,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: colors.textColor,
                marginTop: 10,
                fontFamily: 'Gilroy-Black',
                textAlign: 'justify',
              }}>
              {title}
            </Text>
            <Image
              source={{
                uri: titleImage,
              }}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: colors.textColor,
              marginBottom: 10,
              fontFamily: 'Gilroy-Semibold',
            }}>
            {subtitle}
          </Text>
        </View>
      </View>
      <FlashList
        horizontal={true}
        data={data}
        estimatedItemSize={119}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => {
          return (
            <ProductCard2 {...item} />
          );
        }}
      />
    </View>
  );
};

export default ShowcaseCard2;
