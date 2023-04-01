import {View, TextInput} from 'react-native';

const SMInput = props => {
  const {style, value, color, password, onChangeText, icon, textStyle} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 300,
        backgroundColor: '#ccc',
        borderRadius: 15,
        height: 60,
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 15,
        ...style,
      }}>
      {icon && icon}
      <TextInput
        placeholder={value ?? 'Enter your name'}
        style={{
          color: '#333',
          fontSize: 16,
          paddingHorizontal: 10,
          ...textStyle,
        }}
        placeholderTextColor={color ?? '#333'}
        secureTextEntry={password ?? false}
        onChangeText={onChangeText ? e => onChangeText(e) : null}
      />
    </View>
  );
};

export default SMInput;
