/* eslint-disable prettier/prettier */
import { Link, Stack } from 'expo-router';
// import { Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: 'counter',
					headerRight: () => {
						return (
							<Link href="/counter/history">
								<FontAwesome5 name="history" size={24} color="black" />
							</Link>
						);
					},
				}}
			/>
		</Stack>
	);
};

export default Layout;
