const express = require("express");
const connectDB = require("./config/db");

const workshopRoutes = require("./routes/workshopRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/workshops", workshopRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/maintenances", maintenanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


