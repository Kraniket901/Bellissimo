import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Feather';
import { colors } from '../../constants';

type Product = {
  name: string;
  bg: string;
  bor: string;
};

const productsData = [
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  {
    "name": "Bathroom Cleaner",
    "bg": "rgba(83, 177, 117, 0.1)",
    "bor": "rgba(83, 177, 117, 0.7)"
  },
  // Add more products as needed
];

const Card: React.FC<Product> = ({ name, bg, bor }) => {
  return (
    <View
      style={{
        backgroundColor: bg,
        width: 174,
        height: 200,
        marginTop: 15,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: bor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'red',
        }}></View>
      <Text
        style={{
          width: '80%',
          fontFamily: 'Gilroy',
          fontSize: 16,
          fontWeight: 'bold',
          fontStyle: 'normal',
          textAlign: 'center',
          color: '#181725',
        }}>
        {name}
      </Text>
    </View>
  );
};

const FindProduct = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: 20,
        }}>
        <Text
          style={{
            width: '100%',
            fontFamily: 'Gilroy',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            marginTop: 10,
            textAlign: 'center',
            color: '#181725',
          }}>
          Find Products
        </Text>

        <View
          style={{
            width: '90%',
            height: 50,
            backgroundColor: colors.secondary,
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <FIcon
            name="search"
            style={{
              fontSize: 25,
              color: colors.textColor,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
            }}>
            <TextInput
              placeholder="Search for area, street name ..."
              placeholderTextColor={colors.textColor}
              style={{ fontSize: 16, color: colors.textColor }}
            />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{
            width: 364,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
          style={{ height: '100%', marginTop: 24, marginBottom:60 }}>
          {productsData.map((product: Product, index: number) => (
            <Card key={index} {...product} />
          ))}
        </ScrollView>

        <View
          style={{
            width: '100%',
            height: 60,
            position: 'absolute',
            backgroundColor: '#ffe79e',
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 20,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 60,
              }}>
              Get Free Delivery
            </Text>
            <Text style={{ fontSize: 12, color: 'black' }}>
              on your first order with bellissimo
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 12, color: 'black' }}>1/2 items in Cart</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 24,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'black',
                  borderRadius: 18,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'white',
                  borderRadius: 18,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FindProduct;
