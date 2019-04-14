// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Actions
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
