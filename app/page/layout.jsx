

export default function Layout({children, parrallelRoute}) {
    return (
        <div className="flex border-4 border-green-500 gap-5">
            <div>
            {children}
            </div>
            <div>
        {
            parrallelRoute
        }
            </div>
        </div>
    );
}