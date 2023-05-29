import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { COLORS, FONTS } from '../../util/constants';

export default function Moves({ route }) {
  console.log(route.params.item.moves);

  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.item.moves}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, marginTop: 10 }}>
              <AntDesign name="arrowright" size={20} color={FONTS.h1}/>
              <Text style={styles.name_Text}>{item.move.name.toUpperCase()}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
  },
  name_Text: {
    fontSize: 18,
    color: FONTS.h1,
    margin: 10,
    padding: 5,
    fontFamily: 'mrt-shadows',
  },
});
