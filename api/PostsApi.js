import ApiHelper from './../theme/src/utils/ApiHelper';

class PostsApi {
  /**
   * 
   */
  static getLatest = () => {
    return ApiHelper.request('/posts?promote_in_front_page=true&publish=true');
  }

  /**
   * 
   */
  static getMostRead = () => {
    return ApiHelper.request('/posts?promote_in_front_page=true&publish=true&_limit=4')
  }
}

export default PostsApi;