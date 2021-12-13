const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  const uri =
    "mongodb+srv://milica:inviggo@cluster0.mcbk5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  await mongoose.connect(uri);
}
module.exports = { main };
