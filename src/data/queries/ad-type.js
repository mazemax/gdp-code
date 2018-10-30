import AdType from '../types/AdType';
import AdTypesModel from '../models/AdType';

const adType = {
  type: AdType,
  resolve() {
    return (
      AdTypesModel.getAll()
    );
  },

};

export default adType;

