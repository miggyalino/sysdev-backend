import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Button className="bg-slate-600 hover:bg-slate-500 mt-6" asChild>
      <Link href="/">Go back to Home</Link>
    </Button>
  );
};

export default HomeButton;
