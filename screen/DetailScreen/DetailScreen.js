import { Feather } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

/*Screen*/
import BaseStats from '../MyTabs/BaseStats';
import Moves from '../MyTabs/Moves';
import { COLORS, FONTS } from '../../util/constants';
const Tab = createMaterialTopTabNavigator();

export default function DetailScreen({ route }) {
  const [detailData, setDetailData] = useState(null);
  const handleData = () => {
    fetch(route.params.item.url)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
      });
  };
  useEffect(() => {
    handleData();
  }, []);
  console.log(route.params.item.url)
  const imageUrl =
    'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/' +
    route.params.item.name +
    '.png';
  const navigation = useNavigation();

  const MyTabs = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          initialParams={{ item: route.params.item }}
          name="BaseStats"
          component={BaseStats}
        />
        <Tab.Screen initialParams={{ item: route.params.item }} name="Moves" component={Moves} />
      </Tab.Navigator>
    );
  };
  if (!detailData) {
    return null;
  }
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary2 }} />
      <SafeAreaView style={styles.container}>
        <Feather
          onPress={() => navigation.goBack()}
          style={{ top: 5 }}
          name="arrow-left"
          size={26}
          color={COLORS.primary3}
        />
        <Text style={styles.text}>{route.params.item.name}</Text>
        <View style={styles.images_Container}>
          <Image style={styles.images} source={{ uri: imageUrl }} />
        </View>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarInactiveTintColor: COLORS.primary3,
              tabBarStyle: {
                backgroundColor: COLORS.primary2,
                borderColor: COLORS.primary2,
              },
            }}>
            <Tab.Screen
              initialParams={{ item: detailData }}
              name="BaseStats"
              component={BaseStats}
            />
            <Tab.Screen initialParams={{ item: detailData }} name="Moves" component={Moves} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
  },
  text: {
    color: FONTS.h1,
    fontSize: 35,
    fontWeight: '500',
    marginHorizontal: 40,
    fontFamily: 'mrt-shadows',
  },
  images_Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    resizeMode: 'contain',
    height: 250,
    width: '120%',
    marginTop: 30,
  },
});
