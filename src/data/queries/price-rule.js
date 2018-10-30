import PriceRule from '../types/PriceRule';
import PriceRulesModel from '../models/PriceRule';

const priceRule = {
  type: PriceRule,
  resolve() {
    return (
      PriceRulesModel.getAll()
    );
  },
};

export default priceRule;
