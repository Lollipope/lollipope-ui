import Decimal from 'decimal.js'
export function isFunction(func) {
  return (
    typeof func === 'function' ||
    Object.prototype.toString.call(func) === '[object Function]'
  )
}

export function snapToGrid(grid, pendingX, pendingY, scale = 1) {
  // const x = Math.round(pendingX / scale / grid[0]) * grid[0]
  // const y = Math.round(pendingY / scale / grid[1]) * grid[1]
  const x = Decimal.mul(
    Decimal.round(Decimal.div(Decimal.div(pendingX, scale), grid[0])),
    grid[0],
  ).toNumber()

  const y = Decimal.mul(
    Decimal.round(Decimal.div(Decimal.div(pendingY, scale), grid[1])),
    grid[1],
  ).toNumber()
  return [x, y]
}

export function getSize(el) {
  const rect = el.getBoundingClientRect()

  return [parseInt(rect.width), parseInt(rect.height)]
}

export function computeWidth(parentWidth, left, right) {
  // return parentWidth - left - right
  return Decimal.sub(Decimal.sub(parentWidth, left), right).toNumber()
}

export function computeHeight(parentHeight, top, bottom) {
  // return parentHeight - top - bottom
  return Decimal.sub(Decimal.sub(parentHeight, top), bottom).toNumber()
}

export function restrictToBounds(value, min, max) {
  if (min !== null && value < min) {
    return min
  }

  if (max !== null && max < value) {
    return max
  }

  return value
}
