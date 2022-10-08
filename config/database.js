const mongoose = require("mongoose");

const db =
  //"mongodb+srv://x-hub:x-hub@x-hub.uivpi.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://sisin:Sisin12@maqraa.w1av3.mongodb.net/myFirstDatabase";
//"mongodb://localhost:27017/maqraa";

mongoose.connect(db, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database has started!");
  }
});
