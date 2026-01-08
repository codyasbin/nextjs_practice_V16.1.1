//This module handles proxying requests to different services. was called middleware before
//this file has to have a default export function named proxy and takes request parameter
// this runs for every incoming request to the server
export default function proxy(request) {
  // Proxy logic
  console.log("Proxying request:", request.url);
  
}