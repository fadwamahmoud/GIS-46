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
 // TODO
}

// ---------- Remove first occurrence ----------
function remove(list, value) {
  // TODO
}


// ---------- Reverse list ----------
function reverse(list) {
// TODO
}
