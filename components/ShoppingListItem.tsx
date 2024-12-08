import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';

// import React, { Component } from 'react';

const ShoppingListItem = () => {
	const handleDelete = () => {
		Alert.alert(
			'You sure you want to delete this???',
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
	};

	return (
		<View>
			<Text>ShoppingListItem</Text>
			<View style={styles.itemContainer}>
				<Text style={styles.itemText}>Coffee</Text>
				<TouchableOpacity
					onPress={handleDelete}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

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

export default ShoppingListItem;
