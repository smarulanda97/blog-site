class StringHelper {
  /**
   * Conver string to camelcase format
   */
  static toCamelCase(string) {
    return string
      .split(/[,_-]+/)
      .map((s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
  }
}

export default StringHelper;