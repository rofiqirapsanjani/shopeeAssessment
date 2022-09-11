const express = require('express');
const app = express();

app.get('/getUserIp', function(req, res) {
  const ipAddress = req.socket.remoteAddress();
  res.send("User Address: " + ipAddress);
});
app.listen(80, () => console.log('server is running on port 80'));
