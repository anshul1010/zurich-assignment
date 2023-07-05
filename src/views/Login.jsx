import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
import { GOOGLE_API_KEY } from "../utils/constant";
import { googleLogout } from "@react-oauth/google";

const clientId = GOOGLE_API_KEY;

export default function Login() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };
  useEffect(() => {
    // Run as soon as page loads
    console.log("page loaded");
  });
  const logout = () => {
    googleLogout();
  };
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
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
