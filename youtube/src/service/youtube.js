class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  async search(qurey) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${qurey}&maxResults=25&type=video&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;