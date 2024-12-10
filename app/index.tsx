/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import ShoppingListItem from '../components/ShoppingListItem';

export default function App() {
	return (
		<View style={styles.container}>
			<Link href="counter" style={{textAlign: "center", marginBottom: 18, fontSize: 24}}>Go to counter</Link>
			<ShoppingListItem name="car" />
			<ShoppingListItem name="milk" isCompleted />
			<ShoppingListItem name="egg" isCompleted />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
});
