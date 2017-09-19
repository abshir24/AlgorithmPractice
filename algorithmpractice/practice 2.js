function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function bubblesort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}

function insertionsort(arr){
    for(var i = 0; i<arr.length; i++){
        var key = arr[i]
        var j = i-1
        while(j >= 0 && key < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = key
    }
    return arr
}

function selectionsort(arr){
    for(var i = 0; i<arr.length ;i++){
        var minidx = i
        for(var j=i; j<arr.length;j++){
            if(arr[j] < arr[minidx]){
                minidx = j
            }
        }
        swap(arr, i, minidx)
    }
    return arr
}

function ListNode(val){
    this.val = val;
    this.next = null;
}

function SinglyList(){
    this.head = null;
}

var ssl = new SinglyList()

SinglyList.prototype.add = function(val){
    var newNode = new ListNode(val)
    if(!this.head){
        this.head = newNode
        return
    }
    var runner = this.head
    while(runner.next){
        runner = runner.next
    }
    runner.next = newNode
}

ssl.add(1)
ssl.add(2)
ssl.add(3)

SinglyList.prototype.remove = function(){
    if(!this.head){
        return
    }
    if(!this.head.next){
        this.head = null
        return
    }
    var runner = this.head
    var prev;
    while(runner.next){
        prev = runner
        runner = runner.next
    }
    prev.next = null
}

function listlength(node,count){
    if(node == null){
        return count
    }
    return listlength(node.next,count+1)
}

function unshift(list, num){
    if(!list.head || !list.head.next){
        return list
    }
    if(num >= listlength(list.head,0)){
        return list
    }
    var runner = list.head
    while(runner.next){
        runner = runner.next
    }
    while(num > 0){
        var temp = list.head
        list.head = list.head.next
        temp.next = null
        runner.next = temp
        runner = runner.next
        num--;
    }
    return list
}

function shift(list,num){
    if(!list.head || !list.head.next){
        return list
    }
    if(num >= listlength(list.head,0)){
        return list
    }
    var count = (listlength(list.head,0)) - num
    var runner = list.head
    var prev;
    while(count > 0){
        prev = runner
        runner = runner.next
        count--;
    }
    var temp = runner
    while(runner.next){
        runner = runner.next
    }

    var head = list.head
    list.head = temp
    runner.next = head
    prev.next = null
    return list
}

// var sll = shift(ssl, 1)
// console.log(sll.head.next)

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.add = function(val){
    var newNode = new Node(val)
    if(!this.root){
        this.root = newNode
        return
    }
    var runner = this.root
    while(runner){
        if(val < runner.val){
            if(!runner.left){
                runner.left = newNode
                return
            }
            runner = runner.left
        }
        if(val > runner.val){
            if(!runner.right){
                runner.right = newNode
                return
            }
            runner = runner.right
        }
    }
}

var btree = new BinarySearchTree()
btree.add(4)
btree.add(6)
btree.add(1)
btree.add(3)
btree.add(2)
btree.add(5)
btree.add(7)

BinarySearchTree.prototype.contain = function(val){
    if(!this.head){
        return false
    }else{
        var runner = this.head
        console.log(runner)
        while(runner){
            console.log("inside loop")
            if(runner.val == val){
                return true
            }
            if(val > runner){
                runner = runner.right
            }else{
                runner = runner.left
            }
        }
        return false
    }
    
}
console.log(btree.contain(6))

function findheight(node){
    if(!node){
        return 0
    }
    var leftheight = findheight(node.left)
    var rightheight = findheight(node.right)
    return Math.max(leftheight,rightheight) + 1
}

function inorder(node){
    if(!node){
        return
    }
    inorder(node.left)
    console.log(node.val)
    inorder(node.right)
}

function preorder(node){
    if(!node){
        return
    }
    console.log(node.val)
    preorder(node.left)
    preorder(node.right)
}

function postorder(node){
    if(!node){
        return
    }
    postorder(node.left)
    postorder(node.right)
    console.log(node.val)
}

function rfib(b,a, num){
    if(num==0){
        return a
    }
    return rfib(a,a+b,num-1)
}

function rfactorial(num){
    if(num == 1){
        return 1
    }
    return num * rfactorial(num-1)
}


