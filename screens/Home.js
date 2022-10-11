import React from "react";
import { View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTaps from "../components/home/HeaderTaps";
import Search from "../components/home/Search";
import Categories from "../components/home/Categories";
import RestaurantItem from "../components/home/RestaurantItem";
import restaurantItem, {localRestaurants} from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);


  return (
    <SafeAreaView style={{ backgroundColor: "#FEBA7B", flex: 1}}>
        <View style={{ backgroundColor: '#FEBA7B', padding: 3}}>
            <HeaderTaps/>
            <Search/>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Categories/>
             <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
              <Divider width={1} />
              <BottomTabs />
     </SafeAreaView>
  );
}