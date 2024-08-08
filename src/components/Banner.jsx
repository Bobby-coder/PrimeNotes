function Banner({ gradient, count, title }) {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-gradient-to-r ${gradient} text-white rounded-lg shadow-lg sm:w-1/3 cursor-pointer`}
    >
      <span>{title}</span>
      <span className="text-3xl font-bold">{count}</span>
    </div>
  );
}

export default Banner;
