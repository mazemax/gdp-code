import Customer from '../types/Customer';
import CustomersModel from '../models/Customer';

const customer = {
  type: Customer,
  resolve() {
    return (
      CustomersModel.getAll()
    );
  },
};

export default customer;
