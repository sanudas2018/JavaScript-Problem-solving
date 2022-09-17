// / Problem: 4 (Odd Friend)
var allFriendName = ["abcd", "abcde", "abc"];
function oddFriend(allFriendName){
if(allFriendName.length == 0){
// Array can never be left blank.not allow:[], allow:EX:['programming-hero']
return "Not allow empty array. please input the string value your friends name";
}else{
let allOddfriendsName = [];
for(let i = 0; i < allFriendName.length; i++){
const singleFriendName = allFriendName[i];
// The length of the name of 1 friend has been found out.
let singleFriendNameLength = singleFriendName.length;
if(typeof(singleFriendName) != 'string'){
//number not allow, only for srting value.not allow:[123], EX:['programming-hero']
return "Only input string value";
}else if(singleFriendNameLength % 2 == 0){
allOddfriendsName.push(singleFriendName);
}
}
return allOddfriendsName;
}
}
const oddFriendOutput = oddFriend(allFriendName);
console.log(oddFriendOutput);
// ......... 
var friend = ['abcd', 'abcde'];
function bestFriend(friend){
   var oldFriend = [];
   for(let i = 0; i <friend.length; i++){
      var single = friend[i];
      if(single.length > oldFriend.length){
         oldFriend = single;
      }
   }
   return oldFriend;
}
var best = bestFriend(friend);
// console.log(best); 