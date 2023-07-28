interface AnyObject {
  /**
   * Author: ChatGPT
   */
  [key: string]: any;
}

export function removeNullOrEmptyValues<T = AnyObject>(obj: T): T {
  /**
   * Author: ChatGPT
   */

  const result: AnyObject = {};

  for (const key in obj) {
    const value = obj[key];

    if (value !== null && value !== "") {
      if (typeof value === "object" && !Array.isArray(value)) {
        result[key] = removeNullOrEmptyValues(value);
      } else {
        result[key] = value;
      }
    }
  }

  return result as T;
}
