import ServiceWorkerRegister from "@/components/serviceWorkerRegister";

export default function Layout(props) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister />
        {props.children}
      </body>
    </html>
  );
}