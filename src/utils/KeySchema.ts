
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const keySchema = new Schema({
  privKey: {
    type: String,
    required: true,
    unique: true
  }
});

const KeySchema = mongoose.models.Keys || mongoose.model('Keys', keySchema);

export default KeySchema;