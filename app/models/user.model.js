module.exports = (mongoose,autoIncrement) => {
  var doc_name = "User"
  var schema = mongoose.Schema(
    {
      name: String,
      age:Number,
      address:String,
      symptoms:String,
      email:String,
      phonenumber:String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(autoIncrement.plugin, { model: doc_name, startAt: 1});
  const User = mongoose.model(doc_name, schema);
  return User;
};