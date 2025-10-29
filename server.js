const express = require('express');
const app = express();
const PORT = 3000;

const contactRouter = require('./Router/cont');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
