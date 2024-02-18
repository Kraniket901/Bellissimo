import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants';
import ProductCard5 from '../Home/components/ProductCard5';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

type ProductCategoryItemProps = {
  value?: string;
  onPress: () => void;
  isSelected: boolean;
};

const ProductCategories: React.FC = () => {
  const categoryItems = [
    { value: 'Fresh Vegetables' },
    { value: 'Fresh Fruits' },
    { value: 'Seasonal' },
    { value: 'Exotics' },
    { value: 'Leafies & Herbs' },
    { value: 'Flowers & Leaves' },
    { value: 'Clean Vegetables' },
    { value: 'Clean Fruits' },
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

  const [selectedItem, setSelectedItem] = useState<string | null>(
    categoryItems.length > 0 ? categoryItems[0].value : null
  );

  const handleItemClick = (value: string) => {
    setSelectedItem(value);
  };

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
          style={{
            color: colors.textColor,
            fontSize: 18,
            fontWeight: '600',
          }}>
          {selectedItem || 'Vegetables & Fruits'}
        </Text>
        <View></View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {/* Left side (30%) */}
        <ScrollView style={{ width: '30%', marginBottom:100 }}>
          {categoryItems.map((item, index) => (
            <ProductCategoryItem
              key={index}
              value={item.value}
              onPress={() => handleItemClick(item.value)}
              isSelected={selectedItem === item.value}
            />
          ))}
        </ScrollView>

        {/* Right side (70%) */}
        <ScrollView style={{ width: '70%', marginBottom:100 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {products.map((item, index) => (
              <ProductCard5 key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const ProductCategoryItem: React.FC<ProductCategoryItemProps> = ({
  value,
  onPress,
  isSelected,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        padding: 10,
        backgroundColor: isSelected ? 'lightgray' : 'transparent',
        borderRightWidth: isSelected ? 4 : 0,
        borderRightColor: colors.primary
      }}>
      <Image
        style={{
          width: '80%',
          height: 80,
          alignSelf: 'center',
          borderRadius: 15,
        }}
        source={require('../../../assets/backgrounds/2.jpg')}
      />
      <Text
        style={{
          color: colors.textColor,
          textAlign: 'center',
          marginVertical: 5,
        }}>
        {value}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ProductCategories;
