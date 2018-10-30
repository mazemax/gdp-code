import {
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLInt as IntType
} from "graphql";
import PriceRule from '../types/PriceRule';
import PriceRulesModel from '../models/PriceRule';

const addPriceRule = {
  type: PriceRule,
  args: {
    customerId: {type: StringType},
    adTypeId: {type: StringType},
    buyingCount: { type: IntType },
    sellingCount: { type: IntType },
    priceDrop: {type: FloatType},
    purchaseCount: { type: IntType },
    discountedPrice: { type: FloatType }
  },
  resolve(parent, args) {
    const adType = new PriceRulesModel({
      customerId: args.customerId,
      adTypeId: args.adTypeId,
      deal: {
        buyingCount: args.buyingCount,
        sellingCount: args.sellingCount
      },
      priceDrop: args.priceDrop,
      purchaseDiscount: {
        purchaseCount: args.purchaseCount,
        discountedPrice: args.discountedPrice
      }
    });
    return adType.save();
  },
};

export default addPriceRule;
