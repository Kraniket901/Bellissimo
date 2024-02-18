import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../../constants';
import FIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextMD from '../../../common/Text/TextMD';
import { TextInput } from 'react-native';

const BottomSheetComp = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text
          style={{color: colors.textColor, fontSize: 16, fontWeight: '600'}}>
          Select Location
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name="download" size={20} color={colors.primary} />
          <Text
            style={{
              color: colors.primary,
              marginLeft: 5,
              fontSize: 14,
              fontWeight: '600',
            }}>
            Import from Zomato
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          backgroundColor: colors.secondary,
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          gap: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          marginTop: 10,
          elevation: 5,
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
      <View
        style={{
          padding: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          elevation: 1,
          borderRadius: 20,
          marginHorizontal:20,
          marginVertical:20
        }}>
        <Entypo
          name="location"
          size={30}
          color={colors.primary}
          style={{margin: 5}}
        />
        <View>
          <Text style={{color: colors.primary, fontWeight: '700'}}>
            Use your current location
          </Text>
          <Text style={{color: colors.tertiary}}>
            East Lakshmi Nagar Nayachak
          </Text>
        </View>
        <AntDesign
          name="right"
          size={30}
          color={colors.primary}
          style={{margin: 5}}
        />
      </View>
      <Text style={{color: colors.tertiary, marginVertical:10, marginTop:0, marginHorizontal:20}}>Your saved addresses</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          marginHorizontal:20,
          borderRadius:15
        }}>
        <View
          style={{
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name="home" color={colors.primary} size={40} />
        </View>
        <View style={{width: '80%', padding:10, display:'flex', flexDirection:'column', gap:5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap:5
            }}>
            <Text style={{color: colors.textColor, fontWeight:'600'}}>Home</Text>
            <Text
              style={{
                color: colors.primary,
               //  fontweight: '900',
               fontWeight:'600',
                fontSize: 11,
                marginLeft: 5,
              }}>
              931.24 km away
            </Text>
          </View>
          <View>
            <Text style={{color: colors.tertiary, fontSize: 12, lineHeight:19}}>
              B64, Sector 37 Ashoka Enclaves near Siddharth Kataria, Ashoka
              Enclave Part 11, Sector 37, Faridabad, Saffron Public School{' '}
            </Text>
          </View>
          <Entypo
            name="forward"
            size={30}
            color={colors.primary}
            style={{margin: 5, borderWidth:0.8, borderColor:colors.primary, width:37, padding:2, borderRadius:100}}
          />
        </View>
      </View>
    </View>
       </TouchableWithoutFeedback>
  );
};

export default BottomSheetComp;
