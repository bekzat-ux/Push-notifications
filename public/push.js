const webpush = require("web-push");
const fs = require("fs");

const VAPID = {
    publicKey: "BLmmSMTWHa86eNynzfMXu21NfYlyEZi0DI6FyplXZ8jkELXL0VpGQegm5t5sGxRpeVQySf08QMowcGPxJfg2h50",
    privateKey: "wyP8n2PLg4gieBIQV5L1-0MVfoweLjMNZGEi2jQFtZw",
};

webpush.setVapidDetails(
    "mailto:example@yourdomain.org",
    VAPID.publicKey,
    VAPID.privateKey
);

function sendNotification(pushSubscription) {
    return webpush
        .sendNotification(pushSubscription, "JUST TEXT")
        .catch((err) => {
            console.log(err);
        });
}

const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
sendNotification(pushSubscription);