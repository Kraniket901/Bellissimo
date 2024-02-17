import {View, Text, Image} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import {colors} from '../../../constants';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard4 from './ProductCard4';

type ShowcaseCard1Props = {
  title: string;
  subtitle: string;
  titleImage: string;
  background: string;
  data: any[];
};

const ShowcaseCard4: React.FC<ShowcaseCard1Props> = ({
  background,
  data,
  subtitle,
  title,
  titleImage,
}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 20,
        marginBottom: 10,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row', width: '100%', paddingHorizontal:15}}>
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
          backgroundColor: colors.secondary,
          width: '100%',
          height: 350,
          paddingTop:20,
          // elevation: 10,
          // borderRadius: 4,
        }}>
        <FlatList
          contentContainerStyle={{}}
          keyExtractor={(_, i) => `${i}`}
          style={{
            width: '100%',
            borderRadius: 18,
          }}
          horizontal={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={() => {
            return <ProductCard4 />;
          }}
        />
      </View>
    </View>
  );
};

export default ShowcaseCard4;