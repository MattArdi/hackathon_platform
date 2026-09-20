const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/hackathons", require("./routes/hackathons"));
app.use("/api/challenge-statements", require("./routes/challengeStatements"));
app.use("/api/proposals", require("./routes/proposals"));
app.use("/api/demand-drivers", require("./routes/demandDrivers"));
app.use("/api/users", require("./routes/users"));
app.use("/api/content", require("./routes/content"));
app.use("/api/events", require("./routes/events"));
app.use("/api/messages", require("./routes/messages"));
app.use("/api/reports", require("./routes/reports"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`backend listening on ${PORT}`));
