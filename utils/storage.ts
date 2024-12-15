/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async (key: string) => {
	try {
		const data = await AsyncStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	} catch {
		return null;
	}
};

export const saveToStorage = async (key:string, data: object) => {
  try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch {
    
  }
};

