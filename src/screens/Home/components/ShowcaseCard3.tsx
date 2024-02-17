import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import ProductCard3 from './ProductCard3';
import {Product} from '../../../zustand/useHome';
import {FlashList} from '@shopify/flash-list';
type ShowcaseCard3Props = {
  title: string;
  titleImage: string;
  subtitle: string;
  data: Product[];
};

const ShowcaseCard3: React.FC<ShowcaseCard3Props> = ({
  subtitle,
  title,
  titleImage,
  data,
}) => {
  return (
    <View
      style={{
        borderRadius: 20,
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
      <View
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 18,
        }}>
        <FlashList
          keyExtractor={(_, i) => `${i}`}
          horizontal={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <ProductCard3 {...item} />;
          }}
          estimatedItemSize={275}
        />
      </View>
    </View>
  );
};

export default ShowcaseCard3;
