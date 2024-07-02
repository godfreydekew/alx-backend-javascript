export default function updateUniqueItems(myMap) {
  for (const k of myMap.keys()) {
    if (myMap.get(k) === 1) {
      myMap.set(k, 100);
    }
  }
}
