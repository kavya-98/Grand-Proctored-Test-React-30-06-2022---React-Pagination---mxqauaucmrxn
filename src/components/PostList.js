import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import { PaginationButtonList } from "PaginationButtonList";
import { post } from "./Post";
const PostList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const loadData = async () => {
    fetchPosts(page, 5)
      .then((res) => res.json())
      .then((dataj) => {
        setData(dataj);
      });
  };
  useEffect(() => loadData(), []);
  useEffect(() => {
    setData(null);
    loadData();
  }, [page]);
  const clickHandler = (val) => {
    setPage(val);
  };
  return (
    <>
      {data == null ? (
        <div id="loader" className="loader">
          loading
        </div>
      ) : (
        data.map((ele) => {
          return <Post ele={ele} key={ele.id} />;
        })
      )}
      <PaginationButtonList page={page} clickHandler={clickHandler} />)
    </>
  );
};

export { PostList };
