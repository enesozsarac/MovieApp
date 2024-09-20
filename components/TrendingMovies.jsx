import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/moviedb";

let { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <ScrollView horizontal className="flex-row space-x-6">
        {data.map((item, index) => (
          <View key={index} className="items-center ml-20">
            <MovieCard item={item} handleClick={handleClick} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
