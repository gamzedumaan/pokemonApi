import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import { COLORS, FONTS } from '../../util/constants';

export default function BaseStats({ route }) {
  // console.log(route);
  const handleSearchApi = ({ item }) => {
    console.log(item);
    return (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.effort}>{item.stat.name.toUpperCase()}</Text>
          <Text style={styles.baseState_Text}>: {item.base_stat}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.textAndIcon}>
        <View>
          <Text style={styles.header_Text}>STATS</Text>
          <View
            style={{ borderBottomWidth: 1.5, borderBottomColor: COLORS.primary3, borderRadius: 10 }}
          />
        </View>
        <Ionicons name="stats-chart" size={24} color={COLORS.primary3} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <FlatList data={route.params.item.stats} renderItem={handleSearchApi} />
        <CircularProgress
          radius={60}
          value={route.params.item.stats[0].base_stat}
          textColor="#222"
          fontSize={20}
          valueSuffix="%"
          inActiveStrokeColor="#fff"
          activeStrokeColor="#fff"
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          duration={3000}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
  },
  textAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  header_Text: {
    fontSize: 18,
    color: FONTS.h1,
    fontFamily: 'mrt-shadows',
  },

  baseState_Text: {
    fontSize: 20,
    color: FONTS.h1,
    fontFamily: 'mrt-shadows',
  },

  effort: {
    fontSize: 20,
    color: FONTS.h1,
    marginRight: 20,
    fontFamily: 'mrt-shadows',
  },
});
