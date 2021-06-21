import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './PurchaseCoinsScreenStyle';
import PurchaseCoinsCard from '../../components/PurchaseCoinsCard/PurchaseCoinsCard';

const purchaseData = [
  {
    key: 1,
    points: 100,
    price: 49,
  },
  {
    key: 2,
    points: 500,
    price: 199,
  },
  {
    key: 3,
    points: 1000,
    price: 399,
  },
  {
    key: 4,
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
        <TouchableOpacity>
          <Image
            style={styles.goBackIconStyle}
            source={require('../../../assets/images/left-arrow.png')}
          />
        </TouchableOpacity>
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
