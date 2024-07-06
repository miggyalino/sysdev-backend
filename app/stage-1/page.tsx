import HomeButton from "@/components/HomeButton";
import { getFavoriteProgrammingLanguage } from "@/fetchUtils/language";
import React from "react";

const Stage1 = async () => {
  const favoriteLanguage = await getFavoriteProgrammingLanguage();

  return (
    <div className="h-screen bg-slate-900">
      <p className="text-yellow-200 font-semibold">
        {favoriteLanguage.message}
      </p>
      <HomeButton />
    </div>
  );
};

export default Stage1;
