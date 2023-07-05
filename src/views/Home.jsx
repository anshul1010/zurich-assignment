import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import UserList from "../components/UserList";
export default function Home() {
  return (
    <>
      <Header />
      <div className="container my-10">
        <UserList />
      </div>

      <Footer />
    </>
  );
}
