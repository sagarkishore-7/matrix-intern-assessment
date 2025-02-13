import React from 'react';
import { Animated, View, Text } from 'react-native';

// TODO: Implement splash screen animation
export const animateSplash = () => {
  {{IMPLEMENT_ANIMATE_SPLASH}}
};

export default function SplashScreen() {
  return (
    <View>
      <Animated.Text testID="splash-text">Welcome</Animated.Text>
    </View>
  );
}