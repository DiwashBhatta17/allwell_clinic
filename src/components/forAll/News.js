import { useEffect, useState } from "react";
import getNews, { getImage } from "../../Services/forAll/getNews";
import defaultImgURL from "../../Page//Users/UserImages/vaccine.png";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [imgURLs, setImgURLs] = useState([]); // Array to store image URLs
  // Default image URL

  async function fetchNews() {
    try {
      const response = await getNews();
      if (response) {
        for (let i = 0; i < response.length; i++) {
          let imageUrl = await fetchImages(response[i]?.newsId);
          response[i]["imgUrl"] = imageUrl;
        }
        setNewsList(response);
      }
    } catch (error) {
      console.error("Cannot get the News", error);
    }
  }

  async function fetchImages(newsId) {
    try {
      const response = await getImage(newsId);
      return URL.createObjectURL(response);
    } catch (error) {
      console.error("Cannot get images", error);
      return [];
    }
  }

  useEffect(() => {
    console.log("It works");
    fetchNews();
  }, []);

  // Function to fetch image by newsId (similar to your getImage function)

  return (
    <>
      <div className="mx-[120px] mt-5 mb-5 ">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-[40px]">
          {newsList.map((value, index) => {
            return (
              <div key={index} className="w-[350px] h-[340px] border shadow">
                <div>
                  <img
                    className="w-full mb-1 h-[190px]"
                    src={value.imgUrl}
                    alt="img"
                  />

                  <div className="gap-b-2 mx-1">
                    <h1 className="text-xl font-bold mb-1">{value.headLine}</h1>
                    <p>{value.newsBody}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
// Please note that you need to implement the getImage function that fetches the image data based on the newsId. Also, update the defaultImgURL with the appropriate default image URL if needed.
