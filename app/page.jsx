import Link from "next/link";


export default function Page() {
    console.log("Hello from server")
  return <h1>Welcome to Next.js 16.1.1! <Link href="/page">Go to page</Link></h1>;
}