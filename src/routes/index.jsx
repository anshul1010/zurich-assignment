import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Sign In with Google</h1>
      </div>
    ),
  },
  {
    path: "homepage",
    element: (
      <div>
        <h1>Homepage</h1>
      </div>
    ),
    //   loader: ({ request }) =>
    //     fetch("/api/dashboard.json", {
    //       signal: request.signal,
    //     }),
  },
]);
export default router;
