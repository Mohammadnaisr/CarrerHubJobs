const BlogDetails = ({ value }) => {
  return (
    <>
      <>
        <div className="cursor-pointer rounded-lg  hover:bg-[#d3d1d8] hover:text-primary   w-full h-full px-[10%] md:px-[6%] py-[9%] md:py-[10%]  justify-center items-start gap-4 bg-purple-900 shadow-[5px_5px_0px_0px_rgba(109,40,217) ] hover:-translate-y-2 transition-all duration-500  md:mx-4 my-8">
          {/* <img src={value.icon} alt={value.alt} /> */}
          <h1 className="text font-bold text-3xl">{value.title}</h1>
          <h2 className="capitalize text-2xl font-thin">{value.content}</h2>
        </div>
      </>
    </>
  );
};

export default BlogDetails;
