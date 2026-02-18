// linkedList.js

// ---------- Node ----------
function createNode(value) {
  return {
    value: value,
    next: null
  };
}

// ---------- Linked List ----------
function createLinkedList() {
  return {
    head: null,
    length: 0
  };
}

// ---------- Add to end ----------
function append(list, value) {
  const node = createNode(value);

  if (list.head === null) {
    list.head = node;
    list.length++;
    return;
  }

  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;
  list.length++;
}

// ---------- Add to start ----------
function prepend(list, value) {
  const node = createNode(value);
  node.next = list.head;
  list.head = node;
  list.length++;
}

// ---------- Remove first occurrence ----------
function remove(list, value) {
  if (list.head === null) return;

  if (list.head.value === value) {
    list.head = list.head.next;
    list.length--;
    return;
  }

  let current = list.head;
  while (current.next !== null && current.next.value !== value) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;
    list.length--;
  }
}

// ---------- Check if value exists ----------
function contains(list, value) {
  let current = list.head;
  while (current !== null) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
}

// ---------- Get value at index ----------
function getAt(list, index) {
  if (index < 0 || index >= list.length) return null;

  let current = list.head;
  let i = 0;

  while (i < index) {
    current = current.next;
    i++;
  }

  return current.value;
}

// ---------- Insert at index ----------
function insertAt(list, index, value) {
  if (index < 0 || index > list.length) return false;

  if (index === 0) {
    prepend(list, value);
    return true;
  }

  const node = createNode(value);
  let current = list.head;
  let i = 0;

  while (i < index - 1) {
    current = current.next;
    i++;
  }

  node.next = current.next;
  current.next = node;
  list.length++;
  return true;
}

// ---------- Reverse list ----------
function reverse(list) {
  let prev = null;
  let current = list.head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
}

// ---------- Convert to array ----------
function toArray(list) {
  const result = [];
  let current = list.head;

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

// ---------- Print list ----------
function printList(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// ---------- Clear list ----------
function clear(list) {
  list.head = null;
  list.length = 0;
}

// ---------- Export (optional, for Node.js) ----------
module.exports = {
  createLinkedList,
  append,
  prepend,
  remove,
  contains,
  getAt,
  insertAt,
  reverse,
  toArray,
  printList,
  clear
};
