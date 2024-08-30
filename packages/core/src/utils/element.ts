import { interceptStr } from './transform';

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

/**
 * html 元素转字符串
 *
 * - tagName + id + class集合 + datasets + 文本(裁剪前250个字符)
 *
 * @param {HTMLElement} target
 * @return {*}  {string}
 */
export function htmlElementAsString(target: HTMLElement): string {
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'body') {
    return '';
  }
  let classNames = target.classList.value;
  classNames = classNames !== '' ? ` class='${classNames}'` : '';
  const id = target.id ? ` id="${target.id}"` : '';
  // datasets
  let datasetResult = '';
  const dataset = target.dataset;
  for (const [key, value] of Object.entries(dataset)) {
    datasetResult += `${key}_${value};`;
  }
  datasetResult = datasetResult ? ` dataset=[${datasetResult}]` : '';

  const { innerText } = target;
  return `<${tagName}${id}${classNames !== '' ? classNames : ''}${datasetResult}>${interceptStr(innerText, 250)}</${tagName}>`;
}

/**
 * 据鼠标指针事件获取目标 DOM 元素
 *
 * @param {PointerEvent} ev 鼠标指针事件对象
 * @return {*}
 */
export const getTargetDomByPointerEvent = (ev: PointerEvent): HTMLElement | null => {
  const el = document.elementFromPoint(ev.pageX, ev.pageY);
  return el ? (el as HTMLElement) : null;
};
