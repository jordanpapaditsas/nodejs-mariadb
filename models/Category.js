const EntitySchema = require('typeorm').EntitySchema;

const CategoryEntity = new EntitySchema({
  name: 'Category',
  target: 'Category',      // target = Alias that you can put for category
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    }
  }
});

module.exports = { CategoryEntity };