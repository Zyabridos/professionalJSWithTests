const mapping = {
  pair: (tag) => {
    const [name, body] = [tag.name, tag.body];
    let attributes = '';
    for (const tagName in tag) {
      if (tagName !== 'name' && tagName !== 'body' && tagName !== 'tagType') {
        attributes += `${tagName}=\"${tag[tagName]}\" `;
      }
    }
    if (attributes) {
      return `<${name} ${attributes.trim()}>${body}</${name}>`;
    } else {
      return `<${name}>${body}</${name}>`;
    }
  },
  single: (tag) => {
    const name = tag.name;
    let attributes = '';
    for (const tagName in tag) {
      if (tagName !== 'name' && tagName !== 'tagType') {
        attributes += `${tagName}=\"${tag[tagName]}\" `;
      }
    }
    if (attributes) {
      return `<${name} ${attributes.trim()}>`;
    } else {
      return `<${name}>`;
    }
  },
};

export default function stringify(tagObj) {
  const res = mapping[tagObj.tagType](tagObj);
  return res;
}