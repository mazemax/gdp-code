import mongoose from 'mongoose';

// Schema
const DealSchema = new mongoose.Schema({
  buyingCount: mongoose.Schema.Types.Number,
  sellingCount: mongoose.Schema.Types.Number
});

const PurchaseDiscountSchema = new mongoose.Schema({
  purchaseCount: mongoose.Schema.Types.Number,
  discountedPrice: {
    type: mongoose.Schema.Types.Decimal128
  }
});

const PriceRuleSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    adTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AdType',
      required: true
    },
    deal: DealSchema,
    priceDrop: {
      type: mongoose.Schema.Types.Decimal128
    },
    purchaseDiscount: PurchaseDiscountSchema
  },
  { collection: 'PriceRule' },
);

// Model
const PriceRulesModel = mongoose.model('PriceRule', PriceRuleSchema);

PriceRulesModel.getAll = () => PriceRulesModel.find({});
PriceRulesModel.add = PriceRuleToAdd => PriceRuleToAdd.save();
PriceRulesModel.remove = Id => PriceRulesModel.remove({ _id: Id });

export default PriceRulesModel;
