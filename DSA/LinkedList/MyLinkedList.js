// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.length++

    return this
  }

  pop() {
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    if (!this.head) return
    let current = this.head
    let newTail
    while (current.next) {
      newTail = current
      current = current.next
    }

    newTail.next = null
    this.tail = newTail

    return this
  }

  shift() {
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      // remove the current head & the 2nd becomes the new head
      // tail will be the same
      this.head = this.head.next
    }
  }

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  get(val) {
    if (this.length === 0) return null

    let current = this.head

    while (current) {
      const next = current.next
      if (next.val === val) return next
      current = next
    }

    return null
  }

  getByIndex(i) {
    let currentIndex = 0
    let current = this.head

    while (current) {
      if (currentIndex === i) return current
      current = current.next
      currentIndex++
    }

    return null
  }

  set(i, val) {
    let currentIndex = 0
    let current = this.head

    while (current) {
      if (currentIndex === i) {
        current.val = val
        break
      }
      current = current.next
      currentIndex++
    }

    return null
  }

  insert(i, val) {
    let nodeInsertedBefore = this.getByIndex(i)
    if (!nodeInsertedBefore) return false

    let newNode = new Node(val)

    if (i === 0) {
      this.head = newNode
    } else {
      let nodeInsertedAfter = this.getByIndex(i - 1)
      nodeInsertedAfter.next = newNode
    }

    // Always
    newNode.next = nodeInsertedBefore
    this.length++
  }
}

var list = new SinglyLinkedList()

list.push('HELLO')
list.push('GOODBYE')
list.push('!')
list.push('<3')
list.push(':)')
console.log(list.getByIndex(-1))
// console.log(list)
