process.on('unhandledRejection', err => {
  console.log(`${err.message || ''}`);
  process.exit(1);
});
