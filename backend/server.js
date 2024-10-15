require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ccavenueRoutes = require('./routes/ccavenueRoutes');
const contactRoutes = require('./routes/contactRoutes');
const paperSubmissionRoutes = require('./routes/paperSubmissionRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', ccavenueRoutes);
app.use('/api', contactRoutes);
app.use('/api', paperSubmissionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});