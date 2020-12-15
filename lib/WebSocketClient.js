const WebSocket = require('ws');

//Create websocket and connect to the server
try {
    const gent_ws = new WebSocket('ws://velopark.ilabt.imec.be/data/live/kortrijk');
    //const kortrijk_ws = new WebSocket('ws://localhost:8080/data/live/kortrijk');

    //When the client receive a message, print out the data
    gent_ws.on('message', data => {
        console.log('Data received from the Gent Interface Websocket:');
        console.log('-----------------------------------------------');
        console.log(data.toString());
    });
} catch (err) {
    console.error(err);
}

//When the client receive a message, print out the data
/*kortrijk_ws.on('message', data => {
    console.log('Data received from the Kortrijk Interface Websocket:');
    console.log('---------------------------------------------------------');
    console.log(data.toString());
});*/
