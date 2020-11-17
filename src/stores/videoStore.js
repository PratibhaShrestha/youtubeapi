import { observable } from "mobx";
import { getVideosForChannel } from "../api/youtubeapi";

class VideoStore{
    
  @observable videos=[]

    @computed fetchVideoForChannel = (channelId, maxResults) => {
        getVideosForChannel(channelId, maxResults)
          .then(videos => {
            this.setState(prevState => ({
              videos: [...prevState.videos, ...videos],
              fetching: false
            }));
          })
          .catch(error => {
            toast.dismiss();
            toast.error(error.message);
            this.setState({ fetching: false });
          });
      };

    
}
