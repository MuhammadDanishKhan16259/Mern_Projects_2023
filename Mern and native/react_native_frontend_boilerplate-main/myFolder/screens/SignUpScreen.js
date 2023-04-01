import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import SMButton from '../components/SMButton';
import SMInput from '../components/SMInput';
import axios from 'axios';
import DBURL from '../../config';

const SignUpScreen = ({navigation}) => {
  let [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  // create user
  const createUser = async () => {
    if (userData.email && userData.password) {
      try {
        await axios({
          url: `${DBURL}/signUp`,
          method: 'post',
          data: userData,
        })
          .then(res => {
            if (res.data.status) {
              ToastAndroid.show('Successfully Sign Up', ToastAndroid.SHORT);
              navigation.navigate('TabNavigation');
            } else {
              ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
            }
          })
          .catch(err => {
            ToastAndroid.show(err, ToastAndroid.SHORT);
          });
      } catch (err) {
        ToastAndroid.show(err, ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please fill all field', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
      {/* top part */}
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color={'#000'} />
        </TouchableOpacity>
      </View>

      {/* text part */}
      <View style={{marginVertical: 20}}>
        {/* logo */}
        <Text style={{fontSize: 30, color: '#000', fontWeight: 'bold'}}>
          Sign Up
        </Text>
        <Text style={{fontSize: 16, color: '#333'}}>
          create an account for access this application.
        </Text>
      </View>

      {/* form */}
      <View style={{marginVertical: 20}}>
        <SMInput
          textStyle={{width: '100%'}}
          style={{width: '100%', backgroundColor: '#eee'}}
          value={'Email'}
          icon={<Icon name="mail" size={25} color="#000" />}
          onChangeText={e => setUserData({...userData, email: e})}
        />
        <SMInput
          textStyle={{width: '100%'}}
          value={'Password'}
          style={{width: '100%', backgroundColor: '#eee'}}
          icon={<Icon name="lock" size={25} color="#000" />}
          password={true}
          onChangeText={e => setUserData({...userData, password: e})}
        />

        {/* already have an account */}
        <View>
          <Text style={{fontSize: 16, color: '#333'}}>
            Already have an account?{' '}
            <Text
              style={{fontWeight: 'bold'}}
              onPress={() => navigation.navigate('LoginScreen')}>
              Login
            </Text>
          </Text>
        </View>
      </View>

      {/* button */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SMButton value={'Sing Up'} onClick={createUser} />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
