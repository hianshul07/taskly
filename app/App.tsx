/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';

export default function App() {
	return (
		<View style={styles.container}>
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
