import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2.6'),
  },
  goBackIconStyle: {
    height: hp('3.5'),
    width: wp('7'),
    marginLeft: wp('3.5'),
    marginRight: wp('6'),
  },
  headerTitleTextStyle: {
    color: 'white',
    fontSize: wp('5'),
    fontWeight: 'bold',
    marginLeft: wp('30'),
  },
});

export default styles;
