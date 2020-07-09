import ApiHelper from '../theme/src/utils/ApiHelper';

class CategoriesApi {
  /**
   * 
   */
  static getAll = () => {
    return ApiHelper.request('/categories');
  }
}

export default CategoriesApi;