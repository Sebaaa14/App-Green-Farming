import { StyleSheet, Text, View, Image, ImageBackground,Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Product } from "../types/post";
import { Link } from "expo-router";

export const defaultGolosine = 'https://cdn.pixabay.com/photo/2022/12/29/17/14/candy-7685391_1280.png'

type ProductListItemProps = {
  product: Product,
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || defaultGolosine }} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    flex: 1,
    borderRadius: 20,
    maxWidth: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
});