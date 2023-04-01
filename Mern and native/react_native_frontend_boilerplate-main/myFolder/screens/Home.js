import {Alert, SafeAreaView, Text, View} from 'react-native';
// component
import SMButton from '../components/SMButton';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import SMInput from '../components/SMInput';
import SMModal from '../components/SMModal';
// import SMDropdown from '../components/SMDropdown';

function Home({navigation}) {
  // const asd = _ => {
  //   console.log(_);
  // };
  return (
    <SafeAreaView>
      {/* <Text>Welcome</Text> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}></View>
      {/* <SMButton
        value={'Welcome'}
        Style={{backgroundColor: 'purple'}}
        color={'#fff'}
        size={20}
      /> */}
      <SMButton
        value={'Submit'}
        style={{width: '90%', height: 55, backgroundColor: '#000'}}
        color={'#fff'}
        size={25}
        onClick={() => navigation.navigate('Home1')}
        fontWeight={'normal'}
        icon={<Icon name="home" size={35} color={'#fff'} />}
      />

      <SMInput
        value={'Enter your Gmail'}
        textStyle={{fontSize: 18}}
        style={{backgroundColor: '#fff', width: '100%'}}
        icon={<Icon name="home" size={25} color={'#000'} />}
        onChangeText={e => console.log(e)}
        password={true}
      />

      {/* <SMDropdown
        item={[
          {label: 'Aslam', value: 'aslam'},
          {label: 'Khursheed', value: 'khursheed'},
          {label: 'Mirzaban', value: 'mirzaban'},
        ]}
        // onClick={e => asd(e)}
        dropDownStyle={{backgroundColor: '#fff', color: '#fff'}}
        dropStyle={{backgroundColor: '#fff', color: '#fff'}}
      /> */}

      {/* <SMModal /> */}
    </SafeAreaView>
  );
}

export default Home;
