import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function ProductCard({product}:{product: any}){

    const reduceDescription = () => {
        if(product.description.length < 50){
            return product.description;
        }
        return product.description.substr(0,50) + "...";
    }
    
    return (
      <Link href={{
        pathname: "/product/[id]",
        params: {id: product.id}
      }}>
        <View style={styles.product}>
            <View style={styles.productPicture}>
                <Image source={{uri: product.thumbnail}} style={styles.productImage} />
            </View>
            <View style={styles.productContent}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription}>{reduceDescription()}</Text>
                <Text style={styles.productPrice}>{product.price} €</Text>
            </View>
        </View>
      </Link>
    )
}
    

const styles = StyleSheet.create({
    product: {
        display: "flex",
        width: (Dimensions.get('window').width /2)-18,
        backgroundColor: "#202020",
        borderRadius: 8,
        overflow: "hidden"
    },
    productPicture:{
        marginBottom: 10,
        backgroundColor: "white"
    },
    productImage:{
        height: 100
    },
    productTitle:{
        color: "white",
        fontSize: 10,
        fontWeight: 700
    },
    productDescription:{
        color: "white",
        fontSize: 9,
    },
    productContent:{
        padding: 8,
    },
    productPrice: {
        color: "white",
        fontSize: 14,
        fontWeight: 800,
        alignSelf: "flex-end"
    }
})