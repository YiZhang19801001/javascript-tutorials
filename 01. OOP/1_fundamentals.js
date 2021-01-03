// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

//Constructor Function
// name the constructor function with uppercase first letter
function CirCle(radius) {
  this.radius = radius;
  // private properties and methods
  let defaultLocation = { x: 1, y: 1 };
  const computeOptimumLocation = () => {
    //...
    console.log(defaultLocation);
  };
  this.draw = function () {
    computeOptimumLocation();
    console.log(this.radius);
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");
      if (isNaN(value.x) || isNaN(value.y))
        throw new Error("Invalid location values.");
      defaultLocation = { x: Number(value.x), y: Number(value.y) };
    },
  });
}

/**
 * when 'new' operator is called
 * 1. create new empty object
 * 2. set 'this' to point that object
 * 3. finally return the new object (Explict return is NOT NEED!)
 */
const anthoer = new CirCle(2);
