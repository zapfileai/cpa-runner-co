const coloradoCities = [
  "Agate", "Aguilar", "Alamosa", "Anton", "Antonito",
  "Arapahoe", "Arriba", "Arvada", "Aspen", "Aurora",
  "Avon", "Bailey", "Basalt", "Bayfield", "Bellvue",
  "Berthoud", "Beulah", "Black Hawk", "Boulder", "Breckenridge",
  "Briggsdale", "Brighton", "Broomfield", "Buena Vista", "Buffalo Creek",
  "Byers", "Calhan", "Canon City", "Carbondale", "Cascade",
  "Castle Rock", "Cedaredge", "Center", "Central City", "Cimarron",
  "Clifton", "Coalmont", "Collbran", "Colorado Springs", "Commerce City",
  "Como", "Conifer", "Cope", "Cortez", "Cory",
  "Cowdrey", "Craig", "Crested Butte", "Cripple Creek", "Delta",
  "Denver", "Dillon", "Divide", "Dolores", "Dumont",
  "Durango", "Eagle", "Eaton", "Edwards", "Elbert",
  "Elizabeth", "Empire", "Englewood", "Erie", "Estes Park",
  "Evans", "Evergreen", "Fleming", "Florissant", "Fort Collins",
  "Fort Lupton", "Fort Morgan", "Fowler", "Franktown", "Fraser",
  "Frederick", "Frisco", "Fruita", "Galeton", "Gardner",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < coloradoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(coloradoCities[i]);
}

module.exports = { batches };
