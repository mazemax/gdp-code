import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType
} from "graphql";

const Deal = new ObjectType({
  name: 'Deal',
  fields: {
    buyingCount: { type: IntType },
    sellingCount: { type: IntType }
  },
});

export default Deal;
