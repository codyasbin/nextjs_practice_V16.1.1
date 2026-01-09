export default function Layout({ children, parrallelRoute }) {
  //parallel route folder has to be in the same level as this layout.jsx file
  return (
    <div className="flex border-4 border-green-500 gap-5">
      <div>{children}</div>
      <div>{parrallelRoute}</div>
    </div>
  );
}
