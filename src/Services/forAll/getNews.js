import axios from "axios";
import baseURL from "../../components/api";

async function getNews() {
  try {
    const response = await axios.get(baseURL + "/news/get-all-news");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getImage(newsId) {
  try {
    const response = await axios.get(
      baseURL + "/news/download-news-image/" + newsId,
      {
        responseType: "arraybuffer", // Specify the response type as arraybuffer
      }
    );

    const imageBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    return imageBlob;
  } catch (error) {
    throw error;
  }
}

export default getNews;
