import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';

// import React, { Component } from 'react';

type Props = {
	name: string;
};

const ShoppingListItem = ({ name }: Props) => {
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
		console.log("hehehe")
	};

	return (
		<View>
			<View style={styles.itemContainer}>
				<Text style={styles.itemText}>{name}</Text>
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
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemText: {
		fontSize: 32,
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

// import { TouchableOpacity, View, Alert, StyleSheet, Text } from "react-native";
// import { theme } from "../theme";

// type Props = {
//   name: string;
// };

// export function ShoppingListItem({ name }: Props) {
//   const handleDelete = () => {
//     Alert.alert(
//       `Are you sure you want to delete ${name}?`,
//       "It will be gone for good",
//       [
//         {
//           text: "Yes",
//           onPress: () => console.log("Ok, deleting."),
//           style: "destructive",
//         },
//         { text: "Cancel", style: "cancel" },
//       ],
//     );
//   };

//   return (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemText}>{name}</Text>
//       <TouchableOpacity
//         onPress={handleDelete}
//         style={styles.button}
//         activeOpacity={0.8}
//       >
//         <Text style={styles.buttonText}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   itemContainer: {
//     paddingVertical: 16,
//     paddingHorizontal: 8,
//     borderBottomColor: theme.colorCerulean,
//     borderBottomWidth: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   itemText: {
//     fontSize: 18,
//     fontWeight: "200",
//   },
//   button: {
//     backgroundColor: theme.colorBlack,
//     padding: 8,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   },
// });
