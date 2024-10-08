import BlogDetails from '../Components/BlogsDetails';
import useBlogs from '../Hooks/useBlogs';

const Blogs = () => {
  const [blogs] = useBlogs();

  return (
    <>
      <main className=" flex flex-col justify-center items-center  overflow-hidden gap-10 px-[2%] md:py-[5%] py-6">
        <section className="flex flex-col gap-6 justify-center items-center flex-wrap">
          <h2 className="text-4xl capitalize c font-semibold">
            Job Category List
          </h2>
          <p className="font-semibold text-lg text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </section>
        <section className="w-full ">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-7  px-[10%]  md:px-[5%] text-white my-8 ">
            {blogs.map(el => (
              <BlogDetails key={el.id} value={el} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blogs;
