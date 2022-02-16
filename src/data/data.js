function Tours(id, name, info, image, price) {
  this.id = id;
  this.name = name;
  this.info = info;
  this.image = image;
  this.price = price;
}

export function tourById(array, id) {
  let tour = {};
  array.forEach((element) => {
    if (element.id === id) {
      tour = new Tours(
        element.id,
        element.name,
        element.info,
        element.image,
        element.price
      );
    }
  });
  return tour;
}
