import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Balance({navigation, summed}) {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('ChildView')}>
      <View>
        <Text style={styles.balanceTitle}>Total Balance</Text>
      </View>
      <View>
        <Text style={styles.balance}>£ {summed}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    margin: 10,
    height: 200,
    marginTop: 30,
    backgroundColor: '#1E2234',
  },
  balanceTitle: {
    color: 'white',
    padding: 10,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
  },
  balance: {
    marginBottom: 50,
    // marginTop: 20,
    marginLeft: 20,
    fontSize: 40,
    fontFamily: 'Raleway-Regular',
    color: 'white',
  },
});

// justifyContent: 'center',
// alignItems: 'center'
