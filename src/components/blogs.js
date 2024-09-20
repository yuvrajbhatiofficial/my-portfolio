import React from "react";

const Blog = () => {
  return (
    <>
      <section className="bg-dark pb-10 pt-20 flex justify-center lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex  flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                 
                </span>
                <h2 className="mb-4 text-3xl font-bold font-mono text-white sm:text-4xl md:text-[40px]">
                  My Recent Blogs
                </h2>
                <p className="text-base text-body-color font-mono text-white ">
                Exploring the Cutting Edge of Technology: Insights, Innovations, and Personal Reflections from My Tech Journey.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Jun 23, 2024"
              CardTitle="Learn React for Beginners"
              CardDescription="Kickstart your journey into web development with this comprehensive React guide! Discover the basics of components, state, and hooks, and build dynamic user interfaces with ease. Perfect for aspiring developers."
              image="https://img.freepik.com/free-vector/young-person-learning-courses-online_23-2148522854.jpg?t=st=1726832031~exp=1726835631~hmac=aeb9fcd872fb5e3c367a30ea20ac07992972778288d22a5c6c5d854b8f259026&w=2000"
              />
            <BlogCard
              date="Jul 4, 2024"
              CardTitle="Understanding APIs"
              CardDescription=" Dive into the world of APIs and learn how they connect applications, streamline data exchange, and power modern web development. Perfect for developers looking to integrate third-party services and build robust applications!"
              image="https://img.freepik.com/free-vector/gradient-api-infographic_23-2149371582.jpg?t=st=1726832069~exp=1726835669~hmac=faa482856dce9201184be995bbc95c334df39a4a04acd49cc8415d98297c7b1d&w=2000"
            />
            <BlogCard
              date="Aug 22, 2024"
              CardTitle="Introduction to Git and GitHub"
              CardDescription=" Learn the essentials of version control with Git and how to collaborate seamlessly using GitHub. Whether you're working solo or in a team, mastering Git is key to efficient coding and project management!"
              image="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149379660.jpg?t=st=1726832107~exp=1726835707~hmac=722c40fe35077f45a98f842ddbd27e01228665518347660c15f2b64e6d89ccff&w=2000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full  px-4 md:w-1/2 hover:bg-slate-900 lg:w-1/3">
        <div className="mb-10 w-full ">
          <div className="mb-8 overflow-hidden   rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-blue-700 font-mono px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-white  sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color text-white">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
