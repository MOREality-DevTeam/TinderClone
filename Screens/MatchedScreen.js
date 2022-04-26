import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";

const MatchedScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    const { loggedInProfile, userSwiped } = params;

    return (
        <View style={[tw`h-full bg-red-500 pt-20`, { opacity: 0.89 }]}>
            <View style={tw`mt-20`}>
                <Text
                    style={tw`font-bold text-center text-4xl`}
                >

                    Ooh! It's a Match

                </Text>
            </View>
            <Text style={tw`text-white text-center mt-5 text-lg`}>
                You and {userSwiped.displayName} have liked each other.
            </Text>
            <View style={tw`flex-row justify-evenly mt-20`}>
                <Image
                    style={tw`h-32 w-32 rounded-full`}
                    source={{
                        uri: loggedInProfile.photoURL,
                    }}
                />
                <Image
                    style={tw`h-32 w-32 rounded-full`}
                    source={{
                        uri: userSwiped.photoURL,
                    }}
                />
            </View>

            <TouchableOpacity
                style={tw`bg-white m-5 px-10 py-8 rounded-full mt-20`}
                onPress={() => {
                    navigation.goBack();
                    navigation.navigate("Chat");
                }}
            >
                <Text style={tw`text-center font-bold text-md`}>Send a Message</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MatchedScreen;