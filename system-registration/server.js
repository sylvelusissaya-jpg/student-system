const express = require('express');
const app = express();
const PORT = 3001;

// Route ya test
app.get('/students', (req, res) => {
  res.json([
    { id: 1, name: "Issaya" },
    { id: 2, name: "Student Example" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});