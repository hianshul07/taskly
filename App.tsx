import { StatusBar } from 'expo-status-bar';
import { theme } from './theme';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Button,
	TouchableOpacity,
  Alert,
} from 'react-native';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {

	return (
		<View style={styles.container}>
			<ShoppingListItem />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	itemContainer: {
		borderBottomColor: theme.colorCerulean,
		borderBottomWidth: 1,
		paddingHorizontal: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemText: {
		fontSize: 18,
		fontWeight: '200',
	},
	button: {
		backgroundColor: theme.colorBlack,
		padding: 8,
		borderRadius: 6,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});

