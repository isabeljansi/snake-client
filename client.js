
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
    conn.write('Name: IJP');
    



const moveUp = (moveActions) => {
  for (let i = 0; i < moveActions.length; i++) {
    waitTime = 100 * (i + 1)
    setTimeout(() => {
      conn.write(moveActions[i]);
    }, waitTime)
  }
}
const moveDirection = ['Move: up','Move: up','Move: up','Move: up','Move: up','Move: up','Move: up','Move: left','Move: left','Move: right','Move: right','Move: up'];

moveUp(moveDirection);

  });

// //CODE FROM SPINNER TO SETTIME OUT 

// const printWordsForEvery1Sec = (moveActions) => {
//   for (let i = 0; i < moveActions.length; i++) {
//     waitTime = 100 * (i + 1)
//     setTimeout(() => {
//       conn.write(`${move.Actions[i]}`);
//     }, waitTime)
//   }
// }

// const moveDirection = ['Move: up','Move: up','Move: left','Move: left','Move: right','Move: right','Move: up'];
// printWordsForEvery1Sec(moveDirection);
//----


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

module.exports = {connect};