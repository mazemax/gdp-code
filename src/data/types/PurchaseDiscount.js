import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType
} from "graphql";

const PurchaseDiscount = new ObjectType({
  name: 'PurchaseDiscount',
  fields: {
    purchaseCount: { type: IntType },
    discountedPrice: { type: FloatType }
  },
});

export default PurchaseDiscount;
