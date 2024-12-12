/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../theme';

export default function Layout() {
	return (
		<Tabs screenOptions={{tabBarActiveTintColor: theme.colorCerulean, tabBarInactiveTintColor: 'black'}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Shopping list',
					tabBarIcon: ({color}) => {
						return <Entypo name="home" size={32} color={color} />;
					},
				}}
			/>
			<Tabs.Screen
      name='counter'
				options={{
					title: 'Counter',
          headerShown: false,
					tabBarIcon: ({color}) => {
						return <MaterialCommunityIcons name="account" size={32} color={color} />;
					},
				}}
			/>
			<Tabs.Screen
				name="idea"
				options={{
					title: 'Idea',
					tabBarIcon: ({color}) => {
						return <AntDesign name="infocirlce" size={24} color={color} />;
					},
				}}
			/>
		</Tabs>
	);
}
