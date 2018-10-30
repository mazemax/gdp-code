import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';
// import Deal from './Deal';
// import PurchaseDiscount from './PurchaseDiscount';

const PriceRule = new ObjectType({
  name: 'PriceRule',
  fields: {
    _id: { type: ID },
    customerId: { type: StringType },
    adTypeId: { type: StringType },
    // deal: { type: Deal },
    priceDrop: { type: FloatType },
    // purchaseDiscount: { type: PurchaseDiscount }
  },
});

export default PriceRule;
