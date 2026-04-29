import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function HomeScreen() {

  const [value, setValue] = useState('');
  return (
      <View>
        <Text style={styles.helloText}>Salut</Text>
        <ScrollView style={styles.scroll}>
        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />
        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />

        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />

        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />

        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />

        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />

        <Image style={styles.image} source={{ uri: 'https://64.media.tumblr.com/4383f7a729fd5263d1094d3865e5a8e9/af2f226d6a9e5953-23/s1280x1920/d78989e20788177081daaba5978968b2611b8ecc.jpg' }} />
        </ScrollView>
        <TextInput placeholder="Entrez votre texte ici" style={styles.textInput} onKeyPress={(e) => setValue(e.target.value)} />
        <Pressable onPress={() => alert('Bouton pressé!')} style={styles.button}>
          <Text style={styles.buttonText}>Appuyez-moi</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  helloText : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: '50%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scroll:{
    height: 200,
  }
});
