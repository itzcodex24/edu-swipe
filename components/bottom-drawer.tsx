import { useEffect, useRef, useState, forwardRef } from "react";
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const BottomDrawer = forwardRef((props, ref) => {
  const slideInAnim = useRef(new Animated.Value(0)).current;
  const slideIn = () => console.log("Slide in called");
  Animated.timing(slideInAnim, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
  }).start();

  const slideOut = () =>
    Animated.timing(slideInAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

  return (
    <>
      <Animated.View
        className="absolute bottom-0 w-full h-1/4 bg-white"
        style={{
          opacity: slideInAnim,
        }}
      >
        <Text>Hello World</Text>
      </Animated.View>
    </>
  );
});

export default BottomDrawer;
