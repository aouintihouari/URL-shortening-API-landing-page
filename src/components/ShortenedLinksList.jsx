import { useState } from "react";

export default function ShortenedLinksList({ longLink, shortLink }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mx-auto mt-5 flex w-10/12 flex-col justify-between rounded-[5px] bg-white p-4 md:flex-row md:items-center md:justify-between">
      <p className="text-dark-blue overflow-hidden overflow-ellipsis whitespace-nowrap md:w-6/12">
        {longLink}
      </p>
      <div className="bg-grayish-violet my-4 h-[0.07px] w-full md:hidden"></div>
      <div className="md:flex md:flex-row md:items-center md:gap-14">
        <p className="text-cyan">{shortLink}</p>
        <button
          className={`align-center mt-5 flex h-[40px] w-full cursor-pointer items-center justify-center self-start rounded-[5px] text-white md:mt-0 md:w-[103px] ${copied ? "bg-light-violet" : "bg-cyan hover:opacity-75"}`}
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
