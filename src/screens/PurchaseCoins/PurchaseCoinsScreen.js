import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './PurchaseCoinsScreenStyle';
import PurchaseCoinsCard from '../../components/PurchaseCoinsCard/PurchaseCoinsCard';

const purchaseData = [
  {
    points: 100,
    price: 49,
  },
  {
    points: 500,
    price: 199,
  },
  {
    points: 1000,
    price: 399,
  },
  {
    points: 2000,
    price: 799,
  },
];

const PurchaseCoinsScreen = () => {
  const renderItem = ({item}) => (
    <PurchaseCoinsCard points={item.points} price={item.price} />
  );
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}></TouchableOpacity>
        <Text style={styles.headerTitleTextStyle}>
          Purchase Pawsibilities Coins
        </Text>
      </View>

      <View style={styles.notificationsBodyViewStyle}></View>

      <FlatList
        data={purchaseData}
        horizontal={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PurchaseCoinsScreen;
