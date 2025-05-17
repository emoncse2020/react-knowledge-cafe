import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // console.log("bookmark adding soon");
    // console.log(blog);

    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    // console.log("marks as read", time);
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
