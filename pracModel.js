function elementMaker(tagName, styles, textContent) {
  const element = document.createElement(tagName);
  for (let value in styles) {
    element.style[value] = styles[value];
  }
  element.textContent = textContent;
}
//tagname과 textContent는 string, styles는 배열로 이뤄져있는 객체
