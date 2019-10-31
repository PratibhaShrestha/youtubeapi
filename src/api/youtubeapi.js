import API from "./API";

/**
 * Getting the videos for the channelId using the youtube API
 *
 * @param {the channelId to fetch videos for} channelId
 * @param {maxResults to fetch} maxResults
 * return a promise with video.list or error !
 */
export const getVideosForChannel = (channelId, maxResults) =>
  new Promise(async (resolve, reject) => {
    await API.get("/search", {
      params: {
        channelId: channelId,
        order: "date",
        maxResults: maxResults
      }
    })
      .then(response => {
        if (response !== null) resolve(response.data.items);
      })
      .catch(error => {
        console.log("Error", error);
        reject(error);
      });
  });
