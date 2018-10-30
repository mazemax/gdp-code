import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import customer from './queries/customer';
import adType from './queries/ad-type';
import priceRule from './queries/price-rule';
import addCustomer from './mutations/addCustomer';
import addAdType from './mutations/addAdType';
import addPriceRule from './mutations/addPriceRule';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      customer,
      adType,
      priceRule
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      addCustomer,
      addAdType,
      addPriceRule
    },
  })
});

export default schema;
