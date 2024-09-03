class Notif {
    constructor() {
        // Конструктор можно оставить пустым или использовать для инициализации
    }

    async push(title, body) {
        // Запрос разрешения на уведомления
        const perm = await Notification.requestPermission();

        // Если разрешение не получено, выходим из функции
        if (perm !== 'granted') return;

        // Устанавливаем тайм-аут для показа уведомления, если страница скрыта
        if (document.visibilityState === 'hidden') {
            const notification = new Notification(title, {
                body: body
            });
        }
    }
}

// Создаем экземпляр класса Notif
const notificationHandler = new Notif();

// Вызываем метод push с параметрами title и body для отображения уведомления
notificationHandler.push('Notification title', 'Body example');
