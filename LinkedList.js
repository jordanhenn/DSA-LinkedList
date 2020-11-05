class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newItem, item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            newNext = this.head
            this.head = new _Node(newItem, newNext)
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = new _Node(newItem, currNode)
    }

    insertAfter(newItem, item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            const newNext = this.head.next
            this.head.next = new _Node(newItem, newNext)
            return;
        }

        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return 'Item not found';
            }
            else {
                currNode = currNode.next;
            }
        }
        const newNext = currNode.next
        currNode.next = new _Node(newItem, newNext)
    }

    insertAt(newItem, position) {
        let currPosition = 1;
        let currNode = this.head;
        let previousNode = this.head;

        for (let i = 1; i <= position; i++) {
            previousNode = currNode;
            currNode = currNode.next;
            currPosition++
        }
        if (currNode === null) {
            console.log(`Position doesn't exist`);
            return;
        }
        previousNode.next = new _Node(newItem, currNode)
    }
}

function display(list) {
    let result = []
    if (list.head === null) {
        return 'List is empty'
    }
    else {
        let tempNode = list.head;
        while (tempNode !== null) {
            result.push(tempNode)
            tempNode = tempNode.next;
        }
        return result
    }
}

function size(list) {
    let size = 1
    if (list.head === null) {
        return 0
    }
    else {
        let tempNode = list.head;
        while (tempNode.next !== null) {
            size++
            tempNode = tempNode.next;
        }
        return size
    }
}

function isEmpty(list) {
    if (list.head === null) {
        return 'List is empty'
    }
    else {
        return 'List is not empty'
    }
}

function findPrevious(list, item) {
    if (!list.head) {
        return null;
    }

    if (list.head.value === item) {
        return `${item} is the first item in the list.`
    }

    let currNode = list.head;
    let previousNode = list.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
   return previousNode
}

function findLast(list) {
    if (!list.head) {
        return null;
    }

    if (list.head.next === null) {
        return list.head
    }

    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
}


function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');
    console.log(display(SLL));
    console.log(size(SLL));
    console.log(isEmpty(SLL));
    console.log(findPrevious(SLL, 'Helo'));
    console.log(findLast(SLL));
    console.log(middleOfList(SLL))
    console.log(thirdFromEnd(SLL))
    let CycleList = new LinkedList();
    CycleList.insertFirst('Apollo');
    CycleList.insertLast('Loomer');
    CycleList.insertLast('Zoomer');
    CycleList.insertLast('Boomer');
    CycleList.insertLast('Coomer');
    CycleList.insertLast('Zoomer');
    console.log(cycleList(CycleList));
}

main()


//Mystery program

//It looks like this function is removed duplicates. It has a polynomial time complexity (O(n^k) 
//since the data must go through two while loops)
function WhatDoesThisProgramDo(lst) {
    //current item is set to the first node (the head) of the lst list
    let current = lst.head;
    //while the current node is not null, iterate
    while (current !== null) {
        //set a new variable newNode equal the current node
        let newNode = current;
        //while .next is not null, iterate
        while (newNode.next !== null) {
            //if the next value of the current node is equal to the current nodes value
            if (newNode.next.value === current.value) {
                //set the next value of the newNode to the value of node that occurs after the next node
                newNode.next = newNode.next.next;
            }
            else {
            //otherwise, increment the value of newNode to the next node
                newNode = newNode.next;
            }
        }
        //increment that value of the current node to the next node
        current = current.next;
    }
}

function reverseList(list) {
    if (!list.head) {
        return null;
    }

    let currPosition = 1;
    let currNode = list.head;
    let previousNode = list.head;

    while ((currNode !== null)) {
        previousNode = currNode;
        currNode = currNode.next;
        if (currPosition = 1) {
            currNode.next = null
            currPosition++
        }
        currNode.next = previousNode
    }
    return list
}

function thirdFromEnd(list) {
    let size = 1
    if (list.head === null) {
        return null
    }
    else {
        let tempNode = list.head;
        while (tempNode.next !== null) {
            size++
            tempNode = tempNode.next;
        }
    }
    let currNode = list.head
    for (let i = 1; i < (size - 3); i ++) {
        currNode = currNode.next
    }
    return currNode
}

function middleOfList(list) {
    let slowNode = list.head
    let fastNode = list.head
    
    while (fastNode && fastNode.next) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    }
    return slowNode
}

function cycleList(list) {
    let slowNode = list.head
    let fastNode = list.head
    
    while (fastNode && fastNode.next) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next

        if (slowNode === fastNode) {
            return true
        }
    }
    return false
}

function sortList(list) {
    let currNode = list.head
    let nextNode = currNode.next
    
    while (nextNode.next !== null) {
        if (currNode.value > nextNode) {
            currNode.next = nextNode.next
            nextNode.next = currNode
        }
        currNode = currNode.next
        nextNode = nextNode.next
    }
    return list
}