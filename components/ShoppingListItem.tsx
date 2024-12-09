/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';
import Fontisto from '@expo/vector-icons/Fontisto';

type Props = {
	name: string;
	isCompleted?: boolean;
};

const ShoppingListItem = ({ name, isCompleted }: Props) => {
	const handleDelete = () => {
		Alert.alert(
			`You sure you want to delete ${name}???`,
			'It will all be gone for good',

			[
				{
					text: 'Yes',
					onPress: () => console.log('Ok, deleting'),
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
		<View>
			<View
				style={[
					styles.itemContainer,
					isCompleted ? styles.completedContainer : undefined,
				]}
			>
				<Text
					style={[
						styles.itemText,
						isCompleted ? styles.completedText : undefined,
					]}
				>
					{name}
				</Text>
				<TouchableOpacity
					onPress={handleDelete}
					activeOpacity={0.8}
				>
					<Fontisto name="trash" size={24} color={isCompleted ? theme.colorDullRedd : theme.colorRed} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		borderBottomColor: theme.colorCerulean,
		borderBottomWidth: 1,
		paddingHorizontal: 16,
		marginVertical: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	completedContainer: {
		backgroundColor: theme.colorLightGrey,
		borderBottomColor: theme.colorLightGrey,
	},
	completedText: {
		color: theme.colorGrey,
		textDecorationLine: 'line-through',
		textDecorationColor: theme.colorGrey,
	},
	itemText: {
		fontSize: 32,
		fontWeight: '200',
	},
});

export default ShoppingListItem;
