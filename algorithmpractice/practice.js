// function isRotation(string1,string2){
//     var count2 = 0
//     var count = 0
//     while(string1[0] !== string2[count2] ){
//         count2++
//     }

//     while(count < string1.length){
//         if(count2 == string2.length){
//             count2 = 0
//         }
//         if(string1[count] === string2[count2]){
//             count++;
//             count2++
//         }else{
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true
// }

// isRotation("Is Rotation", "onIs Rotat")



// function floodfill(grid,start,val){
//     var prev = grid[start[0]][start[1]]
//     grid[start[0]][start[1]] = val
//     var y = start[0]
//     var x = start[1]
//     if(x-1 !== grid.length ){
//         if(grid[y][x-1] == prev){
//             floodfill(grid,[y,x-1],val)
//         }
//     }
//     if(x+1 !== grid.length ){
//         if(grid[y][x+1] == prev){
//             floodfill(grid,[y,x+1],val)
//         }
//     }
//     if(y-1 >=0){
//         if(grid[y-1][x] == prev){
//             floodfill(grid,[y-1,x],val)
//          }
//     }
//     if(y+1 !== grid[0].length){
//         if(grid[y+1][x] == prev){
//             floodfill(grid,[y+1,x],val)
//         }
//     }
//     return grid
// }

// console.log(floodfill([[3,2,3,4,3],[2,3,3,4,0],[7,3,3,5,3],[6,5,3,4,1],[1,2,3,3,3]], [2,2], 1))

// function stringtoword(string){
//     var arr = []
//     var str2 = " "
//     for(var i = 0;i<string.length; i++){
//         if(string[i]===" "){
//             arr.push(str2)
//             str2=""
//         }
//         str2 += string[i]
//     }
//     arr.push(str2)

//     // console.log(arr)
//     return arr
// }
// // stringtoword("Life is not a joke!")

