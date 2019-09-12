function calcElemWidth(container) {
  const childItem = container.firstElementChild;
  const childsCount = container.children.length;
  const containerStyle = getComputedStyle(container);
  const childStyle = getComputedStyle(childItem);

  const paddingRight = containerStyle.paddingRight ? parseFloat(containerStyle.paddingRight) : 0;
  const paddingLeft = containerStyle.paddingLeft ? parseFloat(containerStyle.paddingLeft) : 0;
  const childWidth = childItem.clientWidth;
  const childMargin = childStyle.marginRight ? parseFloat(childStyle.marginRight) : 0;

  const containerWidth = paddingRight + (childWidth + childMargin) * childsCount + paddingLeft;
  return containerWidth;
}

function calcElemMarginLeft(container) {
  const containerStyle = getComputedStyle(container);
  const marginLeft = containerStyle.marginLeft ? parseFloat(containerStyle.marginLeft) : 0;
  return marginLeft;
}

module.exports.calcElemWidth = calcElemWidth;
module.exports.calcElemMarginLeft = calcElemMarginLeft;
