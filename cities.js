const coloradoCities = [
  "Gilcrest", "Gill", "Glade Park", "Glen Haven", "Glenwood Springs",
  "Golden", "Granby", "Grand Junction", "Grand Lake", "Greeley",
  "Green Mountain Falls", "Gunnison", "Gypsum", "Henderson", "Hesperus",
  "Holyoke", "Hygiene", "Idaho Springs", "Idledale", "Ignacio",
  "Indian Hills", "Jamestown", "Johnstown", "Kersey", "Kittredge",
  "La Jara", "Lafayette", "Lamar", "Laporte", "Larkspur",
  "Leadville", "Littleton", "Loma", "Lone Tree", "Longmont",
  "Louisville", "Loveland", "Lyons", "Mack", "Mancos",
  "Manitou Springs", "Masonville", "Mccoy", "Mead", "Milliken",
  "Minturn", "Monte Vista", "Montrose", "Monument", "Morrison",
  "Nathrop", "New Castle", "Niwot", "Ouray", "Pagosa Springs",
  "Palisade", "Palmer Lake", "Paonia", "Parachute", "Paradox",
  "Parker", "Peyton", "Pine", "Platteville", "Pritchett",
  "Pueblo", "Ramah", "Red Feather Lakes", "Ridgway", "Rifle",
  "Rush", "Rye", "Salida", "Sedalia", "Severance",
  "Sheridan Lake", "Silver Plume", "Silverthorne", "Snowmass Village", "Steamboat Springs",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < coloradoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(coloradoCities[i]);
}

module.exports = { batches };
