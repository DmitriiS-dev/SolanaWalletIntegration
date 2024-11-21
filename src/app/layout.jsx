import AppWalletProvider from "./components/AppWalletProvider";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AppWalletProvider>{children}</AppWalletProvider>
    </body>
  </html>
);

export default RootLayout;
