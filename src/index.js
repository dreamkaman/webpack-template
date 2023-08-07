// import index files block
import "./index.html"; //for 'html-loader'
import "./index.scss"; //for 'mini-css-extract-plugin'

// import scripts block
import "./scripts/changeMainTitle.js";

// example of image insertion start
import avatar from "./images/avatar.png";

const image = new Image();
image.src = avatar;
image.alt = "avatar";

const imageDiv = document.querySelector(".img-wrapper");
imageDiv.append(image);
// example of image insertion finish
