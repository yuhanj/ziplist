const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(l1, l2) {
  const result = [];
  for (let i = 0; i < l1.length; i++) {
    result.push(l1[i], l2[i]);
  }
  return result;
}

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
