import "../globals.css";
import UserLayout from "./UserLayout";

export const metadata= {
  title: "Tour Guide",
};

export default function RootLayout({
  children,
}) {
  return (
      <div>
        {/* <UserLayout> */}
          {children}
        {/* </UserLayout> */}
      </div>
  );
}
