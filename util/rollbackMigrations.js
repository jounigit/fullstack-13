const { rollbackMigrations } = require('./db');

const main = async () => {
  try {
    await rollbackMigrations();
    console.log('Migrations rolled back successfully');
  } catch (err) {
    console.error('Error rolling back migrations:', err);
  }
};

main();