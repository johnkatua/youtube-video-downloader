import React from "react";

const DownloadVideo = () => {
  const [url, setUrl] = React.useState({
    title: "",
    file: "",
    thumbnail: "",
    videoId: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setUrl({ ...url, [name]: value });
    };
  };

  const saveFormData = async (e) => {
    const response = await fetch("http://localhost:8002/api/createVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });
    if (response.status === 201) {
      console.log("Video saved successfully");
    } else {
      throw new Error("Error saving video");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveFormData();
      alert("Video saved successfully");
      setUrl({
        title: "",
        file: "",
        thumbnail: "",
        videoId: "",
      });
    } catch (error) {
      alert("Error saving video");
    }
  };
  console.log("url", url);
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="paste youtube link" type="text" value={url.file} onChange={set("file")} />
      <button>Download</button>
    </form>
  );
};

export default DownloadVideo;
