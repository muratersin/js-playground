export function findDeepElement(parent) {
  if (parent.childElementCount === 0) {
    return parent;
  }

  return (findDeepElement(parent.children[0]));
}

export function clearChildElements(el) {
 while (el.firstChild) {
   el.clearChild(el.firstChild)
 }
}