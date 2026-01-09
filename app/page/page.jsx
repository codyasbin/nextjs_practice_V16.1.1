export  default async function Page() {  //manually made this async function to simulate loading state
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
    await promise;
    return <h1>Welcome to Next.js 16.1.1!</h1>;
}