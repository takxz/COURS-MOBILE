import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [detailsProduct, setDetailsProduct] = useState([] as any);

  useEffect(() => {
    async function loadDetailsProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setDetailsProduct(data);
    }
    loadDetailsProduct();
  }, [id]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.presentationContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            -{detailsProduct.discountPercentage?.toFixed(1)}%
          </Text>
        </View>
        <Image
          source={{ uri: detailsProduct.thumbnail }}
          style={styles.thumbnail}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{detailsProduct.title}</Text>
      <Text style={styles.description}>{detailsProduct.description}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{detailsProduct.price}</Text>
        <Text style={styles.finalPrice}>
          {(
            Number(detailsProduct.price) -
            (Number(detailsProduct.price) *
              Number(detailsProduct.discountPercentage)) /
              100
          ).toFixed(2)}
          €
        </Text>
      </View>
      <View style={styles.metaRow}>
        <Text style={styles.metaLabel}>Note</Text>
        <Text style={styles.metaValue}>{detailsProduct.rating}</Text>
      </View>
      <View style={styles.reviewsSection}>
        <Text style={styles.reviewsTitle}>Derniers avis</Text>
        {detailsProduct.reviews?.map((review: any, index: number) => {
          return (
            <View key={`review-${index}`} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewName}>{review.reviewerName}</Text>
                <View style={styles.reviewRatingPill}>
                  <Text style={styles.reviewRatingText}>{review.rating}</Text>
                </View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F6F2EA",
  },
  screenContent: {
    paddingBottom: 28,
  },
  presentationContainer: {
    backgroundColor: "#FFF6E7",
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,
    shadowColor: "#2A1F0B",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  badge: {
    position: "absolute",
    zIndex: 2,
    top: 12,
    left: 12,
    backgroundColor: "#1F1407",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: "#FFF2DA",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  thumbnail: {
    width: "100%",
    height: 160,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1F1407",
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  description: {
    color: "#534631",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    color: "#8C7A59",
    textDecorationLine: "line-through",
    marginRight: 12,
  },
  finalPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F1407",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: "10%",
  },
  metaLabel: {
    fontSize: 12,
    color: "#8C7A59",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1407",
  },
  reviewsSection: {
    marginTop: 18,
  },
  reviewsTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F1407",
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#2A1F0B",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1407",
  },
  reviewRatingPill: {
    backgroundColor: "#1F1407",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  reviewRatingText: {
    color: "#FFF2DA",
    fontSize: 12,
    fontWeight: "700",
  },
  reviewComment: {
    fontSize: 13,
    color: "#534631",
    lineHeight: 18,
  },
});
