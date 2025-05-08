import AsyncStorage from "@react-native-async-storage/async-storage";

export class Storage {
  async get(key: string) {
    return await AsyncStorage.getItem(key);
  }

  async set(key: string, value: any) {
    await AsyncStorage.setItem(key, value);
  }

  async remove(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
