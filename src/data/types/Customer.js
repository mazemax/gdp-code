import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const Customer = new ObjectType({
  name: 'Customer',
  fields: {
    _id: { type: new NonNull(ID) },
    name: { type: StringType },
  },
});

export default Customer;
