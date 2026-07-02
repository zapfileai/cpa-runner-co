const coloradoCities = [
  "Sterling", "Stoneham", "Strasburg", "Telluride", "Thornton",
  "Timnath", "Trinchera", "Trinidad", "Twin Lakes", "Vail",
  "Wellington", "Westcliffe", "Westminster", "Wetmore", "Wheat Ridge",
  "Wiggins", "Wiley", "Windsor", "Winter Park", "Woodland Park",
  "Wray", "Yoder",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < coloradoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(coloradoCities[i]);
}

module.exports = { batches };
