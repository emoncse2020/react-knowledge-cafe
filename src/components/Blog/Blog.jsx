import { FaBeer } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-3">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${cover}`}
      />
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-400 text-3xl"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 underline font-bold"
      >
        Mark As Read{" "}
      </button>
    </div>
  );
};

export default Blog;
