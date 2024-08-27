/**
 * 获取元素的 XPath
 *
 * @param {(Element | null)} element DOM 元素
 * @return {*}  {(string | null)}
 */
export const getElementXPath = (element: Element | null): string | null => {
  if (!element) {
    return null;
  }

  if (element === document.body) {
    return '/html/body';
  }

  let path = '';
  while (element && element.nodeType === Node.ELEMENT_NODE) {
    let index = 0;
    let sibling = element.previousSibling;

    while (sibling) {
      if (
        sibling.nodeType === Node.ELEMENT_NODE &&
        (sibling as Element).nodeName === element.nodeName
      ) {
        index++;
      }
      sibling = sibling.previousSibling;
    }

    const tagName = element.nodeName.toLowerCase();
    const position = index ? `[${index + 1}]` : '';
    path = `/${tagName}${position}${path}`;
    element = element.parentElement;
  }

  return path;
};
