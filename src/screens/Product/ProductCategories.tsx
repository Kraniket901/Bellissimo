import React from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from '../../constants';
import ProductCard5 from '../Home/components/ProductCard5';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

type ProductCategoryItemProps = {
  value?: string;
};

const ProductCategories: React.FC = () => {
  const categoryItems = [
    { value: 'Fresh Vegetables' },
    { value: 'Fresh Fruits' },
    { value: 'Seasonal' },
    { value: 'Exotics' },
    { value: 'Leafies & Herbs' },
    { value: 'Flowers & Leaves' },
  ];

  const products = [
    { 
      title: "Percale 100% Cotton King Bedsheet",
      currentPrice: 120,
      originalPrice: 150,
      weight: 500
    },  
    { 
      title: "Cotton Queen Bedsheet",
      currentPrice: 100,
      originalPrice: 130,
      weight: 450
    },  
    { 
      title: "Silk Pillowcase Set",
      currentPrice: 80,
      originalPrice: 100,
      weight: 200
    },  
    { 
      title: "Microfiber Comforter",
      currentPrice: 200,
      originalPrice: 250,
      weight: 800
    },  
    { 
      title: "Bamboo Towel Set",
      currentPrice: 150,
      originalPrice: 180,
      weight: 700
    },  
    { 
      title: "Linen Tablecloth",
      currentPrice: 90,
      originalPrice: 110,
      weight: 300
    },  
    { 
      title: "Wool Blanket",
      currentPrice: 170,
      originalPrice: 200,
      weight: 600
    }
  ];
  

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Feather name="arrow-left" size={30} color={colors.tertiary} />
        <Text
          style={{ color: colors.textColor, fontSize: 18, fontWeight: '600' }}>
          Vegetables & Fruits
        </Text>
        <View></View>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ width: '30%', flexDirection: 'column' }}>
          {categoryItems.map((item, index) => (
            <ProductCategoryItem key={index} value={item.value} />
          ))}
        </View>

        <View style={{ width: '70%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {products.map((item, index) => (
             <ProductCard5 key={index} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
}

const ProductCategoryItem: React.FC<ProductCategoryItemProps> = (props) => (
  <View style={{ padding: 10 }}>
    <Image style={{ width: '80%', height: 80, alignSelf: 'center', borderRadius:15 }} source={require('../../../assets/backgrounds/2.jpg')} />
    <Text style={{ color: colors.textColor, textAlign: 'center', marginVertical: 5 }}>{props.value}</Text>
  </View>
);

export default ProductCategories;
