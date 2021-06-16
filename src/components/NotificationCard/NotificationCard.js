import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Notification = ({title, status, id}) => {
  console.log(status);
  return (
    <TouchableOpacity>
      <View style={styles.topContainerStyle}>
        <View style={styles.borderLineStyle}></View>
        <View style={styles.containerStyle}>
          <View style={styles.notificationBodyViewStyle}>
            <Text style={styles.titleTextStyle}>TITLE: {title}</Text>
            <View style={styles.subtitleAndTimeViewStyle}>
              <Text style={styles.subTitleTextStyle}>
                STATUS: {status ? 'Completed' : 'Incomplete'}
              </Text>
              <Text style={styles.timeTextStyle}>Todo ID: {id}</Text>
            </View>
          </View>
        </View>
        <View style={styles.borderLineBottomStyle}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: hp('4'),
    backgroundColor: 'black',
    marginTop: hp('5.5'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  borderLineStyle: {
    height: wp('.05'),
    width: wp('90'),
    marginLeft: wp('6'),
    marginTop: hp('3.7'),
    backgroundColor: '#6C6C6C',
    position: 'absolute',
  },
  titleTextStyle: {
    color: 'white',
    fontSize: wp('5'),
  },
  subTitleTextStyle: {
    color: '#6C6C6C',
    fontSize: wp('3'),
    marginTop: hp('.8'),
  },
  imageStyle: {
    height: hp('5.5'),
    width: wp('12'),
    marginLeft: wp('-8'),
    marginRight: wp('-20'),
  },
  notificationBodyViewStyle: {
    marginRight: wp('0'),
    // backgroundColor: 'teal',
    width: wp('60'),
  },
  timeTextStyle: {
    color: '#AEAEAE',
    fontSize: wp('3'),
    marginTop: hp('.7'),
    marginLeft: wp('26'),
  },
  subtitleAndTimeViewStyle: {
    // backgroundColor: 'white',
    height: hp('3'),
    width: wp('70'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  borderLineBottomStyle: {
    height: wp('.05'),
    width: wp('90'),
    marginLeft: wp('6'),
    marginTop: hp('13.2'),
    backgroundColor: '#6C6C6C',
    position: 'absolute',
  },
});

export default Notification;
