import ProductCard from "@/components/ProductCard/ProductCard";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function HomeScreen() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductList(data.products);
    }
    loadProducts();
  }, []);

  return (
    <ScrollView>
    <View style={styles.page}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Recherchez..."
          style={styles.searchInput}
        />
        <Pressable onPress={() => console.log()}>
          <Text style={styles.searchButton}>
            <Search />
          </Text>
        </Pressable>
      </View>
      <View style={styles.productList}>
        {productList.map((product:any) => {
          return (
            <ProductCard key={`product-${product.id}`} product={product}/>
          );}
        )}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#B0B0B0",
    borderRadius: 4,
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  searchInput: {
    padding: 5,
    width: "90%",
    ...{outlineStyle: "none"} as any,
  },
  searchButton: {
    color: "gray",
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
  },
});
