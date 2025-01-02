/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../../theme';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotifications';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

const CounterScreen = () => {
	const handleRequestPermission = async () => {
		const result = await registerForPushNotificationsAsync();
		console.log(result);
	};

	const scheduleNotification = async () => {
		const result = await registerForPushNotificationsAsync();
		if (result === 'granted') {
			console.log('granted');
			await Notifications.scheduleNotificationAsync({
				content: {
					title: 'I am a scheduled notification',
				},
				trigger: {
					seconds: 5,
				},
			});
		} else {
			if (Device.isDevice) {
				Alert.alert('Unable to schedule notifications');
			}
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={handleRequestPermission}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.buttonText}>Request permission</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={scheduleNotification}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.buttonText}>Schedule Notification</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CounterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		gap: 8,
	},
	buttonText: {
		color: theme.colorWhite,
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: 'semibold',
	},
	button: {
		backgroundColor: theme.colorBlack,
		padding: 12,
		borderRadius: 8,
	},
});
