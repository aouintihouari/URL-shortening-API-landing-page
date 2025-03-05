import React, { useState } from "react";
import ShortenLinkForm from "./ShortenLinkForm";
import ShortenedLinksList from "./ShortenedLinksList";
import AdvancedFeatures from "./AdvancedFeatures";

export default function Features() {
  const [link, setLink] = useState("");
  const [linksList, setLinksList] = useState([]);

  return (
    <section className="bg-light-gray relative mt-40 w-full">
      <ShortenLinkForm
        onLinksList={setLinksList}
        onLink={setLink}
        link={link}
      />
      {linksList.length > 0 && (
        <div className="pt-32 md:pt-20">
          {linksList.map((linkList, index) => (
            <ShortenedLinksList
              key={index}
              longLink={linkList.longLink}
              shortLink={linkList.shortLink}
            />
          ))}
        </div>
      )}
      <AdvancedFeatures />
    </section>
  );
}
