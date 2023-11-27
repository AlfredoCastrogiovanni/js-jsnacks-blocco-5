
const carList = [
    {brand: "BMW", model: "m4", powerFeed: "gasoline"},
    {brand: "BMW", model: "m3", powerFeed: "gasoline"},
    {brand: "BMW", model: "x2", powerFeed: "eletric"},
    {brand: "BMW", model: "320d", powerFeed: "diesel"},
];

const gasolineCarList = carList.filter( (car) => car.powerFeed == "gasoline");
const dieselCarList = carList.filter( (car) => car.powerFeed == "diesel");
