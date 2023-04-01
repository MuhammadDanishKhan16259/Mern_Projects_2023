import {Text, TouchableOpacity, View} from 'react-native';

const SMButton = ({value, onClick, style, icon, color, fontWeight, size}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        width: 150,
        height: 50,
        marginVertical: 20,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        ...style,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: color ?? '#fff',
            fontWeight: fontWeight ?? 'bold',
            fontSize: size ?? 16,
          }}>
          {value ? value : 'asd'}
        </Text>

        {icon && <View style={{paddingHorizontal: 10}}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default SMButton;
