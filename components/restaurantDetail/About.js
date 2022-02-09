import React from 'react'
import { View, Text, Image  } from 'react-native'

const yelpRestaurantInfo = {
    name: "Farmhouse kichen Thai cuisine ",
    image: 
       "https://media-cdn.tripadvisor.com/media/photo-s/0f/a3/8c/0c/terrasses-cote-jardin.jpg",
       price: "$$",
       reviews: "1500",
       rating: 4.5,
       categories: [
       {title: "Indian"}, 
       {title: "Confort Food"},
       {title: "Coffee"},
       {title: "Ice Cream"},
       {title: "Snacks"},
    ], 
       
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const title = "Farmhouse kitchen Thai cuisine";

const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
        
    );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{
     width: "100%", 
     height: 180,
       
    }} 
    />
);

const RestaurantName = (props) => <Text style={{
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15
}}>{props.title}</Text>;


const RestaurantDescription = (props) => <Text style={{
    marginLeft: 19,
}}>{props.description}</Text>;