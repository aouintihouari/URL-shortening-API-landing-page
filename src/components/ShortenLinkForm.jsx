import { useState } from "react";

export default function ShortenLinkForm({ onLinksList, onLink, link }) {
  const token = "K9N2wwJxYX54LZxmhmMlbFyomqOOd49xaKiMEw9AnCNJ6ltbFmv7xDZBvH3M";
  const [error, setError] = useState("");

  const ShortenLink = async () => {
    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${link}&api_key=${token}`,
      );
      const shortLink = await response.text();
      const newLink = { longLink: link, shortLink };
      onLinksList((prevLinks) => [...prevLinks, newLink]);
    } catch (error) {
      console.log(error);
    }
  };

  const validateLink = (url) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/i;
    return urlPattern.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link.trim()) setError("Please add a link");
    else if (!validateLink(link)) setError("Invalid link format");
    else {
      setError("");
      ShortenLink();
    }
    onLink("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light-violet absolute -top-16 left-1/12 w-10/12 rounded-[5px] bg-[url('/src/assets/images/bg-shorten-mobile.svg')] bg-cover bg-no-repeat p-6 md:flex-row-reverse md:bg-[url('/src/assets/images/bg-shorten-desktop.svg')]"
    >
      <div className="md:gap-1/12 flex flex-col gap-4 md:flex-row md:gap-4">
        <div className="w-full md:w-9/12">
          <input
            className={`mx-auto h-[48px] w-full rounded-[5px] border-none bg-white pl-4 text-[16px] placeholder:text-[16px] md:mx-0 ${
              error && link === ""
                ? "outline-2 outline-red-500 placeholder:text-red-500"
                : "placeholder:text-dark-blue outline-none"
            }`}
            type="text"
            placeholder="Shorten a link here..."
            value={link}
            onChange={(e) => onLink(e.target.value)}
          />
        </div>
        {error && link === "" && (
          <p className="my-1 text-red-500 italic md:hidden">{error}</p>
        )}
        <button className="bg-cyan h-[48px] cursor-pointer rounded-[5px] font-bold text-white transition duration-1000 hover:brightness-115 md:w-2/12">
          Shorten it!
        </button>
      </div>
      {error && link === "" && (
        <div className="hidden md:mt-4 md:block">
          <p className="text-red italic">{error}</p>
        </div>
      )}
    </form>
  );
}
