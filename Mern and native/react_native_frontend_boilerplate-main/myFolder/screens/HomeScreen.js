import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import DBURL from '../../config';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Text>Welcome</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
