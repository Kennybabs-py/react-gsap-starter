// import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useGSAP } from "@gsap/react";
import { Interactions } from "./interactions";

export default function App() {
  // useEffect(() => {
  //   new Interactions();
  // });

  useGSAP(() => {
    new Interactions();
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
