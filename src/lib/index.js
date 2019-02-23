export const createLable = (geoObject) => {
  const name = geoObject.name;
  const description = geoObject.description;

  return !!description ? `${name} (${description})` : name;
}

export const createOptionsArr = (geoObjects) => {
  const keys = Object.keys(geoObjects);
  return keys.map(id => ({ value: id, label: createLable(geoObjects[id]) }))
}