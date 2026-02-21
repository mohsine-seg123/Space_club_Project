const app = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config({ path: "./config.env", quiet: true });

mongoose.connect(process.env.MONGODB_URI).then((con) => {
  console.log("DB coonection successful!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
