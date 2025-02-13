import { saveProfile, getProfile } from '../../src/tasks/task1-profile-builder/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('Profile Builder', () => {
  beforeEach(() => AsyncStorage.clear());

  test('saves and retrieves profile data', async () => {
    await saveProfile({ name: 'John', bio: 'Developer' });
    const profile = await getProfile();
    expect(profile).toEqual({ name: 'John', bio: 'Developer' });
  });
});