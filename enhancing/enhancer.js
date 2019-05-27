module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  console.log('item before failing', item)
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }
  console.log('item after failing', item);

  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  console.log('item in get', item);
  if (item.enhancement === 0) {
    return item;
  } else if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`;
    return item;
  }

  return item;
}