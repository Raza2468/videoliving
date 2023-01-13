import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Dimensions, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import laungimage from '../assets/lounge.jpg';
import Footer from './Footer';
import { Audio, Video } from 'expo-av';
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'



export default function Devicescreen() {

  const [status, setStatus] = React.useState({});

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.miniHeader}>
        <Text style={styles.btnHeader} onPress={() => navigation.navigate('Gridscreen')}>Grid View</Text>
        <Text style={styles.btnHeader} ><Ionicons name="add" size={30} color="black" /></Text>
      </View>

      <View style={styles.main}>
        <View style={styles.setdisplayofpage}>
          <View style={styles.VidoContent}>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              // onFullscreenUpdate={setOrientation}
              isMuted
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: 105, width: 275, borderRadius: 8 }}
            />
          </View>
          <View style={styles.VidoContent}>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              isMuted
              // onFullscreenUpdate={setOrientation}
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: 105, width: 275, borderRadius: 8 }}
            />
          </View>
          <View style={styles.VidoContent}>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              isMuted
              // onFullscreenUpdate={setOrientation}
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: 105, width: 275, borderRadius: 8 }}
            />
          </View>


        </View>

        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 9,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  main: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 9,
    padding: 25,
  },
  headingcontainerdevice: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
  },
  VidoContent: {
    backgroundColor: "red",
    height: '30%',
    // padding: "3%",
    margin: "3%",
    borderTopColor: 'black',
    marginHorizontal: 20,
    borderRadius: 8,
    // paddingTop:'19%'
    // paddingBottom: '8%',

  },
  miniHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  btnHeader: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    minWidth: '25%',
    textAlign: 'center',
    color: 'skyBlue',
    shadowColor: 'gray',
    borderRadius: 10,
    elevation: 4,
    height: 39,
  }




})


// https://helpincoding.com/rotate-expo-video-player-in-full-screen-mode/