import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Implement this function to save profile data
export const saveProfile = async (profileData) => {
  {{IMPLEMENT_SAVE_PROFILE}}
};

// TODO: Implement this function to retrieve profile data
export const getProfile = async () => {
  {{IMPLEMENT_GET_PROFILE}}
};

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View>
      <TextInput 
        testID="name-input" 
        placeholder="Enter name" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        testID="bio-input" 
        placeholder="Enter bio" 
        value={bio} 
        onChangeText={setBio} 
      />
      <Button 
        testID="save-button" 
        title="Save Profile" 
        onPress={() => saveProfile({ name, bio })} 
      />
    </View>
  );
}