require('datejs');


function combineUsers(...args) {
  let combinedObject = {
    "users": [],
    "merge_date": Date.today().toString("M/d/yyyy")
  };
  

  //outer loop grabs all the arrays that could be passed into combineUsers
  for (let usersArray of args) {
    //inner loop takes each index of any array that could be passed into combineUsers, and adds them as a value for "users":
    for (let user of usersArray) {
      combinedObject.users.push(user);
    }
  }
  

  console.log(combinedObject);
  return combinedObject;
}

combineUsers([1, 27, 14, 2384], ["jerry", "mark"]);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};