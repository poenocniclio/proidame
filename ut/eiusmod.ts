// Example of a ViewsCollectionGeometry object
let viewsGeometry: ViewsCollectionGeometry = {
    'view1': { x: 10, y: 20, width: 200, height: 150 },
    'view2': { x: 50, y: 80, width: 300, height: 200 },
    // Add more views as needed
};

// Accessing individual view's geometry
console.log(viewsGeometry['view1'].width); // Output: 200
console.log(viewsGeometry['view2'].height); // Output: 200
