class ApiHelper {
  static async request(endpoint, method = 'GET', headers = {}, body = {}) {
    try {
      const response = await fetch(`${process.env.API_URL}${endpoint}`)
      const data = await response.json()
      return {
        status: response.status,
        statusText: response.statusText,
        data: data
      }
    } catch (e) {
      //console.log(e)
    }
  }
}

export default ApiHelper;