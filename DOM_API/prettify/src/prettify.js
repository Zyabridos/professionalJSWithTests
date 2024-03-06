export default (document) => {
  const divs = Array.from(document.getElementsByTagName('div'));
  divs.map((div) => {
    const textNodes = Array.from(div.childNodes)
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    return textNodes.map((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
