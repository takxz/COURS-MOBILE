import Product from '@/components/ProductCard/ProductCard';
import { Search } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [productList, setProductList] = useState<any[]>([]);
  const [term, setTerm] = useState("");
  const limit = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      async function loadProduct() {
        const skip = limit * (page - 1);
        const res = await fetch(`https://dummyjson.com/products/search?q=${term}&skip=${skip}`);
        const data = await res.json();
        setProductList(currentProductList => [...currentProductList, ...data.products]);
      }
      loadProduct();
    }, 250);

    return (() => clearTimeout(timeout))

  }, [term, page]);

  return (
    <View style={styles.page}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} onChangeText={(value) => {
          setPage(1);
          setProductList([]);
          setTerm(value);
        }} />
        <Pressable>
          <Text style={styles.searchButton}>
            <Search />
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.productScroll} scrollEventThrottle={100} onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        if (layoutMeasurement.height + contentOffset.y >= contentSize.height -1) {
          setPage(currentPage => currentPage + 1);
        }
      }}>
        <View style={styles.productList}>
          {productList.map((product: any) => {
            return (
              <Product key={`product-${product.id}`} product={product} />
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#000000",
    borderRadius: 4,
    borderWidth: 1,
    padding: 4,
    marginBottom: 15
  },
  searchInput: {
    color: "black",
    width: "90%",
    ...({ outlineStyle: "none" } as any)
  },
  searchButton: {
    color: "black"
  },
  productTitle: {
    color: "white"
  },
  productScroll: {
    height: Dimensions.get('window').height - 58
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    width: "100%"
  }
});