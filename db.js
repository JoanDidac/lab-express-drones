const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose
  .connect('mongodb://localhost/dronesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(
      `Connected to MongoDB! Database name: "${x.connections[0].name}"`
    )
  )
  .catch((err) => console.error('Error connecting to MongoDB', err));
