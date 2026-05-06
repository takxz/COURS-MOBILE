import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

export default function ProductCard({ product }: { product: any }) {

      const reduceDescription = () => {
      if (product.description.length < 100) {
        return product.description;
      }
      return product.description.substring(0, 100) + "...";
    }
  return (

    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{reduceDescription()}</Text>
        <Text style={styles.price}>{product.price}€</Text>
    </View>
  );


}
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderColor: "#B0B0B0",
      borderRadius: 4,
      borderWidth: 1,
      marginBottom: 10,
      width: (Dimensions.get("window").width / 2) - 20,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      marginBottom: 5,
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",
      color: "green",
    },
    imageContainer: {
      height: 200,
      width: "100%",
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: "#f2f2f2",
    },
  });