// function longestword(string){
//     var arr = stringtoword(string)
//     var max = arr[0]
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i].length > max){
//             max = arr[i]
//         }
//     }
//     console.log(max)
//     return
// }

// longestword("wassup man!")

// function stringreverse(string){
//     var arr = stringtoword(string)
//     console.log(arr)
//     string2 = ""
//     for(var i = arr.length; i>=0; i--){
//         string2+=arr[i]
//     }
//     console.log(string2)
//     return string2
// }

// stringreverse("this is not a test")

// function uniquewords(string){
//     var arr = stringtoword(string)
//     // console.log(arr)
//     var obj = {}
//     var string2 = ""
//     for(var i = 0; i<arr.length; i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]] = 1
//         }else{
//             obj[arr[i]] += 1
//             continue
//         }
//     }
//     for(var key in obj){
//         if(obj[key] == 1){
//             string2+= key
//         }
//     }
//     console.log(string2)
//     return
// }

// uniquewords("Sing! Sing a song; sing out loud; sing out strong.")

// function stringrotate(string,int){
//     var string2 = ""
//     var len = string.length
//     var count = int
//     while(count>0){
//         string2+=string[len-count]
//         count--;
//     }
//     // console.log(string2)
//     // console.log(int)
//     for(var i=0; i<len-int;i++){
//         string2+=string[i]
//     }
//     // console.log(string2)
//     return string2
// }

// stringrotate("team",4)

// function isRotation(string1,string2){
//     while()
// }
// isRotation("Is Rotation","ionIs Rotat")

// function removeAt(arr,indx){
//     for(var i = indx; i <arr.length -1; i++){
//         var temp = arr[i+1];
//         arr[i+1]= arr[i]
//         arr[i] = temp
//     }
    
//     return arr.pop()
// }

// var array = [1,2,3,4,5]

// removeAt(array,0)
// console.log(array)

// function history(current,history){
//     for(var i =0; i<current.length;i++){
//         for(var j=0; j<history.length;j++){
//             for(var k = 0; k < history[j].length;k++){
//                 if(current[i] === history[j][k]){
//                     removeAt(current,i)
//                     break
//                 }
//             }
//         }
//     }
//     history.push(current)
//     console.log("current", current)
//     console.log("history", history)
// }

// history([ "xxx", "aaa", "yyy", "hij" ], [[ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]])
//pre made function from coding dojo algorithm challenges
// function removeAt(arr,indx){
//     for(var i = indx; i <arr.length -1; i++){
//         var temp = arr[i+1];
//         arr[i+1]= arr[i]
//         arr[i] = temp
//     }
//     arr.pop()
//     return arr
// }

// function history(current,history){
//     var merged= [].concat.apply([], history);
//     var newstrings =[]
//     var condition = true
//     for(var i =0; i < current.length; i++){
//         for(var j=0; j<merged.length; j++){
//             if(current[i]=== merged[j]){
//                 condition = true
//                 break
//             }
//             condition = false
//         }
//        if(!condition){
//         newstrings.push(current[i])
//        }
//     }
//     history.push(newstrings)
//     var newhistory = removeAt(history,0)

//     return newhistory, newstrings
// }

// history([ "xxx", "aaa", "yyy", "hij" ], [[ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]])

// function censor(string,arr){
//    var str = [];
//    var m=0; 
//    var index=0; 
//    count=0
//    for(var i=0; i<string.length;i++){
//         str.push(string[i])
//    }
//    for(var i=0; i<arr.length;i++){
//        for(var j=0;j<str.length;j++){
//            if(str[j] === arr[i][m]){
//                m++;
//            }else{
//                m=0
//            }
//            if(m==arr[i].length){
//                console.log("inside",j)
//                index = j
//                count = arr[i].length
//                while(count > 0){
//                    str[index] = "x"
//                    index--;
//                    count--;
//                }
//                count =0
//                m=0
//                 index=0
//            }
//        }
       
//    }
// //    console.log(str)
//    var newstr=""
//    for(var i=0; i<str.length;i++){
//        newstr+=str[i]
//    }
// console.log(newstr)
//    return
// }
// censor("snap crackle pop nincompoop", ["crack", "poop"])

// function uniqueChar(string){
//     var obj = {}
//     for(var i = 0; i<string.length; i++){
//         if(!obj[string[i]]){
//             obj[string[i]] = [0,i]
//         }else{
//             obj[string[i]][0] +=1
//         }
//     }
//     console.log(obj)
//     for(key in obj){
//         if(obj[key][0]==0){
//             console.log(obj[key][1])
//             return obj[key][1]
//         }
//     }
// }

// uniqueChar("empathetic monarch meets primo stinker")

// function unique(string){
//     var obj = {}
//     var string2 = ""
//     for(var i=0; i<string.length;i++){
//         if(obj[string[i]] == undefined){
//             obj[string[i]] = 0
//         }else{
//             console.log("else")
//             obj[string[i]] += 1
//         }
//     }
//     console.log(obj)
//     for(key in obj){
//         if(obj[key] == 0){
//             string2+=key
//         }
//     }
//     console.log(string2)
//     return
// }

// unique("Snap! Crackle! Poop!")

// function convertnumbertoenglish(num){
//   if(num.toString().length>13){
//     return "too big"
//   }
//   if(num===0){
//     return "zero"
//   }
//   var tenmap=['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
//   var tensmap=['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
//   var thousandmap=['','thousand', 'million', 'billion', 'trillion']
//   var digit=0
//   var result=""
//   while(true){
//     var threepart=num%1000
//     var tenpart=threepart%100
//     var hundredpart=Math.floor(threepart/100)
//     var onepart=""
//     var tempresult=""
//     if(tenpart<20){
//       tempresult+=tenmap[tenpart]
//     } else {
//       tempresult=tensmap[Math.floor(tenpart/10)]+" "+ tenmap[tenpart%10]
//     }
//     if(hundredpart!==0){
//       tempresult=tenmap[hundredpart]+"hundred "+ tempresult
//     }
//     result=tempresult+thousandmap[digit]+" "+ result
//     num=Math.floor(num/1000)
//     if(num===0){
//       break
//     }
//     digit++
//   }
//   return result
// }
// var num1=17
// var num=7840262146  //7,840,262,146
// console.log(convertnumbertoenglish(num1));
// console.log(convertnumbertoenglish(num));


// function ispermutation(string1,string2){
//     var arr =[]
//     if(string1.length !== string2.length){
//         return false
//     }
//     for(var i=0;i<string1.length-1;i++){
//         arr.push(string1[i])
//         arr.push(string2[i])
//     }
//     arr.sort()
//     console.log(arr)
//     for(var i=0;i<arr.length; i+=2){
//         if(arr[i] !== arr[i+1]){
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true
// }

// ispermutation("mister", "ster")

// function ispanagram(string){
//     string = string.toLowerCase()
//     var obj = {"a":0,
//                "b":0,
//                "c":0,
//                "d":0,
//                "e":0,
//                "f":0,
//                "g":0,
//                "h":0,
//                "i":0,
//                "j":0,
//                "k":0,
//                "l":0,
//                "m":0,
//                "n":0,
//                "o":0,
//                "p":0,
//                "q":0,
//                "r":0,
//                "s":0,
//                "t":0,
//                "u":0,
//                "v":0,
//                "w":0,
//                "x":0,
//                "y":0,
//                "z":0
//             }
//     for(var i=0; i<string.length; i++){
//         if(obj[string[i]] !== undefined){
//             obj[string[i]]+=1; 
//         }
//     }
//     console.log(obj)
//     for(key in obj){
//         if(obj[key] >= 1){
//             continue;
//         }else{
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true
// }

// ispanagram("How quilckly daft jumping zebras vex!")

// fun

// function allpermutations(string){
//     var arr = []
//     var string2;
//     var tempstring =string
//     var split = []
//     var midarr = []
//     var obj = {}
//     for(var i=0; i<tempstring.length; i++){
//         split.push(tempstring[i])
//     }
//     for(var i=0; i<tempstring.length+1;i++){
//         if(obj[tempstring] === undefined){
//             obj[tempstring] = ""
//             arr.push(tempstring)
//         }
//         var count = tempstring.length-1
//         string2=tempstring[0]
//         var piece = tempstring.slice(1, tempstring.length)
//         while(count > 0){
//             string2+= stringrotate(piece, 1)
//             piece = string2.slice(1,string2.length)
//             if(obj[string2] === undefined){
//                 obj[string2] = ""
//                 arr.push(string2)
//             }
//             string2=tempstring[0]
//             count--;
//         }
//         for(var j=0; j<tempstring.length;j++){
//             console.log(j)
//             midarr.push(tempstring[j])
//         }
//         var mid = Math.floor(midarr.length/2)
//         temp = midarr[mid]
//         if(mid%2==0){
//             midarr[mid] = midarr[mid-1]
//             midarr[mid-1] = temp
//         }else{
//             midarr[mid] = midarr[mid+1]
//             midarr[mid+1] = temp
//         }

//         midstring=midarr.join("")
//         midarr = []
//         console.log("midstring",midstring)
//         var count = midstring.length-1
//         var piece = midstring.slice(1, midstring.length)
//         while(count > 0){
//             string2+= stringrotate(piece, 1)
//             piece = string2.slice(1,string2.length)
//             if(obj[string2] === undefined){
//                 obj[string2] = ""
//                 arr.push(string2)
//             }
//             string2=midstring[0]
//             count--;
//         }

//         temp = split[0]
//         split[0] = split[i]
//         split[i] = temp
//         tempstring = split.join("")
//         console.log("tempstring",tempstring)
//     }
//     console.log(arr.length)
//     return
// }

// allpermutations("team")

// function rfactorial(num){
//     if(num == 0){
//         return 1
//     }
//     return num * rfactorial(num-1)
// }

// console.log(rfactorial(5))

// function rsigma(num){
//     if(num == 0){return 0;}
//     return num + rsigma(num-1)
// }

// console.log(rsigma(10))

// function fibonacci(num){
//     var a = 0;
//     var b = 1;
//     var temp;
//     while(num > 0){
//         temp = a;
//         a+=b
//         b=a
//         num--;
//     }
//     return a;
// }

// function rfib(temp,a,b,num){
//     if(num == 0){
//         return a
//     }
//     return rfib(a,a+=b,temp,num-1)
// }

// console.log(rfib(0,0,1,6))

// function fib(a, b, n) { 
//     if(n) return fib(b, a + b, n-1); 
//     return a;
// }
// console.log(fib(0, 1, 35))


// function trib(num){
//     var a=0, b=0, c = 1, temp;
//     while(num > 0){
//         temp = c 
//         c = a+b+c
//         a=b
//         b=temp
//         num--;
//     }
//     return a
// }

// console.log(trib(5))

// function trib(a, b, c, n){ 
//     if(n) return trib(c, a,a+b+c, n-1); 
//     return a;
// }
// console.log(trib(0,0,1,7))

// function rtrib(num,a,b,c,temp){
//     if(num >= 1){
//         return rtrib(num-1,b,temp,a+b+c,c)
//     }
//     return b
// }

// console.log(rtrib(7,0,1,1,0))



// function countdown(num){
//     if(num === 0){
//         return 0
//     }
//     console.log(num)
//     return countdown(num-1)
// }

// console.log(countdown(10))

// var arr = [6,7,8,9]
// var mid = Math.floor(arr.length/2)
// console.log(arr[mid])

// function rbinarysearch(arr,num){
//     var mid = Math.floor(arr.length/2)
//     console.log(arr)
//     if(arr[mid] == num){
//         return true
//     }
//     if(arr.length==1 && arr[0] !== num){
//         return false
//     }
//     if(num > arr[mid]){
//        return rbinarysearch(arr.slice(mid,arr.length), num)
//     }else{
//         return rbinarysearch(arr.slice(0,mid), num)
//     }
// }

// console.log(rbinarysearch([1,2,3,4,5,6,7,8,9,10],100))


function ListNode(val){
    this.val = val;
    this.next = null;
}

function SinglyList(){
    this.head = null;
}

SinglyList.prototype.pop = function(){
    if(this.head.next == null){
        this.head = null
        return 
    }
    var currentNode = this.head
    var prevNode;
    while(currentNode.next){
        prevNode = currentNode
        currentNode = currentNode.next
    }
    prevNode.next = null
    return
}

SinglyList.prototype.addnode = function(value){
    var node = new ListNode(value),
        currentNode = this.head;
    if (!currentNode){
        this.head = node;
        return node;
    }
    while (currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
};

// SinglyList.prototype.shift = function(int){
//     var runner = this.head;
//     var prev;
//     while(int > 0){
//         prev = runner;
//         runner = runner.next
//         int--;
//     }
//     var temp = runner;
//     prev.next = null;
//     head = this.head
//     this.head = runner
//     while(temp.next){
//         temp = temp.next
//     }
//     temp.next = head
// }

// var newlist = new SinglyList()
// newlist.addnode(1)
// newlist.addnode(2)
// newlist.addnode(3)
// newlist.addnode(4)
// newlist.addnode(5)
// newlist.shift(1)

// function listlength(node,count){
//     if(node == null){
//         return count
//     }
//     return listlength(node.next,count+1)
// }

// console.log(listlength(cool.head,0))


// function evens(int){
//     // console.log("int",int)
//     if(int % 2 == 1){
//         int -=1
//     }
//     if(int > 0){
//         console.log(Math.pow(int,2));
//         var recurse = evens(int-2)
//     }
//     return 
// }
// function risingsquares(int){
//     if(int > 0 && int % 2 == 1){
//         var recurse = risingsquares(int-2)
//         console.log(Math.pow(int,2));
//     }
//     return int 
// }

// evens(risingsquares(5))

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function binStrExpand(string,arr){
//     var string2 = ""
//     var count = 0
//     for(var i=0; i<string.length;i++){
//         if(string[i] === "?"){
//             count++
//             string2 += getRandomInt(0,1)
//         }else{
//             string2+=string[i]
//         }
//     }
//     count = Math.pow(2,count)
//     if(arr.length == count){
//         console.log("inside return")
//         return arr,arr.length
//     }
//     var condition = true
//     if(arr.length > 0){
//         for(var i=0; i<arr.length;i++){
//             if(arr[i] === string2){
//                 condition = false
//                 break
//             }else{
//                 condition = true
//             }
//         }
//     }
//     console.log(condition, string2)
//     if(condition){
//         arr.push(string2)
//         console.log(arr)
//         return binStrExpand(string,arr)
//     }else{
//         return binStrExpand(string,arr)
//     }
// }
// console.log(binStrExpand("?????",[]))

// function generatecoinchange(cents){
//     var Q = Math.floor(cents/25)
//     cents = cents%25
//     var D = Math.floor(cents/10)
//     cents = cents%10
//     var N = Math.floor(cents/5)
//     cents = cents%5
//     var P = cents
//     return [Q,D,N,P]
// }
// console.log(generatecoinchange(112))

// function rcoinchange(cents,arr){
//     if(Math.floor(cents/25) >=1){
//         arr.push({"quarters":Math.floor(cents/25)})
//         return rcoinchange(cents%25,arr)
//     }
//     if(Math.floor(cents/10) >=1){
//         arr.push({"dimes":Math.floor(cents/10)})
//         return rcoinchange(cents%5,arr)
//     }
//     if(Math.floor(cents/5) >=1){
//         arr.push({"nickels":Math.floor(cents/5)})
//         return rcoinchange(cents%5,arr)
//     }
//     arr.push({"pennies":cents})
//     return arr
// }

// console.log(rcoinchange(57,[]))

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}
 
// BinarySearchTree.prototype.add = function(val){
//     if(!this.root){
//         this.root = new Node(val)
//         return 
//     }
//     var runner = this.root
//     var newNode = new Node(val)
//     while(runner){
//         if(val < runner.val){
//             if(!runner.left){
//                 runner.left = newNode
//                 break;
//             }
//             runner = runner.left
//         }
//         else{
//             if(!runner.right){
//                 runner.right = newNode
//                 break;
//             }
//             runner = runner.right
//         }
//     }
//     return 
// }


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


// BinarySearchTree.prototype.contains = function(val){
//     if(!this.root){
//         return false
//     }
//     else{
//         if(this.root.val == val){
//             return this.root
//         }else{
//             var runner = this.root
//             while(runner){
//                 if(runner.val == val){
//                     return runner
//                 }else{
//                     if(val < runner.val){
//                         runner = runner.left
//                     }else{
//                         runner = runner.right
//                     }
//                 }
//             }
//             return false
//         }
//     }
// }

// var btree = new BinarySearchTree()

// btree.add(4)
// btree.add(6)
// btree.add(1)
// btree.add(2)
// btree.add(7)

// console.log(btree)

// function preorder(node){
//     if(!node){
//         return
//     }
//     console.log(node.val)
//     preorder(node.left)
//     preorder(node.right)
// }

// function postorder(node){
//     if(!node){
//         return
//     }
//     preorder(node.left)
//     preorder(node.right)
//     console.log(node.val)
// }

// function inorder(node){
//     if(!node){
//         return
//     }
//     inorder(node.left)
//     console.log(node.val)
//     inorder(node.right)
// }


// function rfib(b,a,num){
//     if(num == 0){
//         return a
//     }
//     return rfib(a,a+b,num-1)
// }
// console.log(rfib(1,0,5))

// function rsigma(num){
//     if(num == 1){
//         return 1
//     }
//     return num+rsigma(num-1)
// }



// BinarySearchTree.prototype.min = function(){
//     if(!this.root){
//         return false
//     }
//     else{
//         var runner = this.root
//         var min = runner.val
//         while(runner){
//             min = runner.val
//             runner = runner.left
//         }
//         return min  
//     }
// }


// BinarySearchTree.prototype.max = function(){
//     if(!this.root){
//         return false
//     }
//     else{
//         var runner = this.root
//         var max = runner.val
//         while(runner){
//             max = runner.val
//             runner = runner.right
//         }
//         return max 
//     }
// }

// BinarySearchTree.prototype.size = function(){
//     var count = 0
//     if(!this.root){
//         return count
//     }
//     else{
//         count++
//         var runner = this.root
//         while(runner.right){
//             count++
//             runner= runner.right
//         }
//         runner = this.root
//         while(runner.left){
//             count++
//             runner = runner.left
//         }
//         return count
//     }
// }


// BinarySearchTree.prototype.isEmpty = function(){
//     if(!this.root){
//         return true
//     }
//     return false
// }

// console.log(btree.isEmpty())

// function max(a,b){
//   if(a > b){
//     return a
//   }else{
//     return b
//   }
// }

// function min(a,b){
//   if(a > b){
//     return b
//   }else{
//     return a
//   }
// }


// function height(node){
//     if(!node){
//         return 0
//     }
//     var leftheight = height(node.left)
//     var rightheight = height(node.right)
//     return Math.max(leftheight,rightheight)+1
// }
// console.log(height(btree.root))




// function findheight(node){
//     if(!node.left && !node.right){
//         return 1
//     }
//     if(node.right){
//         var rightheight = findheight(node.right)
//     }
//     if(node.left){
//         var leftheight = findheight(node.left)
//     }else{
//         leftheight = 0
//     }
//     return 1+max(rightheight, leftheight)
// }


// function minheight(node){
//   if(!node.left && !node.right){
//     return 1
//   }
//   if(node.right){
//     var rightheight = minheight(node.right)
//     console.log("right height",rightheight)
//   }else{
//       rightheight = 0
//   }
//   if(node.left){
//     var leftheight = minheight(node.left)
//   }
//   return 1+min(rightheight,leftheight)
// }


// function isbalanced(node){
//   if(!node.left && !node.right){
//     return true
//   }
//   if(node.right){
//     var rightheight = findheight(node.right)
//     console.log("right", rightheight)
//   }
//   if(node.left){
//     var leftheight = findheight(node.left)
//     console.log("left", leftheight)
//   }
//   if(rightheight - leftheight == 1|| leftheight - rightheight == 1 || rightheight - leftheight == 0|| leftheight - rightheight == 0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isbalanced(btree.root))

// function arraytobst(arr){
//   var btree = new BinarySearchTree()
//   for(var i =0 ; i <arr.length;i++){
//     btree.add(arr[i])
//   }
//   return btree
// }

// console.log(isbalanced(arraytobst([1,2,3,4,5])))


// function bstPreOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     console.log(node.val)
//     bstPreOrder(node.left)
//     bstPreOrder(node.right)
//   }
// }

// console.log(bstPreOrder(btree.root))

// function bstPreOrderNoRecur(node){
//    if(!node){
//        return
//    }
//     var arr = []
//     arr.push(node)
//     while(arr.length > 0){ 
//         var thisnode = arr.pop()
//         console.log(thisnode.val)
//         if(thisnode.right){
//             arr.push(thisnode.right)
//         }
//         if(thisnode.left){
//             arr.push(thisnode.left)
//         }
//     }
//     return 
// }

// console.log(bstPreOrderNoRecur(btree.root))

// function bstPostOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstPostOrder(runner.left)
//     bstPostOrder(runner.right)
//   }
//    console.log(runner.val)
// }

// console.log(bstPostOrder(btree.root))

// function bstInOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstInOrder(runner.left)
//     console.log(runner.val)
//     bstInOrder(runner.right)
//   }
// }

// console.log(bstInOrder(btree.root))

// function bstInOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   bstInOrderArr(node.left, arr)
//   arr.push(node.val)
//   bstInOrderArr(node.right,arr)
//   return arr
// }

// function bstInOrderArrNode(node,arr){
//   if(!node){
//     return 
//   }
//   bstInOrderArrNode(node.left, arr)
//   arr.push(node)
//   bstInOrderArrNode(node.right,arr)
//   return arr
// }


// console.log(bstInOrderArr(btree.root,[]))

// function bstPreOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   arr.push(node.val)
//   bstPreOrderArr(node.left, arr) 
//   bstPreOrderArr(node.right,arr)
//   return arr
// }

// console.log(bstPreOrderArr(btree.root,[]))

// function bstPostOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   bstPostOrderArr(node.left, arr)
//   bstPostOrderArr(node.right,arr)
//   arr.push(node.val)
//   return arr
// }

// console.log(bstPostOrderArr(btree.root,[]))

// function bst2List(node,list){
//     if(!node){
//         return
//     }else{
//         bst2List(node.left, list)
//         list.addnode(node.val)
//         bst2List(node.right,list)
//         return list
//     }
// }

// var slist = new SinglyList()

// bst2List(btree.root, slist)
// console.log("slist",slist.head)

// btree.add(5)
// btree.add(2)
// btree.add(6)
// btree.add(3)
// btree.add(4)
// btree.add(8)
// btree.add(1)
// btree.add(7)

// BinarySearchTree.prototype.remove = function(val){
//   if(this.root.val == val){
//         if(!this.root.left && !this.root.right){
//           return this.root = null
//         }else{
//           if(this.root.left){
//           var runner = this.root.left
//           var parent = runner
//           if(runner.right){
//             while(runner.right){
//               parent = runner
//               runner = runner.right
//             }
//             this.root.val = runner.val
//             parent.right = null
//             return
//           }else{
//             this.root.val = runner.val
//             this.root.left = this.root.left.left
//           }
//         }else{
//           runner = this.root.right
//           if(runner.left){
//             while(runner.left){
//               parent = runner;
//               runner = runner.left
//             }
//             this.root.val= runner.val
//             parent.left = null
//             return
//           }else{
//             this.root.val = runner.val
//             this.root.right = this.root.right.right
//             return 
//           }
//         }
//       }
//     }
//     var runner = this.root
//     var parent = runner
//     var condition = false;
//     while(runner){
//         if(runner.val == val){
//             if(condition){
//               if(runner.left){
//                 runner.val = runner.left.val
//                 runner.left = null
//                 return 
//               }else{
//                 parent.right = parent.right.right
//                 return
//               }
//             }else{
//               if(runner.right){
//                 runner.val = runner.right.val
//                 runner.right = runner.right.right
//                 return
//               }else{
//                 parent.left = parent.left.left
//                 return
//               }
//             }
//         }else{
//             if(val < runner.val){ 
//                 parent = runner
//                 runner = runner.left
//                 condition = false;
//             }else{
//                 parent = runner
//                 runner = runner.right
//                 condition = true
//             }
//         }
//     }
// }

// BinarySearchTree.prototype.addwithoutdupes = function(val){
//     if(!this.root){
//         this.root = new Node(val)
//         return 
//     }
    
//      if(this.contains(val)){
//         return false
//     }

//     var runner = this.root
//     var newNode = new Node(val)

//     while(runner){
//         if(val < runner.val){
//             if(!runner.left){
//                 runner.left = newNode
//                 break;
//             }
//             runner = runner.left
//         }
//         else{
//             if(!runner.right){
//                 runner.right = newNode
//                 break;
//             }
//             runner = runner.right
//         }
//     }
//     return 
// }


// console.log(btree.addwithoutdupes(6))


// function bstReverseInOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstReverseInOrder(runner.right)
//     console.log(runner.val)
//     bstReverseInOrder(runner.left)
//   }
// }

// console.log(bstReversedInOrder(btree.root))

// function bstvalbefore(val,node){
//     var arr = bstInOrderArr(node,[])
//     var minrange = val - arr[0]
//     var nodeval = 0
//     for(var i = 0; i<arr.length;i++){
//         if(val - arr[i] <= minrange && val-arr[i]!==0 && val-arr[i] > 0){
//             minrange = val-arr[i]
//             nodeval = arr[i]
//         }
//     }
//     return nodeval
// }

// // console.log(bstvalbefore(510,btree.root))

// function bstvalafter(val,node){
//     var arr = bstInOrderArr(node,[])
//     var maxrange = arr[arr.length - 1] - val
//     var nodeval = null
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] - val <= maxrange && arr[i] - val!==0 && arr[i] - val > 0){
//             maxrange = arr[i] - val
//             nodeval = arr[i]
//         }
//     }
//     return nodeval
// }

// console.log(bstvalafter(,btree.root))

// function bstnodebefore(node1,node2){
//     var arr = bstInOrderArrNode(node2,[])
//     var minrange = node1.val - arr[0].val
//     var winnernode = null
//     for(var i = 0; i<arr.length;i++){
//         if(node1.val - arr[i].val <= minrange && node1.val-arr[i].val !== 0 && node1.val-arr[i].val > 0){
//             minrange = node1.val-arr[i].val
//             winnernode = arr[i]
//         }
//     }
//     return winnernode
// }

// console.log(bstnodebefore(btree.root.right,btree.root))


// function bstnodeafter(node1,node2){
//     var arr = bstInOrderArrNode(node2,[])
//     var maxrange = arr[arr.length - 1].val - node1.val
//     var winnernode = null
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i].val - node1.val <= maxrange && arr[i].val - node1.val!==0 && arr[i].val - node1.val > 0){
//             maxrange = arr[i].val - node1.val
//             winnernode = arr[i]
//         }
//     }
//     return winnernode
// }

// console.log(bstnodeafter(btree.root.left.right,btree.root))

// function closestvalue(val){
//     var afterval = bstvalafter(val,btree.root)
//     var beforeval = bstvalbefore(val,btree.root)
//     var arr = bstInOrderArr(btree.root, [])
//     console.log("after,before", afterval,beforeval)
//     var exactval = 0
//     for(var i = 0; i<arr.length ; i++ ){
//         if(arr[i] - val == 0){
//             exactval = arr[i]
//             return exactval
//         }
//     }
//     if(afterval - val < val - beforeval && afterval - val > 0){
//         return afterval
//     }else{
//         return beforeval
//     }
// }

// console.log(closestvalue(9))

// function bubblesort(arr){
//     var condition = true
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]){
//             var temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp;
//             condition = false
//         }
//     }
//     if(condition == false){
//         console.log(arr)
//         return bubblesort(arr)
//     }else{
//         return arr
//     }
// }

// console.log(bubblesort([5,3,1,6,7,2,8,4]))

// function selectionsort(arr){
//     for(var i = 0; i<arr.length;i++){
//         var min = arr[i]
//         for(var j = i; j<arr.length;j++){
//             if(arr[j] < min){
//                 min = arr[j]
//                 var temp = arr[i]
//                 arr[i] = min
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(selectionsort([8,5,2,6,9,3,1,4,0,7]))


// var newlist = new SinglyList()
// newlist.addnode(5)
// newlist.addnode(1)
// newlist.addnode(8)
// newlist.addnode(4)
// newlist.addnode(9)
// newlist.addnode(2)
// newlist.addnode(5)
// newlist.addnode(3)

// function slistbubblesort(list){
//     var condition = true
//     var runner = list.head
//     while(runner){
//         if(runner.next && runner.val > runner.next.val){
//             var temp = runner.val
//             runner.val = runner.next.val
//             runner.next.val = temp
//             condition = false
//         }
//         runner = runner.next
//     }
//     if(condition == false){
//         return slistbubblesort(list)
//     }else{
//         return list
//     }
// }

// console.log(slistbubblesort(newlist))

// function slistselectionsort(list){
//     var runner = list.head
//     while(runner){
//         var min = runner.val
//         var runner2 = runner
//         while(runner2){
//             if(runner2.val < min){
//                 min = runner2.val
//                 var temp = runner.val
//                 runner.val = min
//                 runner2.val = temp
//             }
//             runner2 = runner2.next
//         }
//         runner = runner.next
//     }
//     return list
// }

// slistselectionsort(newlist)

// Array.prototype.insert = function ( index, item ) {
//     this.splice( index, 0, item );
// };

// function insertionsort(arr){
//     for(var i = 0; i<arr.length;i++){
//         var min = arr[i]
//         for(var j = i; j<arr.length; j++){
//             if(arr[j] < min){
//                 min = arr[j]
//                 arr.splice(j,1)
//                 arr.insert(i,min)
//             }
//         }
//     }
//     return arr
// }

// console.log(insertionsort([6,5,3,1,8,7,2,4]))


SinglyList.prototype.prependval = function(ListNode,before){
    if(this.head == before){
        var temp = this.head
        this.head = ListNode
        this.head.next = temp
    }else{
        var runner = this.head
        var parent = runner
        var count = 0
        while(runner !== before){
            parent = runner
            runner = runner.next
        }
        var temp = runner
        parent.next = ListNode
        parent.next.next = temp
        return ListNode
    }
}


SinglyList.prototype.remove = function(val){
    var current = this.head;
    //case-1
    if(current.value == val){
       this.head = current.next;     
    }
    else{
      var previous = current;
      
      while(current.next){
        //case-3
        if(current.value == val){
          previous.next = current.next;          
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == val){
        previous.next == null;
      }
    }
  }  



// function slistinsertionsort(list){
//     var runner = list.head
//     var runner2;
//     var min;
//     var node;
//     var runner3;
//     while(runner){
//         min = runner.val
//         runner2 = runner
//         while(runner2){
//             if(runner2.val < min){
//                 min = runner2.val
//                 runner2 = list.remove(runner2.val)
//                 list.prependval(new ListNode(min), runner) 
//             }else{
//                 runner2 = runner2.next
//             }
//         }
//         runner = runner.next
//     }
//     return list
// }
// console.log(slistinsertionsort(newlist))

// function listtoarray(list){
//     var current = list.head
//     var arr = []
//     while(current){
//         arr.push(current.val)
//         current = current.next
//     }
//     return arr
// }

// function arraytolist(arr){
//     var list  = new SinglyList()
//     for(var i = 0; i< arr.length; i++){
//         list.addnode(arr[i])
//     }
//     return list
// }

// function slistinsertionsort(list){
//     var array = listtoarray(list)
//     array = insertionsort(array)
//     console.log(array)
//     list = arraytolist(array)
//     return list;
// }

// SinglyList.prototype.slistinsertionsort = function(){
//     var array = listtoarray(this)
//     array = insertionsort(array)
//       console.log(array)
//     var list = arraytolist(array)
//     this = list
// 
// newlist = slistinsertionsort(newlist)
// console.log(newlist.head.next)

// function combineArrs(arr1,arr2){
//     arr1 = arr1.concat(arr2)
//     arr1 = bubblesort(arr1)
//     return arr1
// }

// console.log(combineArrs([1,2,3], [4,5,6]))

// function combineLinkedList(list1,list2){
//     var runner = list1.head
//     while(runner.next){
//         runner = runner.next
//     }
//     runner.next = list2.head
//     list1 = slistbubblesort(list1)
//     return list1
// }

// console.log(combineLinkedList(newlist,newlist2))

// function slistmergesort(list){
//     var length = Math.floor(listlength(list.head,0)/2)
//     var right = new SinglyList()
//     var left = new SinglyList()
//     var count = length
//     var runner = list.head
//     while(count >= 0){
//         left.addnode(runner.val)
//         runner = runner.next
//         count--;
//     }
//     count = length * 2
//     runner = list.head
//     while(count >= 0){
//         if(count > length){
//             runner = runner.next
//         }else{
//             right.addnode(runner.val)
//             if(runner.next==null){right.addnode(runner.val);break}
//             runner = runner.next
//         }
//         count--;
//     }
//     var list = combineLinkedList(right,left)
//     return list
// }

// console.log(slistmergesort(newlist))

// function arraypartition(arr){
//     var val = arr[0]
//     var left = []
//     var right = []
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i] < val){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     var arr = left.concat(right)
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] == val){
//             val = i
//             break
//         }
//     }
//     return val
// }

// console.log(arraypartition([5,4,9,2,5,3]))

// function slistpartition(list){
//     var right = new SinglyList()
//     var left = new SinglyList()
//     var val = list.head.val
//     var runner = list.head
//     while(runner){
//         if(runner.val < val){left.addnode(runner.val)}
//         else{right.addnode(runner.val)}
//         runner = runner.next
//     }
//     var runner = left.head
//     while(runner.next){
//         runner = runner.next
//     }
//     runner.next = right.head
//     return left.head.next
// }

// console.log(slistpartition(newlist))


// function swap(arr, i, j){
//    var temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
// }
   
// function partition(arr, pivot, left, right){
//    var pivotValue = arr[pivot],
//        partitionIndex = left;

//    for(var i = left; i < right; i++){
//     if(arr[i] < pivotValue){
//       swap(arr, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(arr, right, partitionIndex);
//   return partitionIndex;
// }
        
// function quickSort(arr, left, right){
//    var len = arr.length, 
//    pivot,
//    partitionIndex;

//   if(left < right){
//     pivot = right;
//     partitionIndex = partition(arr, pivot, left, right);

//    quickSort(arr, left, partitionIndex - 1);
//    quickSort(arr, partitionIndex + 1, right);
//   }
  
//   return arr;
// }
   
// console.log(quickSort([5,4,9,2,5,3],0,6))

// function mergeSort(arr){
//    var len = arr.length;
//    if(len <2)
//       return arr;
//    var mid = Math.floor(len/2),
//        left = arr.slice(0,mid),
//        right =arr.slice(mid);
//    return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left, right){
//   var result = [],
//       lLen = left.length,
//       rLen = right.length,
//       l = 0,
//       r = 0;
//   while(l < lLen && r < rLen){
//      if(left[l] < right[r]){
//        result.push(left[l++]);
//      }
//      else{
//        result.push(right[r++]);
//     }
//   }  

//   return result.concat(left.slice(l)).concat(right.slice(r));
// }
        
// console.log(mergeSort([5,4,9,2,5,3]))


// Set.prototype.union = function (arr){
//     var union = new Set(this)
//     for(elem in arr){
//         union.add(elem);
//     }
//     union.delete("union")
//     return union
// }

// function interleaveArrays(arr1,arr2){
//     var set1 = new Set(arr1)
//     var set2 = new Set(arr2)
//     var set3 = set1.union(set2)
//     var result = Array.from(set3)
//     console.log(result)
//     return 
// }



// interleaveArrays(arr1,arr2)

// function minthreearrayrange(arr1,arr2,arr3){
//     var set1 = new Set(arr1)
//     var set2 = new Set(arr2)
//     var set3 = new Set(arr3)
//     arr1= []
//     for(var item of set1){
//         if(set2.has(item+1)){
//             if(set3.has(item+2)){
//                 arr1.push(item)
//                 arr1.push(item+1)
//                 arr1.push(item+2)
//                 break
//             }
//         }
//         else if(set2.has(item-1)){
//             if(set3.has(item+1)){
//                 arr1.push(item-1)
//                 arr1.push(item)
//                 arr1.push(item+1)
//                 break
//             }
//             else if(set3.has(item-2)){
//                 arr1.push(item-2)
//                 arr1.push(item-1)
//                 arr1.push(item)
//             }
//         }
//         else if(set3.has(item - 1)){
//             if(set2.has(item -2)){
//                 arr1.push(item-2)
//                 arr1.push(item-1)
//                 arr1.push(item)
//                 break
//             }
//         }
//     }
//     return {min:arr1[0], max:arr1[arr1.length-1]}
// }

// arr1 = [1,3]
// arr2 = [1]
// arr3 = [2,45,22,11]

// console.log(minthreearrayrange(arr1,arr2,arr3));

// function intersectsortedarraysdedupe(arr1,arr2){
//     var set = new Set(arr1)
//     var set2 = new Set(arr2)
//     var arr = []

//     for(var item of set){
//         if(set2.has(item)){
//             arr.push(item)
//         }
//     }
//     return arr
// }
// var arr1 = [1,2,2,2,7]
// var arr2 = [2,2,6,6,7]
// console.log(intersectsortedarraysdedupe(arr1,arr2))

// function intersectsortedarrays(arr1,arr2){
//     var obj = {}
//     var arr = []
//     for(var i = 0; i<arr1.length ; i++){
//         if(!obj[arr1[i]]){
//             obj[arr1[i]] = [0,arr1[i]];
//         }
//     }
//     for(var i=0; i<arr2.length; i++){
//         for(key in obj){
//             if(key == arr2[i]){
//                 obj[key][0]++
//             }
//         }
//     }
//     for(key in obj){
//         if(obj[key][0] > 0){
//             while(obj[key][0] > 0){
//                 arr.push(obj[key][1])
//                 obj[key][0]--;
//             }
//         }
//     }
//     return arr
// }
// var arr1 = [1,2,2,2,7]
// var arr2 = [2,2,6,6,7]
// console.log(intersectsortedarrays(arr1,arr2))

// function MinHeap(){
//     this.heap = [];
//     this.heap[0]="heap"
// }

// MinHeap.prototype.IsEmpty = function(){
//     if(this.heap.length == 1){return true}
//     return false
// }

// MinHeap.prototype.Size = function(){
//     return this.heap.length
// }

// MinHeap.prototype.Top = function(){
//     return this.heap[0];
// }

// MinHeap.prototype.Contains = function(val){
//     for(var i = 0; i<this.heap.length;i++){
//         if(this.heap[i] == val){
//             return true
//         }
//     }
//     return false
// }

// MinHeap.prototype.Insert = function(val){
//     this.heap.push(val);
//     var parent = Math.floor((this.heap.length-1)/2)
//     var child = this.heap.length-1
//     var condition = true
//     while(condition){
//         if(val < this.heap[parent]){
//             var temp = this.heap[parent]
//             this.heap[parent] = val 
//             this.heap[child] = temp
//             child = parent
//             parent = Math.floor(parent/2)
//             condition = true;
//         }else{
//             break;
//         }
//     }
// }

// var heap = new MinHeap()
// heap.Insert(1)
// heap.Insert(15)
// heap.Insert(2)
// heap.Insert(16)
// heap.Insert(17)
// heap.Insert(4)
// heap.Insert(3)
// heap.Insert(0)

// MinHeap.prototype.extract = function(){
//     var count = this.heap.length
//     i = 1
//     while(i < count-1){
//         console.log(i)
//         var temp = this.heap[i]
//         this.heap[i] = this.heap[i+1]
//         this.heap[i+1] = temp;
//         i++;
//     }
//     this.heap.pop()
// }
// heap.extract()
// function arrayheapify(arr){
//     if(arr[0]!== "heap"){
//         arr.push("heap")
//         for(var i = arr.length-1; i>0; i--){
//             var temp = arr[i]
//             arr[i] = arr[i-1]
//             arr[i-1] = temp
//         }
//         console.log(arr)
//     }
//     var condition = true
//     var i = i;
//     while(condition){
//         if(arr[i] > arr[i*2] || arr[i] > arr[i*2+1]){
//             var temp = arr[i]
//             arr[i] =
//         }
//     }
//     return
// }
// var list  = new SinglyList()
// list.addnode(1)
// list.addnode(2)
// list.addnode(3)
// function singlylistreverse(list){
//     var initialnode = list.head
//     var runner = this.head
//     while(initialnode.next){
//         var temp = initialnode.next
//         initialnode.next = temp.next
//         var head = list.head
//         list.head = temp
//         list.head.next = head
//     }
//     return list
// }
// var newlist = singlylistreverse(list)
// console.log(newlist.head.next)
// function singlylistrotate(list,rotate){
//     if(rotate >= count){
//         return list 
//     }
//     var count = (listlength(list.head,0)) - rotate
//     var runner = list.head
//     var prev;
//     while(count > 0){
//         prev = runner
//         runner = runner.next
//         count--;
//     }
//     runner1 = runner
//     while(runner.next){
//         runner = runner.next
//     }
//     var temp = list.head
//     list.head = runner1
//     runner.next = temp
//     prev.next = null
//     return list
// }

// var newlist = singlylistrotate(list,2)
// console.log(newlist.head)
// function singlylistunshift(list,unshift){
//     if(unshift >= listlength(list.head,0)){
//         return list
//     }
//     var runner = list.head
//     while(runner.next){
//         runner = runner.next
//     }
//     while(unshift > 0){
//         var temp = list.head
//         list.head = list.head.next
//         temp.next = null
//         runner.next = temp
//         runner = runner.next
//         unshift--;
//     }
//     return list
// }
// var newlist = singlylistunshift(list,2)
// console.log(newlist)

// function shift(list,shift){
//     if(shift > listlength(list.head,0)){
//         return list
//     }
//     var count = (listlength(list.head,0)) - shift
//     console.log("count",count)
//     var runner = list.head; var prev;
//     while(count > 0){
//         prev = runner;
//         runner = runner.next
//         count--;
//     }
//     var temp1 = runner;
//     while(runner.next){
//         runner = runner.next
//     }
//     var temp2 = list.head
//     list.head = temp1
//     runner.next = temp2
//     prev.next = null
//     return list
// }
// var newlist = shift(list,2)
// console.log(newlist.head)
// function power(num,exp,product){
//     if(exp == 1){
//         return product
//     }
//     return power(num, exp-1, product*=num)
// }

// console.log(power(2,5,2))

// function arraymintofront(arr){
//     var min = arr[0]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] < min){
//             min = arr[i]
//             minidx = i
//         }
//     }
//     for(var i =minidx ; i<arr.length-1;i++){
//         var temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1]=temp
//     }
//     arr.pop()
//     for(var i = arr.length-1; i>=0; i--){
//         arr[i+1] = arr[i]
//     }
//     arr[0] = min
//     return arr
// }
// console.log(arraymintofront([4,2,1,3,5]))

function isPalindrome(string){
    var i = 0; var j= string.length-1;
    while(i <= j){
        if(string[i] === string[j]){
            i++;
            j--;
        }else{
            return false
        }
    }
    return true
}

// console.log(isPalindrome("racecar"))


// SinglyList.prototype.reverse=function(){
//     var initialnode = this.head
//     var temp;
//     var head;
//     while(initialnode.next){
//         temp = initialnode.next;
//         initialnode.next = temp.next
//         head = this.head
//         this.head = temp
//         this.head.next = head
//     }
//     return this
// }

// var list = new SinglyList()
// for(var i = 1;i<6; i++){
//     list.addnode(i)
// }
// list.reverse()

function swap(arr,idx1,idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
    return
}

// function selectionsort(arr){
//     for(var i=0;i<arr.length;i++){
//         var minidx = i
//         for(var j = i;j<arr.length;j++){
//             if(arr[j] < arr[minidx]){
//                 minidx = j
//             }
//         }
//         swap(arr,i,minidx)
//     }
//     return arr
// }

// console.log(selectionsort([4,3,1,2,5]))

// function bubblesort(arr){
//     for(var i = 0; i<arr.length;i++){
//         for(var j = 0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     return arr
// }
// console.log(bubblesort([4,3,1,2,5]))

// function copyifint(arr){
//     var arr2 = []
//     for(var i=0;i<arr.length;i++){
//         if(typeof(arr[i]) === "number"){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }

// function HashNode(key,val){
//     this.key = key
//     this.val = val;
//     this.next = null;
// }

// SinglyList.prototype.addhashnode = function(key,value){
//     var node = new HashNode(key,value),
//         currentNode = this.head;
//     if (!currentNode){
//         this.head = node;
//         return node;
//     }
//     while (currentNode.next){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = node;
//     return node;
// };

// SinglyList.prototype.removeKey = function(key){
//     if(this.head.key == key){
//         this.head = this.head.next;
//         return this.head
//     }else{
//         var runner = this.head
//         var parent;
//         while(runner.next && runner.key !== key){
//             parent = runner
//             runner = runner.next
//         }
//         if(!parent){
//             return null
//         }
//         parent.next = runner.next
//         return parent.next
//     }
// }



// function HashMap(capacity){
//     this.capacity = capacity;
//     this.table = [];
// }

// String.prototype.hashCode = function()
// {
//     var hash = 0;
//     if(this.length == 0) return hash;
//     for( var i = 0; i<this.length; i++){
//         char = this.charCodeAt(i);
//         hash = ((hash<<5)-hash)+char;
//         hash &= hash;
//     }
//     return hash
// }


// function mod(input,div){
//     return(input % div + div) % div
// }

// function arrayremove(arr,idx){
//     for(var i= idx; i<arr.length;i++){
//         swap(arr,idx,idx+1)
//     }
//     return arr.pop
// }

// HashMap.prototype.add = function(key,val){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(this.table[myIdx] == undefined){ 
//       this.table[myIdx] = new SinglyList()
//     }
//     return this.table[myIdx].addhashnode(key,val)
// }

// HashMap.prototype.findKey = function(key){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(this.table[myIdx]){
//         var runner = this.table[myIdx].head
//         while(runner.key !== key){
//             runner = runner.next
//         }
//         if(runner.key !== key){
//             return null
//         }
//         return runner
//     }
//     return null
// }

// HashMap.prototype.remove = function(key){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(!this.table[myIdx]){
//         return null;
//     }
//     this.table[myIdx]
//     return this.table[myIdx].removeKey(key)
// }

// HashMap.prototype.grow = function(){
//     var arr = []
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         runner = this.table[i].head
//         while(runner){
//             arr.push(runner)
//             runner = runner.next
//         }
//     }
//     this.table = []
//     this.capacity += Math.floor(this.capacity/2);
//     for(var i = 0;i<arr.length;i++){
//         this.add(arr[i].key,arr[i].val)
//     }
//     return 
// }

// function loadFactor(map){
//     if(map.table.length == Math.floor(map.capacity/2)){
//         map.capacity *= 2
//     }
// }

// HashMap.prototype.setSize = function(newCap){
//     var arr = []
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         runner = this.table[i].head
//         while(runner){
//             arr.push(runner)
//             runner = runner.next
//         }
//     }
//     this.table = []
//     this.capacity = newCap
//     for(var i = 0;i<arr.length;i++){
//         this.add(arr[i].key,arr[i].val)
//     }
// }

// HashMap.prototype.addMap = function(map){
//     for(var i = 0;i<map.table.length;i++){
//         if(map.table[i] == undefined){
//             continue;
//         }
//         runner= map.table.head
//         while(runner){
//             if(this.findKey(runner.key) !== null){
//                 this.findKey.val = runner.val
//             }else{this.add(runner.key,runner.val)}
//         }
//     }
// }

// HashMap.prototype.selectKeys = function(array){
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         var runner = this.table[i].head;
//         var prev = runner
//         while(runner){
//             bool = false
//             for(var j = 0;j<array.length;j++){
//                 if(array[j] == runner.key){
//                     bool = true 
//                 }
//             } 
//             if(!bool){
//                 console.log(runner.key)
//                 runner = this.table[i].removeKey(runner.key)
//             }else{
//                 prev = runner
//                 runner = runner.next
//             }
//         }
//     }
//     return this
// }

// var myMap = new HashMap(5)

// myMap.add('cat', 5);
// myMap.add('dog', 12);
// myMap.add('cool', 42);
// myMap.add('monkey', 100);
// myMap.add('tiger', 80);
// myMap.add('Lion', 10);

// var map = myMap.selectKeys(['cat','monkey'])

// console.log(map.table)

var btree = new BinarySearchTree()

btree.add(100)
btree.add(150)
btree.add(50)
btree.add(42)
// btree.add(55)
// btree.add(140)
// btree.add(151)

// function isfull(node){
//     if(node){
//         if(!node.right && !node.left){
//             return true;
//         }
//         if(node.right && node.left){
//             return isfull(node.right) && isfull(node.left);
//         }
//     }
//     return false
// }

// console.log(isfull(btree.root))

// function countNodes(root){
//     if(!root){return 0}
    
//     return (1+ countNodes(root.left) + countNodes(root.right))
// }

// function isComplete(root,index,count_nodes){
//     if(!root){
//         return true
//     }
//     if(index >= count_nodes){
//         return false
//     }
//     return (isComplete(root.left, 2*index+1,count_nodes) && isComplete(root.right, 2*index+2,count_nodes))
// }

// var count = countNodes(btree.root)

// console.log(isComplete(btree.root,0, count))

// function stars(int){
//     var string = ""
//     while(int > 0){
//         string += "*"
//         int--;
//     }
    
//     return console.log(string)
// }

// function starsarr(arr){
//     for(var i = 0 ; i<arr.length ; i++){
//         if(typeof(arr[i])==="number"){
//             stars(arr[i])
//         }else if(typeof(arr[i])==="string"){
//             console.log(arr[i][0])
//         }
//     }
//     return arr
// }

// starsarr([4,"yo","k",4,5,8,19])

// function fib(){
//     var a = 0
//     var b = 1
//     var x;
//     function nacci(){
//         x = a;
//         a += b
//         b = x
//         console.log(a)
//     }
//     return nacci
// }
// var fibCounter = fib();
// fibCounter() 
// fibCounter() 
// fibCounter()
// fibCounter() 
// fibCounter() 
// fibCounter() 

// var list1  = new SinglyList()
// var list2 = new SinglyList()
// list1.add(2)
// list1.add(0)
// list1.add(1)
// list2.add(8)
// list2.add(4)

// function longestpalindrome(string){
//     var longest = ""
//     for(var i = 0;i<string.length;i++){
//         var j = string.length-1;
//         while(j > i){
//             if(string[i] === string[j]){
//                 if(isPalindrome(string.substring(i,j+1))){
//                     if(string.substring(i,j+1).length > longest){
//                         longest = string.substring(i,j+1);
//                         break;
//                     }
//                 } 
//             }
//             j--;
//         }
//     }
//     return longest
// }
// console.log(longestpalindrome("Yikes! mom favorite racecar erupted!"))
// function findQs(string){
//     var count = 0
//     for(var i = 0; i<string.length;i++){
//         if(string[i] === "?"){
//             count++;
//         }
//     }
//     return count
// }
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }


