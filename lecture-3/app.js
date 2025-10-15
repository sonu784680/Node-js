const sonu = require('http');


 const server = sonu.createServer((req , res)=>{
    console.log(req)});
    // process.exit();//stop the event
    
    
    const PORT = 3001;
    server.listen(PORT,()=>{
      console.log(`the running server is an address http://localhost:${PORT}`);
      
    });
 


