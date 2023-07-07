import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import UserList from "../components/UserList";
import { Navigate } from "react-router-dom";

export default function Home({ user }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
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
