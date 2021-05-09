const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: "dk_prod_N7FP8T13MTMM2VQG8TZ3VY0YFKFP" });

export default async (req, res) => {
  courier
    .send({
        eventId: "FNVN5RJ9MV4Z5MHNK6P3G7A84A58",
        recipientId: req.body.recipient_id,
        profile: {
            email: req.body.to
        },
        data: {
          class_name: req.body.class,
          meet_link: req.body.meet_link,
        },
        override: {
        },
      })
    .then((resp) => {
      console.info("Email sent", resp);
      res.status(200)
      res.send("Message sent")
    })
    .catch((error) => {
      console.error(error)
      res.status(500);
      res.send("Message failed")
    });
};
