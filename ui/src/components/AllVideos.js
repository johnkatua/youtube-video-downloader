import React from "react";
import SingleVideo from "./SingleVideo";

const AllVideos = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8002/api/getVideos");
        const json = await response.json();
        setData(json.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("data", data);
  const videos = data;
  console.log("videos", videos);
  return (
    <div className="All--videos__container">
      <h2>All Videos</h2>
      <div className="All--videos__data">
        <SingleVideo videos={data} />
      </div>
    </div>
  );
};

export default AllVideos;
