import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../colors';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
};

export default Error;

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