// function changeQs(string){
//     var string2 = ""
//     for(var i=0;i<string.length;i++){
//         if(string[i] === "?"){
//             string2 += getRandomInt(0,2)
//         }else{
//             string2+=string[i]
//         }
//     }
//     return string2
// }

// function binStrExpand(string,arr){
//     if(arr.length == Math.pow(findQs(string),2)){
//         console.log(arr)
//         return arr
//     }
//     condition = true
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] == changeQs(string)){
//             condition = false
//             break;
//         }else{
//             condition = true
//         }
//     }
//     if(condition){arr.push(changeQs(string))}
//     binStrExpand(string,arr)
// }

// console.log(binStrExpand("1?0?",[]))


// function censor(string,arr){
//     for(var i = 0;i<string.length;i++){
//         var j = string.length-1;
//         while(j > i){
//             if(string.substring(i,j+1) === arr[0] || string.substring(i,j+1) === arr[1]){
//                count =  string.substring(i,j+1).length
//                string2 = ""
//                while(count > 0){
//                     string2+="x"
//                     count--;
//                }
//                string = string.replace(string.substring(i,j+1),string2)
//             }
//             j--;      
//         }
//     }
//     return string
// }

// console.log(censor("Snap crackle pop nincompoop!", ["crack","poop"]))

// function bPoint(arr){
//     sum = 0;sum2=0;i=0; j=arr.length-1
//     while(i<arr.length-1 || j>0){
//         sum+= arr[i]
//         sum2+= arr[j]
//         i++;
//         j--;
//     }
//     console.log("sum1,sum2",sum,sum2)
//     if(sum == arr[arr.length-1] || sum2 == arr[0]){
//         return true
//     }
//     return false
// }

// console.log(bPoint([1,2,3,4,10]))
