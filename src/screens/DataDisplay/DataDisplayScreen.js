import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './DataDisplayScreenStyles';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import axios from 'axios';

const DataDisplayScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        setTodos(response.data);
        console.log('My todo', todos);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  const renderItem = ({item}) => (
    <NotificationCard title={item.title} status={item.completed} id={item.id} />
  );
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}></TouchableOpacity>
        <Text style={styles.headerTitleTextStyle}>TODO LIST APP</Text>
      </View>

      <View style={styles.notificationsBodyViewStyle}></View>

      <FlatList data={todos} horizontal={false} renderItem={renderItem} />
    </View>
  );
};

export default DataDisplayScreen;
