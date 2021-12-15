const express = require('express');
// const routes = require('./routes');
const path = require('path')


const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);
// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname,'./public/index.html'));

// });
c

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});