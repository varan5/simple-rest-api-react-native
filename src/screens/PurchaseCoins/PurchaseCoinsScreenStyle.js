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
    marginBottom: hp('2'),
  },
  goBackIconStyle: {
    height: hp('3'),
    width: wp('6'),
    marginLeft: wp('3.5'),
    marginRight: wp('6'),
  },
  headerTitleTextStyle: {
    color: 'white',
    fontSize: wp('4.4'),
    fontWeight: 'bold',
  },
});

export default styles;
