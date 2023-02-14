function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  const car = {
    manufacturer: manufacturer,
    model: model,
  };

  options.forEach(([key, value]) => {
    car[key] = value;
  });

  return car;
}

const myCar = createCar("Honda", "Civic", "color", "blue", "sunroof", true);
console.log(myCar);
