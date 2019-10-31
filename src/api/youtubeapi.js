import API from "./API";

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
