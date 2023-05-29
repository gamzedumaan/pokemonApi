import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
import { FONTS,COLORS } from '../util/constants';

export default function CardInformation({ onSelect, dataInformation }) {
  const imageUrl =
    'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/' +
    dataInformation.name +
    '.png';
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.card}>
        <View style={{ justifyContent: 'flex-start', marginTop: 10, marginLeft: 5 }}>
          <Text style={styles.name}>{dataInformation.name.toUpperCase()}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Image style={styles.images} source={{ uri: imageUrl }} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    minHeight: 140,
    width: '45%',
    borderRadius: 10,
    backgroundColor: COLORS.primary1,
    margin: 10,
  },
  images: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
    color: FONTS.h1,
    fontWeight: '600',
    fontFamily: 'mrt-shadows',
  },
});
