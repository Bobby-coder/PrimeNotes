import { Search } from "lucide-react";
import Banner from "./Banner";

function Header() {
  {
    /*Banner data*/
  }
  const bannerData = [
    {
      gradient: "from-pink-500 to-orange-400",
      count: 27,
      title: "All",
    },
    {
      gradient: "from-purple-500 to-blue-400",
      count: 9,
      title: "Pending",
    },
    {
      gradient: "from-green-400 to-teal-400",
      count: 18,
      title: "Completed",
    },
  ];

  return (
    <header>
      {/*Title and Search*/}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Prime Notes
        </h1>

        {/*Search Input*/}
        <div className="flex items-center border rounded-lg p-2 bg-white w-full sm:w-1/3 sm:mb-[-12px]">
          <Search strokeWidth={2} className="w-4 h-4 text-gray-500 mr-2" />
          <input
            placeholder="Search tasks"
            className="w-full outline-none border-none bg-white text-gray-700 placeholder-gray-400"
            type="text"
          />
        </div>
      </div>

      {/*Banners*/}
      <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:space-y-0 sm:space-x-4">
        {bannerData.map(({ gradient, count, title }) => (
          <Banner
            key={crypto.randomUUID()}
            gradient={gradient}
            count={count}
            title={title}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
