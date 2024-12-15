/* eslint-disable prettier/prettier */
import { Text, StyleSheet, TouchableOpacity, Alert, View } from 'react-native';
import { theme } from '../theme';
import { Pressable } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

type Props = {
	name: string;
	isCompleted?: boolean;
	onDelete: () => void;
	onToggleComplete: () => void;
};

const ShoppingListItem = ({
	name,
	isCompleted,
	onDelete,
	onToggleComplete,
}: Props) => {
	const handleDelete = () => {
		Alert.alert(
			`You sure you want to delete ${name}???`,
			'It will all be gone for good',

			[
				{
					text: 'Yes',
					onPress: () => onDelete(),
					style: 'destructive',
				},
				{
					text: 'Cancel',
					style: 'cancel',
				},
			]
		);
		console.log('hehehe');
	};

	return (
		<Pressable
			style={[
				styles.itemContainer,
				isCompleted ? styles.completedContainer : undefined,
			]}
			onPress={onToggleComplete}
		>
			<View style={styles.row}>
				<Fontisto name={isCompleted ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color="black" />
				<Text
					numberOfLines={2}
					style={[
						styles.itemText,
						isCompleted ? styles.completedText : undefined,
					]}
				>
					{name}
				</Text>
			</View>
			<TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
				<Fontisto
					name="trash"
					size={24}
					color={isCompleted ? theme.colorDullRedd : theme.colorRed}
				/>
			</TouchableOpacity>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		borderBottomColor: theme.colorCerulean,
		borderBottomWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		marginVertical: 4,
		// marginHorizontal: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	completedContainer: {
		backgroundColor: theme.colorLightGrey,
		borderBottomColor: theme.colorGrey,
		// borderBottomColor: theme.colorCerulean,
		borderBottomWidth: 1,
	},
	completedText: {
		color: theme.colorGrey,
		textDecorationLine: 'line-through',
		textDecorationColor: theme.colorGrey,
		borderBottomColor: theme.colorCerulean,
	},
	itemText: {
		fontSize: 18,
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		flex: 1,
	},
});

export default ShoppingListItem;
