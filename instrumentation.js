//This module is responsible for instrumentation tasks in the application. and always runs once 
//the server starts at startup (top level). it has to be named export and functional name has to be register
export function register() {  
  console.log("Instrumentation module loaded");
}