export default async function Page(props) {  //props is an object that contains various properties including params and 
// searchParams with promise support
    let data= await props.params  
console.log("params received in Page component:", data);
return (
    <>
    <h1>Props Helper Page</h1>
    </>
)
}