import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  GestureResponderEvent,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import SideItem from './component/SideItem';
import { colors } from '../../constants';
import BottomSheet from '@gorhom/bottom-sheet';
import ButtonSM from '../../common/Button/ButtonSM';
import { Button } from '@rneui/base';
import BottomSheetComp from '../Cart/components/BottomSheetComp';

const AccountSidebar = () => {
  const navigation = useNavigation<any>();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [isPressed, setIsPressed] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false); // State variable to control bottom sheet visibility

  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['1%', '55%', '100%'], []); // Adjusted snapPoints

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges:', index);
  }, []);

  const user = {
    name: 'Siddhant',
    email: 'Imshuvo97@gmail.com',
    editColor: 'red',
  };

  const menuItemsUp = [
    {
      title: 'Orders',
      icon: <Feather name="shopping-bag" size={25} color="#333" />,
      onPress: () => {} // Add onPress function if needed
    },
    {
      title: 'My Details',
      icon: <AntDesign name="idcard" size={25} color="#333" />,
      onPress: () => {} // Add onPress function if needed
    },
    {
      title: 'Delivery Address',
      icon: <Entypo name="location-pin" size={25} color="#333" />,
      onPress: () => {setIsBottomSheetOpen(!isBottomSheetOpen);}
    },
  ];
  
  
  const menuItemsDown = [
    {
      title: 'Help',
      icon: <Feather name="help-circle" size={25} color="#333" />,
    },
    {
      title: 'About',
      icon: (
        <MaterialCommunityIcons name="account-details" size={25} color="#333" />
      ),
    },
  ];
  
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent:'space-between',
          height:"100%"
        }}>
                  <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          <View>
            <View
              style={{
                backgroundColor: 'black',
                height: 50,
                width: 50,
                borderRadius: 10,
                margin: 20,
              }}></View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center' }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                  {user.name}
                </Text>
              </View>
              <AntDesign name="edit" size={25} color={colors.primary} />
            </View>
            <View>
              <Text style={{ color: 'black', marginTop: 2 }}>{user.email}</Text>
            </View>
          </View>
        </View>
        {menuItemsUp.map((item, index) => (
   <SideItem key={index} title={item.title} onPress={item.onPress} isPressed={isPressed}>
   {item.icon}
 </SideItem>
))}
        </View>
        <View>
          {menuItemsDown.map((item, index) => (
            <SideItem key={index} title={item.title}>
              {item.icon}
            </SideItem>
          ))}
          <TouchableHighlight
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor={isPressed ? 'gray' : 'silver'}
            style={{
              flexDirection: 'row',
              padding: 20,
              borderRadius: 20,
              margin: 20,
              backgroundColor: isPressed ? 'gray' : 'black',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="logout"
                size={25}
                color={colors.primary}
              />
           
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginLeft: 10
                }}>
                Log Out
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <BottomSheet
  ref={bottomSheetRef}
  index={isBottomSheetOpen ? 1 : 0} // Set index based on isBottomSheetOpen state
  snapPoints={snapPoints}
  onChange={handleSheetChanges} // Pass onChange handler
>
  <BottomSheetComp/>
</BottomSheet>
    </>
  );
};

export default AccountSidebar;