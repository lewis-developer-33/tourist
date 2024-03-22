import "../globals.css";

export const metadata= {
  title: "Auth",
};

export default function RootLayout({
  children,
}) {
  return (
      <div className="h-screen flex items-center justify-center">
          {children}
      </div>
  );
}
