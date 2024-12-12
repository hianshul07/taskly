/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../theme';
import { useState } from 'react';
import ShoppingListItem from '../components/ShoppingListItem';

type ShoppingListType = {
	id: string;
	name: string;
};

const initialList: ShoppingListType[] = [
	{ id: '1', name: 'coffee' },
	{ id: '2', name: 'milk' },
	{ id: '3', name: 'egg' },
];

export default function App() {
	const [shoppingList, setShoppingList] =
		useState<ShoppingListType[]>(initialList);

	const [inputValue, setInputValue] = useState('');

	const handleSubmit = () => {
		if (inputValue) {
			const newShoppingList = [
				{ id: new Date().toTimeString(), name: inputValue },
				...shoppingList,
			];
			setShoppingList(newShoppingList);
			setInputValue('');
		}
	};

	return (
		<View style={styles.container}>
			{/* <Link href="counter" style={{textAlign: "center", marginBottom: 18, fontSize: 24}}>Go to counter</Link> */}
			<TextInput
				placeholder="Enter item"
				style={styles.textInput}
				value={inputValue}
				onChangeText={setInputValue}
				onSubmitEditing={handleSubmit}
			/>

			{shoppingList.map((item) => (
				<ShoppingListItem key={item.id} name={item.name} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 36,
		// justifyContent: 'center',
	},
	textInput: {
		borderColor: theme.colorLightGrey,
		borderWidth: 2,
		padding: 12,
		marginHorizontal: 12,
		marginBottom: 12,
		borderRadius: 50,
		fontSize: 18,
	},
});
