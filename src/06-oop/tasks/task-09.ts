/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(
        public message: string
    ) { }

    send(): void {
        console.log(this.message);
    }
}

class EmailNotification extends Notification {
    constructor(
        public email: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log(`To: ${this.email}`);
        console.log(`Message: ${this.message}`);
    }
}

class SMSNotification extends Notification {
    constructor(
        public phoneNumber: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log(`To: ${this.phoneNumber}`);
        console.log(`Message: ${this.message}`);
    }
}

class PushNotification extends Notification {
    constructor(
        public deviceId: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log(`Device: ${this.deviceId}`);
        console.log(`Message: ${this.message}`);
    }
}

const emailNotification = new EmailNotification(
    "student@example.com",
    "Your assignment has been graded."
);

const smsNotification = new SMSNotification(
    "+628123456789",
    "Your assignment has been graded."
);

const pushNotification = new PushNotification(
    "ST001",
    "Your assignment has been graded."
);

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}