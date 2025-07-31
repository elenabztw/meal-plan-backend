const express = require('express');
const app = express();
const mongoose = require('mongoose');  // соединяем с базой данных МонгоДБ
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT =  4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'm listening in port ${PORT}`)
})



// // elenkataiwan
// // QLL4hz0cduRx4hBB

// // MONGODB_LINK = mongodb+srv://elenkataiwan:password@cluster0.jjxqeqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const routes = require('./MealRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 7000;

// mongoose.set("strictQuery", false);

// // ✅ Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.send("Server is up and running ✅");
// });

// // ✅ Mongo connection
// mongoose
//   .connect(process.env.MONGODB_LINK)
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.log(err));

// // ✅ Meals route
// app.use("/api/meals", routes);

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const routes = require('./MealRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 7000;

// // ✅ Use CORS with origin set
// app.use(cors({
//   origin: 'http://localhost:5173', // your frontend origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(express.json());

// // ✅ MongoDB connection
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.MONGODB_LINK)
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.log('❌ MongoDB connection error:', err));

// // ✅ Optional test route
// app.get("/", (req, res) => {
//   res.json({ message: "Server is working 🎉" });
// });

// // ✅ Meals API route (update to /api/meals)
// app.use("/api/meals", routes);

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
