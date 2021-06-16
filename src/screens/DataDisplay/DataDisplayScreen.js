import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './DataDisplayScreenStyles';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import axios from 'axios';

const notificationData = [
  {
    key: 1,
    title: 'Notification title 1',
    subtitle: 'This is the subtitle 1',
    time: '1 hour ago',
    // image: require('../../assets/images/notification-1.png'),
  },
  {
    key: 2,
    title: 'Notification title 2',
    subtitle: 'This is the subtitle 2',
    time: '2 hours ago',
    // image: require('../../assets/images/notification-2.png'),
  },
  {
    key: 3,
    title: 'Notification title 3',
    subtitle: 'This is the subtitle 3',
    time: '3 hours ago',
    // image: require('../../assets/images/notification-3.png'),
  },
  {
    key: 4,
    title: 'Notification title 4',
    subtitle: 'This is the subtitle 4',
    time: '4 hours ago',
    // image: require('../../assets/images/notification-4.png'),
  },
  {
    key: 5,
    title: 'Notification title 5',
    subtitle: 'This is the subtitle 5',
    time: '5 hours ago',
    // image: require('../../assets/images/notification-5.png'),
  },
];

const DataDisplayScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        setTodos([...todos, response.data]);
        console.log('My todo', todos);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  const renderItem = ({item}) => (
    <NotificationCard
      title={item.title}
      subtitle={item.completed}
      time={item.id}
    />
  );
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}></TouchableOpacity>
        <Text style={styles.headerTitleTextStyle}>NOTIFICATIONS</Text>
      </View>

      <View style={styles.notificationsBodyViewStyle}></View>

      <FlatList data={todos} horizontal={false} renderItem={renderItem} />
    </View>
  );
};

export default DataDisplayScreen;
