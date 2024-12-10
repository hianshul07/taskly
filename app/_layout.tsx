/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Shopping list',
					tabBarIcon: () => {
						return <Entypo name="home" size={32} color="black" />;
					},
				}}
			/>
			<Tabs.Screen
      name='counter'
				options={{
					title: 'Counter',
					tabBarIcon: () => {
						return <MaterialCommunityIcons name="account" size={32} color="black" />;
					},
				}}
			/>
			<Tabs.Screen
				name="idea"
				options={{
					title: 'Idea',
					tabBarIcon: () => {
						return <AntDesign name="infocirlce" size={24} color="black" />;
					},
				}}
			/>
		</Tabs>
	);
}
