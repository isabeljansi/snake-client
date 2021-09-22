const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133' , // IP address here,
    port: 50542 // PORT number here,
  });

  // code that does something when the connection is first established
  conn.on("connect", () => {
    console.log("Isabel Connected to snek server");
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //code that does something when the connection is terminated
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('Isabel disconnected from server');
  });
 
  return conn;
};

console.log("Connecting ...");

connect();

