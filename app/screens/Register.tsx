import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import IconButton from "../../components/icon-button";
import FontAwesome, { RegularIcons } from "react-native-fontawesome";

const Register: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex flex-col">
      <IconButton
        icon={<FontAwesome icon={RegularIcons.eye} />}
        onPress={navigation.goBack()}
        className="flex aspect-square w-6 items-center justify-center rounded-full bg-white/40"
      />
    </SafeAreaView>
  );
};

export default Register;
