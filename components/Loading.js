import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});
