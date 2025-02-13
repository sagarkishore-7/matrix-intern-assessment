import { setupNotifications, handleNotification } from '../../src/tasks/task8-push-notifications/NotificationHandler';

test('sets up push notifications', async () => {
  await setupNotifications();
  expect(Notifications.setNotificationHandler).toHaveBeenCalled();
});