import mongoose from 'mongoose';

// Schema
const AdTypeSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
      index: true
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: true
    },
  },
  { collection: 'AdType' },
);

// Model
const AdTypesModel = mongoose.model('AdType', AdTypeSchema);

AdTypesModel.getAll = (callback) => AdTypesModel.find({}).exec((err, docs) => {
  console.info(err);
  console.info(docs);
  // If there is an error, return the error and no results
  if(err) callback(err, null);

  // No error, return the docs
  callback(null, docs);
});
AdTypesModel.add = AdTypeToAdd => AdTypeToAdd.save();
AdTypesModel.remove = Name => AdTypesModel.remove({ name: Name });

export default AdTypesModel;
