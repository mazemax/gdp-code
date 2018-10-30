import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AdType = new ObjectType({
  name: 'AdType',
  fields: {
    _id: { type: new NonNull(ID) },
    name: { type: StringType },
    price: { type: FloatType },
  },
});

export default AdType;
