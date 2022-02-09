import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export const localRestaurants = [
    {
        name: "Beachsidde Bar",
        image_url: 
        "https://media-cdn.tripadvisor.com/media/photo-s/0f/a3/8c/0c/terrasses-cote-jardin.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: 
        "https://cdn.vox-cdn.com/thumbor/wNsUVrNZz92KbkjQa7yUbvXVP_U=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65465653/Beer_Garden_Courtyard_Final_1.0.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url: 
        "https://nightlife.ca/wp-content/uploads/2018/09/mcdo-toffrira-ses-cheeseburgers-gratuits-le-temps-dune-journee-530343.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url: 
        "https://www.saint-claude-haut-jura.com/medias/images/prestataires/1613373880312.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Big Mag",
        image_url: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBBzwUxLflfidEq7fW9r3KGLXXQ9bMaAJmFnTlIYkfYh3Br9ryEMgTVsrsMImGVOY-KU&usqp=CAU",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url: 
        "https://www.panda-wok.fr/ressources/images/6aeb2e4e7aa8.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url: 
        "http://www.slate.fr/sites/default/files/styles/1060x523/public/macdo_0.png",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url: 
        "https://media-cdn.tripadvisor.com/media/photo-s/15/10/bb/91/menu-big-mac.jpg",
        categories: ["Cafe", "Bar"],
        price: "€",
        reveins: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: 
        "https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg",
        categories: ["Indian", "Bar"],
        price: "€",
        reveins: 700,
        rating: 4.9,
    },

];


export default function RestaurantItem(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (

        <View key={index} style={{ 
            marginTop: 10, 
            padding: 10, 
            backgroundColor: "white", 
            }}
            >
            <RestaurantImage 
            image={restaurant.image_url}/>
            <RestaurantInfo 
            name={restaurant.name} 
            rating={restaurant.rating}
            />
        </View>
        ))}
        </TouchableOpacity>
    );
  }

  const RestaurantImage = (props) => (
      <>
            <Image
            source={{
                uri: props.image,
        }}
        style={{
            width: "100%",
            height: 180
        }}
        />
         <TouchableOpacity style={{ poition: "absolute", left: 300,}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
         </TouchableOpacity>

      </>
  );


  const RestaurantInfo = (props) => (
    <View style={{ 
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: -20,
        
        }}
        >
        <View >
            <Text style={{ 
                fontSize: 15, 
                fontWeight: "bold"}}>{props.name}</Text>
            <Text style={{fontSize: 15, color: "gray" }}>30-40 ° min</Text>
        </View>
        <View style={{
           backgroundColor: "#dddd",
           height: 26,
           width: 30,
           alignItems: "center",
           borderRadius: 15,
           }}>
        <Text>{props.rating}</Text>
        </View>
    </View>
);