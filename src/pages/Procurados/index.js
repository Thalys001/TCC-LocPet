import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import ButtonAvistados from '../../components/ButtonAvistados'

import Adocao from '../Adocao'


const statusBarHeight = StatusBar.currentHeight

export default function Procurados() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ButtonAvistados />
      <ScrollView>
        <View>
      <Adocao/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '95%',
    height: 280,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(1, 31, 38, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttom: {
    backgroundColor: '#000',
    width: '20%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

// import React, {useState, useEffect} from 'react';

// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput,
// } from 'react-native';

// import ButtonAvistados from '../../components/ButtonAvistados';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [masterData, setMasterData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredData(responseJson);
//         setMasterData(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilter = (text) => {
//     if (text) {
//       const newData = masterData.filter(
//         function (item) {
//           if (item.title) {
//             const itemData = item.title.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//           }
//       });
//       setFilteredData(newData);
//       setSearch(text);
//     } else {
//       setFilteredData(masterData);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({item}) => {
//     return (
//       <Text
//         style={styles.itemStyle}
//         onPress={() => getItem(item)}>
//         {item.id}
//         {' - '}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const getItem = (item) => {
//     alert('Id : ' + item.id + '\n\nTarefa : ' + item.title + '\n\nCompletada: ' + item.completed);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ButtonAvistados/>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputStyle}
//           onChangeText={(text) => searchFilter(text)}
//           value={search}
//           underlineColorAndroid="transparent"
//           placeholder="Procure Aqui"
//         />
//         <FlatList
//           data={filteredData}
//           keyExtractor={item => item.id}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     backgroundColor: '#0066CC',
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 10,
//     color: 'white',
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: '#0066CC',
//   },
// });

// export default App;
