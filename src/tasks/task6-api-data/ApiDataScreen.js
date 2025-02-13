import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

// TODO: Implement API fetch
export const fetchData = async () => {
  {{IMPLEMENT_FETCH_DATA}}
};

export default function ApiDataScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text testID="data-item">{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
}