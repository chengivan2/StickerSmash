import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#BB86FC", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#FFF" }]} onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#000"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#000" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }
  else {
    return(
      <View
      >
        <Pressable
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, {paddingTop: (screenHeight * 3) / 100}]}>{label}</Text>
        </Pressable>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  
});
