import {
  GraphQLString as StringType,
  GraphQLFloat as FloatType
} from "graphql";
import AdType from '../types/AdType';
import AdTypesModel from '../models/AdType';

const addAdType = {
  type: AdType,
  args: {
    name: {type: StringType},
    price: {type: FloatType}
  },
  resolve(parent, args) {
    const adType = new AdTypesModel({
      name: args.name,
      price: args.price
    });
    return adType.save();
  },
};

export default addAdType;
