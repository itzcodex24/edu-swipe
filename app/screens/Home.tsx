import { Montserrat_900Black, useFonts } from "@expo-google-fonts/montserrat";
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { Pressable, View, Text } from "react-native";
import Animated from "react-native-reanimated";

const HomePage: React.FC<any> = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    "MonumentExtended-Regular": require("../../assets/fonts/MonumentExtended-Regular.otf"),
    "MonumentExtended-Ultrabold": require("../../assets/fonts/MonumentExtended-Ultrabold.otf"),
    Montserrat_900Black,
  });
  const video = useRef(null);
  if (!fontsLoaded || error)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  const handleSignup = () => {
    navigation.navigate("Register");
  };
  return (
    <Animated.View
      className="flex-1 justify-center items-center bg-black relative"
      sharedTransitionTag="tag"
    >
      <Video
        ref={video}
        className="absolute w-full h-full opacity-[0.15]"
        rate={1}
        source={require("../../assets/videos/main-page-background.mp4")}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        isMuted
      />
      <View className="flex flex-col items-center justify-center gap-y-4 px-16 relative">
        <Text
          className="text-4xl text-white font-bold font-monument text-center "
          style={{
            textShadowColor: "black",
            textShadowRadius: 10,
            textShadowOffset: { width: 0, height: 0 },
          }}
        >
          Discover. Enjoy. Grow.
        </Text>
        <View className="flex justify-center items-center flex-col gap-y-2 ">
          <Pressable
            onPress={handleSignup}
            className="rounded-3xl px-10 py-2 bg-pink-500"
          >
            <Text
              className="text-xl text-white font-bold"
              style={{
                fontFamily: "Montserrat_900Black",
              }}
            >
              Sign up
            </Text>
          </Pressable>
          <Pressable onPress={handleSignup}>
            <Text className="text-xl text-white font-extralight">
              Got an account? <Text className="font-normal">Login</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="absolute bottom-0 mb-10">
        <Text className="text-white/60 text-sm tracking-tighter ">
          Copyright EduSwipe @ 2024
        </Text>
      </View>
    </Animated.View>
  );
};

export default HomePage;
