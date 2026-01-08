import { cookies } from "next/headers";
import { headers } from "next/headers";


import { convertToUpperCase } from "@/utils/convertToUpperCase";

export async function GET() {
  const cookieStore = await cookies(); //getting cookies from the client request 
   const headersList = await headers(); //getting headers from the client request
  // Set a cookie for client browser
  cookieStore.set("testCookie", "hello", {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 // 1 day
  });

 
  const userAgent = headersList.get("user-agent") || "Unknown";

  
  // Read a cookie
  const testCookie = cookieStore.get("testCookie")?.value || "No cookie found";
  return new Response(`Test cookie value: ${testCookie}` + `\nUser-Agent: ${userAgent}`);
}

export async function POST(request) {  //request parameter is the incoming request object from client
    console.info("POST request received");
    const reqBody = await request.json(); //parsing the JSON body of the request
    console.warn("Request Body:", reqBody);
    const upperCasedData = convertToUpperCase(reqBody.data); //using the utility function to convert data to upper case
    console.log("Upper Cased Data:", upperCasedData);
  return new Response("POST request received");
}