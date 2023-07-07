import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { useNavigate, Navigate } from "react-router-dom";

const clientId = GOOGLE_API_KEY;
export default function Login() {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  if (user) {
    return <Navigate to="/home" replace />;
  }
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res);
    setUser(res);
    navigate("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  useEffect(() => {
    // Run as soon as page loads
    console.log("page loaded");
  });

  return (
    <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden my-10 h-screen">
      <div className="grid place-items-center h-1/2">
        <div className="text-center sm:text-center sm:flex-grow">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
              isSignedIn={false}
            />
            {/* <GoogleLogin onSuccess={onSuccess} onError={onFailure} /> */}
          </GoogleOAuthProvider>
          {/* <button onClick={logout}>Logout</button> */}
        </div>
      </div>
    </div>
  );
}
