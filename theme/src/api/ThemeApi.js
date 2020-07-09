import ApiHelper from './../utils/ApiHelper';
import StringHelper from './../utils/StringHelper';

class ThemeApi {
  /**
   * 
   */
  static getSiteMenus = async () => {
    const response = await ApiHelper.request('/menus');
    const siteMenusData = {};
    
    for (const siteMenuData of response ? response.data : [])
      siteMenusData[StringHelper.toCamelCase(siteMenuData.slug)] = siteMenuData

    return response && response.status === 200 ? { ...response, data: siteMenusData } : {};
  }

  /**
   *
   */
  static getSiteSettings = async () => {
    const response = await ApiHelper.request('/settings');
    return response && response.status === 200 ? response : {};
  }
}

export default ThemeApi;