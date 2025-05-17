import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 p-4 ml-4 mt-2">
      <div>
        <h3 className="text-4xl"> Reading Time : {readingTime}</h3>
      </div>
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>

      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
