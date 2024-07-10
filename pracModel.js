function elementMaker(tagName, styles, textContent) {
  const element = document.createElement(tagName);
  for (let value in styles) {
    element.style[value] = styles[value];
  }
  element.textContent = textContent;
}
//tagname과 textContent는 string, styles는 배열로 이뤄져있는 객체
const divs = ["root", "login-container", "logininput", "loginsubmit"];
const styles = {
  root: [
    "position: relative",
    "width: 100%",
    "height: 100%",
    "background: #ffffff",
    "display: flex",
    "flex-direction: column",
    "justify-content: center",
    "align-items: center",
  ],
  loginContainer: [
    "position: relative",
    "width: 556px",
    "height: 748px",
    "background: #666666",
  ],
  loginInput: [
    "position: absolute",
    "background: #d9d9d9",
    "left: 12.95%",
    "right: 13.13%",
    "top: 38.24%",
    "bottom: 50%",
  ],
  loginSubmit: [
    "position: absolute",
    "background: #9aff92",
    "left: 44.96%;%",
    "right: 13.13%",
    "top : 66.84%",
    "bottom: 21.39%",
  ],
};
const texts = ["ex"];
class DivObjMaker {
  constructor(tagName, styles, textContent) {
    this.tagName = tagName;
    this.styles = styles;
    this.textContent = textContent;
  }
}
const divMake = new DivObjMaker(divs, styles, "ex");
console.log(divMake);

for (let i = 0; i < divs.length; i++) {
  elementMaker(divs[i], styles, texts);
}
