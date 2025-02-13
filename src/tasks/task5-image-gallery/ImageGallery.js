import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// TODO: Implement image upload
export const uploadImage = async () => {
  {{IMPLEMENT_UPLOAD_IMAGE}}
};

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  return (
    <View>
      <Button 
        testID="upload-button" 
        title="Upload Image" 
        onPress={uploadImage} 
      />
      {images.map((uri, index) => (
        <Image 
          key={index} 
          testID={`image-${index}`} 
          source={{ uri }} 
          style={{ width: 100, height: 100 }} 
        />
      ))}
    </View>
  );
}