const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Sin las opciones obsoletas
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = { dbConnection };
