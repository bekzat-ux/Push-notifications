const VERSION = "v4";

log = (msg) => console.log(`${VERSION}:${msg}`);

self.addEventListener('push', function(event) {
    const options = {
        body: "Buzz! Buzz!",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
    }

    let promise = self.registration.showNotification('Push notification!', options);

    event.waitUntil(promse);
})