function elementMaker(tagName, styles, textContent) {
  const element = document.createElement(tagName);
  for (let value in styles) {
    element.style[value] = styles[value];
  }
  element.textContent = textContent;
  return element;
}
//tagname과 textContent는 string, styles는 배열로 이뤄져있는 객체
const divs = ["root", "loginContainer", "loginInput", "loginSubmit"];
const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    position: "relative",
    width: "556px",
    height: "748px",
    background: "#666666",
  },
  loginInput: {
    position: "absolute",
    background: "#d9d9d9",
    left: "12.95%",
    right: "13.13%",
    top: "38.24%",
    bottom: "50%",
  },
  loginSubmit: {
    position: "absolute",
    background: "#9aff92",
    left: "44.96%",
    right: "13.13%",
    top: "66.84%",
    bottom: "21.39%",
  },
};

const texts = [
  "Root Element",
  "Login Container",
  "Login Input",
  "Login Submit",
];
class DivObjMaker {
  constructor(tagName, styles, textContent) {
    this.tagName = tagName;
    this.styles = styles;
    this.textContent = textContent;
  }
}
const divMake = new DivObjMaker(divs, styles, texts);
console.log(divMake);

for (let i = 0; i < divMake.tagName.length; i++) {
  let styleKey = Object.keys(divMake.styles)[i];

  appendToBody(
    elementMaker(
      divMake.tagName[i],
      divMake.styles[styleKey],
      divMake.textContent[i]
    )
  );
}

function appendToBody(element) {
  document.body.appendChild(element);
  //body에 한꺼번에 append 하기 때문에 모두 형제
}
