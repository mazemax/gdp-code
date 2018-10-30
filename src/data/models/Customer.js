import mongoose from 'mongoose';

// Schema
const CustomerSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
      index: true
    }
  },
  { collection: 'Customer' },
);

// Model
const CustomersModel = mongoose.model('Customer', CustomerSchema);

CustomersModel.getAll = () => CustomersModel.find({});
CustomersModel.add = CustomerToAdd => CustomerToAdd.save();
CustomersModel.remove = Name => CustomersModel.remove({ name: Name });

export default CustomersModel;
