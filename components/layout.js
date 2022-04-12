// import custom components
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Header />
      
      <main style={styles}>
        <section style={{ width: "1024px" }}>{children}</section>
      </main>
      
    </>
  );
}
