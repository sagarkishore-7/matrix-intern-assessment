import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

// TODO: Implement message storage
export const saveMessage = (message) => {
  {{IMPLEMENT_SAVE_MESSAGE}}
};

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text testID="message-text">{item.text}</Text>}
      />
      <TextInput
        testID="message-input"
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <Button
        testID="send-button"
        title="Send"
        onPress={() => {
          saveMessage(newMessage);
          setNewMessage('');
        }}
      />
    </View>
  );
}