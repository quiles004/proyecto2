use("proyecto2")

db.inventory.insertMany([
   { item: "agenda", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "cuaderno", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "folios", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "libro", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "carta", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
db.inventory.find({})
db.inventory.find ({ status:{$eq: "A"}})
