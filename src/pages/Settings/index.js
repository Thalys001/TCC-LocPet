import React, { Fragment, Component, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export function Settings() {
  const [avatar, setAvatar] = useState()
  const navigation = useNavigation()
  const [image, setImage] = useState(null)


  async function handleChangeAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1,
    });

    if(result.canceled){
      return;
    }

    if(result.assets){
      setAvatar(result.assets);
    }
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}> 
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
          >
          <Text style={styles.message}>Perfil</Text>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Mariana</Text>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo2.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
          />
          <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      ></Animatable.View>
          <View style={styles.ImageSections}>
           
          { !!avatar && <Image source={{uri:avatar}}/> } 
          
          <TouchableOpacity
          style={styles.buttom}
          onPress={handleChangeAvatar}
        >
          <Text style={styles.buttomText}>Escolher foto</Text>
        </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ flex: 2 }} />}
          </View>
        </View>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#7B68EE',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  containerHeader: {
    marginTop: '10%',
    marginBottom: '5%',
    paddingStart: '5%',
    alignItems: 'center',
    justifyContent: 'center'
    },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    display: 'none',
    fontSize: 20,
    marginTop: 11
  },
  input: {
    padding: 10,
    paddingStart: 20,
    width: '100%',
    height: 50,
    marginTop: 12,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center'
  },
  buttom: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegister: {
    marginTop: 50,
    alignSelf: 'center'
  },
  RegisterText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'
  }
});


