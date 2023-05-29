import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CardInformation from '../../components/CardInformation';
import { COLORS } from '../../util/constants';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [pokeApi, setPokeAPİ] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [input, setInput] = useState(false);
  const [filter, setFilter] = useState([]);

  const handleData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setPokeAPİ(data.results);
        setFilter(data.results);
      });
  };
  useEffect(() => {
    handleData();
  }, []);
  const handleSearchApi = ({ item }) => {
    return (
      <CardInformation
        dataInformation={item}
        onSelect={() =>
          navigation.navigate('DetailScreen', {
            item,
          })
        }
      />
    );
  };

  /*filter*/
  const Search = (text) => {
    const filteredSearch = pokeApi?.filter(({ name }) => {
      const searchText = text.toLowerCase();
      const currentTitle = name.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setFilter(filteredSearch);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary3 }} />
      <SafeAreaView style={styles.container}>
        <FlatList numColumns={2} data={filter} renderItem={handleSearchApi} />
        <View style={styles.search_Container}>
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <FontAwesome name="search" size={34} color={COLORS.primary3} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
          {searchVisible && (
            <TextInput
              clearButtonMode="always"
              style={styles.input}
              placeholder="Search .."
              value={input}
              onChangeText={(text) => {
                setInput(text);
                Search(text);
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary3,
  },
  search_Container: {
    zIndex: 1,
    position: 'absolute',
    flex: 1,
    top: '90%',
    left: '85%',
    height: 55,
    width: 55,
    backgroundColor: COLORS.primary2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  input: {
    height: 45,
    width: '85%',
    backgroundColor: COLORS.input,
    borderRadius: 20,
    paddingLeft: 10,
  },
});
