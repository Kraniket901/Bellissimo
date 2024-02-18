import {View, Text} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {colors} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ShowcaseCard4 from '../Home/components/ShowcaseCard4';
import CheckoutItem from './components/CheckoutItem';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type CheckoutProps = {};

const Checkout: React.FunctionComponent<CheckoutProps> = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaProvider>
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Feather name="arrow-left" size={30} color={colors.tertiary} />
        <Text
          style={{color: colors.textColor, fontSize: 18, fontWeight: '600'}}>
          Checkout
        </Text>
        <View></View>
      </View>
      <CheckoutItem/>
      <CheckoutItem/>
      <ShowcaseCard4
                background="https://gkh-images.s3.ap-south-1.amazonaws.com/2.jpg"
                title="Newly Launched"
                subtitle="Explore all of the freshly added items"
                data={Array.from({length: 9})}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-sale-10241364-8330401.png"
              />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingTop:20
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Feather name="percent" size={22} color={colors.textColor} />
          <Text style={{color: colors.textColor, fontSize: 16, marginLeft: 10, fontWeight:'500'}}>
            APPLY COUPON
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={30} color={colors.tertiary} />
      </View>
      <View
        style={{
          width: '100%',
          borderTopWidth: 0.6,
          borderColor: 'gray',
          alignItems: 'center',
        }}></View>
      <View style={{padding: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{color: colors.textColor}}>Item Total</Text>
          <Text style={{color: colors.textColor}}>$24</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{color: colors.textColor}}>Discount</Text>
          <Text style={{color: colors.textColor}}>$2</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{color: colors.primary, fontWeight:'600'}}>Delivery Fee</Text>
          <Text style={{color: colors.primary, fontWeight:'600'}}>Free</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderTopWidth: 0.6,
          borderColor: 'gray',
          alignItems: 'center',
        }}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{color: colors.textColor, fontWeight: '900'}}>
          Item Total
        </Text>
        <Text style={{color: colors.textColor, fontWeight: '900'}}>$24</Text>
      </View>
      <View
        style={{
          padding: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AntDesign
          name="home"
          size={30}
          color={colors.primary}
          style={{margin: 5}}
        />
        <View>
          <Text style={{color: colors.textColor}}>Delivering to Home</Text>
          <Text style={{color: colors.tertiary}}>
            6391 Elgin St. Canva, Delaware ...
          </Text>
        </View>
        <Text style={{color: colors.primary, paddingVertical: 10, fontWeight:'600'}}>Change</Text>
      </View>
      <View
        style={{
          width: '100%',
          borderTopWidth: 0.6,
          borderColor: 'gray',
          alignItems: 'center',
        }}></View>

        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:20}}>
            <View>
                <Text style={{color:colors.tertiary, fontSize:12}}>Pay Using ^</Text>
                <Text style={{color:colors.textColor, fontWeight:"600"}}>Visa 6589</Text>
            </View>
            <View style={{backgroundColor:colors.primary, display:'flex', flexDirection:'row', alignItems:'center', width:250, borderRadius:10, justifyContent:'space-evenly', paddingVertical:8}}>
                <Text style={{fontWeight:"900"}}>$22</Text>
                <Text style={{fontWeight:"900"}}>|</Text>
                <Text style={{fontWeight:"600"}}>Place Order</Text>
                <AntDesign
          name="arrowright"
          size={25}
          color='white'
          style={{margin: 5}}
        />
            </View>
        </View>
        <BottomSheet modalProps={{}} isVisible={isVisible}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
        <Button  onPress={() => setIsVisible(true)} style={{backgroundColor:'black'}}>Click Me</Button>
    </ScrollView>
    </SafeAreaProvider>
  );
};

export default Checkout;
