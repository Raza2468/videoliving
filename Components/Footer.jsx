import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function Footer() {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.containerfooter}>

        <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('Homescreen')} />
        <AntDesign name="videocamera" size={24} color="black" onPress={() => navigation.navigate('Devicescreen')} />
        <Feather name="bell" size={24} color="black" onPress={() => navigation.navigate('Notification')} />
        <AntDesign name="user" size={24} color="black" onPress={() => navigation.navigate('SettingScreen')} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerfooter: {
    // backgroundColor: 'green',
    // display: "flex",
    justifyContent: 'space-evenly',
    alignItems: "center",
    height: 80,
    flexDirection: 'row',
    borderTopColor: 'black',
    elevation: 3,
    shadowColor: 'gray',
    paddingBottom: '8%',
    // position: 'absolute', left: 0, right: 0, bottom: 0
  }
  ,
  footerchild: {
    color: 'black'
  },
});
