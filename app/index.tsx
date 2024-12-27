/* eslint-disable prettier/prettier */
import {
	StyleSheet,
	TextInput,
	FlatList,
	View,
	Text,
	LayoutAnimation,
} from 'react-native';
import { theme } from '../theme';
import { useEffect, useState } from 'react';
import ShoppingListItem from '../components/ShoppingListItem';
import * as Haptics from 'expo-haptics';
import { getFromStorage, saveToStorage } from '../utils/storage';

type ShoppingListItemType = {
	id: string;
	name: string;
	completedAtTimestamp?: number;
	lastUpdatedTimestamp: number;
};

const initialList: ShoppingListItemType[] = [
	// { id: '1', name: 'coffee' },
	// { id: '2', name: 'milk' },
	// { id: '3', name: 'egg' },
	// { id: '4', name: 'coffee' },
	// { id: '5', name: 'milk' },
	// { id: '6', name: 'egg' },
	// { id: '7', name: 'coffee' },
	// { id: '8', name: 'milk' },
	// { id: '9', name: 'egg' },
	// { id: '11', name: 'coffee' },
	// { id: '22', name: 'milk' },
	// { id: '33', name: 'egg' },
	// { id: '42', name: 'coffee' },
	// { id: '52', name: 'milk' },
	// { id: '61', name: 'egg' },
	// { id: '72', name: 'coffee' },
	// { id: '81', name: 'milk' },
	// { id: '92', name: 'egg' },
];

const storageKey = 'shopping-list';

export default function App() {
	useEffect(() => {
		const fetchInitial = async () => {
			const data = await getFromStorage(storageKey);
			if (data) {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				setShoppingList(data);
			}
		};
		fetchInitial();
	}, []);

	const [shoppingList, setShoppingList] =
		useState<ShoppingListItemType[]>(initialList);

	const [inputValue, setInputValue] = useState('');

	const handeDelete = (id: string) => {
		const newShoppingList = shoppingList.filter((item) => item.id !== id);
		saveToStorage(storageKey, shoppingList);
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
		setShoppingList(newShoppingList);
	};

	const handleSubmit = () => {
		if (inputValue) {
			const newShoppingList = [
				{
					id: new Date().toTimeString(),
					name: inputValue,
					lastUpdatedTimestamp: Date.now(),
				},
				...shoppingList,
			];
			saveToStorage(storageKey, shoppingList);
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setShoppingList(newShoppingList);
			setInputValue('');
		}
	};

	const handleToggleComplete = (id: string) => {
		const newShoppingList = shoppingList.map((item) => {
			if (item.id === id) {
				if (item.completedAtTimestamp) {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
				} else {
					Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				}

				return {
					...item,
					lastUpdatedTimestamp: item.lastUpdatedTimestamp,
					completedAtTimestamp: item.completedAtTimestamp
						? undefined
						: Date.now(),
				};
			} else {
				return item;
			}
		});
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setShoppingList(newShoppingList);
		saveToStorage(storageKey, newShoppingList);
	};

	function orderShoppingList(shoppingList: ShoppingListItemType[]) {
		return shoppingList.sort((item1, item2) => {
			if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
				return item2.completedAtTimestamp - item1.completedAtTimestamp;
			}

			if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
				return 1;
			}

			if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
				return -1;
			}

			if (!item1.completedAtTimestamp && !item2.completedAtTimestamp) {
				return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
			}

			return 0;
		});
	}

	return (
		<FlatList
			ListHeaderComponent={
				<View style={styles.box}>
					<TextInput
						value={inputValue}
						placeholder="Enter item"
						style={styles.textInput}
						onChangeText={setInputValue}
						onSubmitEditing={handleSubmit}
						returnKeyType="done"
					/>
				</View>
			}
			ListEmptyComponent={
				<View style={styles.listEmptyContainer}>
					<Text>Your list is empty</Text>
				</View>
			}
			data={orderShoppingList(shoppingList)}
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
			stickyHeaderIndices={[0]}
			renderItem={({ item }) => (
				<ShoppingListItem
					name={item.name}
					onDelete={() => handeDelete(item.id)}
					onToggleComplete={() => handleToggleComplete(item.id)}
					isCompleted={Boolean(item.completedAtTimestamp)}
				/>
			)}
		></FlatList>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// paddingVertical: 36,
		// justifyContent: 'center',
	},
	textInput: {
		fontSize: 18,
		borderWidth: 2,
		borderRadius: 50,
		marginVertical: 12,
		paddingVertical: 8,
		marginHorizontal: 12,
		paddingHorizontal: 18,
		backgroundColor: theme.colorWhite,
		borderColor: theme.colorLightGrey,
	},
	box: {
		width: 'auto',
		backgroundColor: theme.colorWhite,
	},
	contentContainer: {
		paddingVertical: 12,
	},
	listEmptyContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
	},
});
