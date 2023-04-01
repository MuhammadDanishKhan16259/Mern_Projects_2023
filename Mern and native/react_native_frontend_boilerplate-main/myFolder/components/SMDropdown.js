import {useState, useEffect} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SMDropdown = props => {
  const {item, dropDownStyle, dropStyle, onClick} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    item && item[0].label ? item[0].label : 'name',
  );
  console.log(item);
  const [items, setItems] = useState(
    item ?? [
      {label: 'Name', value: 'name'},
      {label: 'Kam', value: 'kam'},
    ],
  ); //aray of object

  useEffect(() => {
    {
      onClick && onClick(value);
    }
  }, [value]);

  return (
    <View style={{width: 100, marginHorizontal: 10, height: 60}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{
          backgroundColor: '#EAF8FF',
          borderWidth: 0,
          borderTopWidth: 2,
          borderColor: '#fff',
          ...dropStyle,
        }}
        style={{
          width: 100,
          height: 60,
          borderWidth: 0,
          backgroundColor: '#EAF8FF',
          color: '#727070',
          borderRadius: 10,
          ...dropDownStyle,
        }}
      />
    </View>
  );
};

export default SMDropdown;
