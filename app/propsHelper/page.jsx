export default async function Page(props) {
    let data= await props.params
console.log("params received in Page component:", data);
return (
    <>
    <h1>Props Helper Page</h1>
    </>
)
}