import { useRouter } from "next/router";
import React from "react";

export default function WelcomePage() {
  const router = useRouter();
  const { name } = router.query;

  const handleClick = () => {
    console.log("button clicked");
    router.push("/")
  }

  return <div>
    <div>Welcome {name}</div>
    <button onClick={handleClick}> Go Back </button>
  </div>;
}
