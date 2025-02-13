import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

// TODO: Implement swipe-to-delete functionality
export const handleSwipe = (itemId, action) => {
  {{IMPLEMENT_SWIPE_HANDLER}}
};

export default function SwipeableList({ items }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={() => (
            <View testID="delete-button">
              <Text>Delete</Text>
            </View>
          )}
          onSwipeableRightOpen={() => handleSwipe(item.id, 'delete')}
        >
          <Text testID="list-item">{item.text}</Text>
        </Swipeable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}