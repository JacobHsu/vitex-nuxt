import { get } from "../api/axios";

const version = "v1";

export function baseToken() {
  return get(`${version}/tokens`, {
    category: "quote"
  });
}

export function assignPair({ symbols = [] }) {
  return get(`${version}/ticker/24hr`, {
    symbols: symbols.join(",")
  });
}
