import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import SMInput from './SMInput';

const SMModal = () => {
  const [flag, setFlag] = useState(true);
  const [value, setValue] = useState('');

  const closeModal = () => {
    setFlag(false);
  };

  return (
    <Modal isVisible={flag}>
      <View
        style={{
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
        }}>
        <SMInput value={'Enter your name'} onChangeText={e => setValue(e)} />
        <TouchableOpacity
          onPress={closeModal}
          style={{
            width: 150,
            height: 60,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SMModal;
