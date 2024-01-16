import moongose from "mongoose";

const categorySchema = moongose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

export default moongose.model("Category", categorySchema);
