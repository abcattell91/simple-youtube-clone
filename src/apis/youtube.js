import axios from 'axios';

const KEY = 'AIzaSyD5-1aSp5uZ7BY3S00oxDJQLDmnXg3cZgI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
