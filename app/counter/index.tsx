/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotifications';

const CounterScreen = () => {

	const handleRequestPermission = async () => {
		const result = await registerForPushNotificationsAsync();
		console.log(result);
		 
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleRequestPermission} style={styles.button} activeOpacity={0.8}>
				{/* <Text style={{ textAlign: 'center', marginBottom: 18, fontSize: 24 }}>
					Go to idea
				</Text> */}
			<Text style={styles.buttonText}>Request permission</Text>
			</TouchableOpacity>
		</View>
	);
}

export default CounterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	buttonText: {
		color: theme.colorWhite,
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: 'semibold'
	},
	button: {
		backgroundColor: theme.colorBlack,
		padding: 12,
		borderRadius: 8
	},

});
