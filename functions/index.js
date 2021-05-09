const functions = require("firebase-functions");
const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: functions.config().courier.key, });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.sendMail = functions.https.onRequest(async (request, response) => {
  courier
    .send({
      eventId: "FNVN5RJ9MV4Z5MHNK6P3G7A84A58",
      recipientId: request.body.recipientId,
      profile: {
        email: "acgoidel@gmail.com",
      },
      data: {
        class_name: "Foo Bar 101",
        meet_link: "https://lectern.tech",
      },
    })
    .then((resp) => {
      functions.logger.info("Email sent", resp);
    })
    .catch((error) => {
      functions.logger.error(error);
    });
});
