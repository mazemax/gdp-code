import { GraphQLString as StringType } from "graphql";
import Customer from '../types/Customer';
import CustomersModel from '../models/Customer';

const addCustomer = {
  type: Customer,
  args: {
    name: {type: StringType}
  },
  resolve(parent, args) {
    const customer = new CustomersModel({
      name: args.name
    });
    return customer.save();
  },
};

export default addCustomer;
