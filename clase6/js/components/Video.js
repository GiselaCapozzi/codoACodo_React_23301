export default class Video {
  constructor(parentId, width, height, source, autoplay) {
    this.parentId = parentId;
    this.width = width;
    this.height = height;
    this.source = source;
    this.autoplay = autoplay;
  }

  render() {
    let myApp = document.getElementById(this.parentId);
    let myVideo = document.createElement('video');
    myVideo.setAttribute('width', this.width);
    myVideo.setAttribute('height', this.height);
    myVideo.setAttribute('src', this.source);
    myVideo.setAttribute('autoplay', this.autoplay);
    myVideo.setAttribute('controls', 'controls');
    myVideo.setAttribute('muted', 'muted');
    myApp.append(myVideo);
  }
}