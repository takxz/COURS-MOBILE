import { Link } from "expo-router";
import { Home, ShoppingCart, User } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Link href={{ pathname: "/" }} asChild>
        <Pressable style={styles.link} hitSlop={6}>
          <Home size={19} strokeWidth={2.2} color={styles.icon.color} />
        </Pressable>
      </Link>
      <Link href={{ pathname: "/cart" }} asChild>
        <Pressable style={styles.link} hitSlop={6}>
          <ShoppingCart size={19} strokeWidth={2.2} color={styles.icon.color} />
        </Pressable>
      </Link>
      <Link href={{ pathname: "/profile" }} asChild>
        <Pressable style={styles.link} hitSlop={6}>
          <User size={19} strokeWidth={2.2} color={styles.icon.color} />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 14,
    marginVertical: 6,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EFF1F4",
    shadowColor: "#0B0F14",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  link: {
    height: 36,
    width: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8FA",
  },
  icon: {
    color: "#0A7EA4",
  },
});
