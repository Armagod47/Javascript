----JAVASCRIPT TIPS & TRICKS----

**Delete Operator**
const name = 'Himangshu';
age = 21;
const obj = {age:99,title:'Boro'}

// console.log(delete name); //prints false
// console.log(delete age); // prints true
//console.log(delete obj.age); // prints true

NOTE : Delete Operator is used to delete properties from an object
This doesnot have any effect on variables declared with var, const, let
This operator will return true on successful deletion from an object & returns false for failed attempt to delete
In above eg. age property will be added to global object.So on successful deletion it will return true.

-----------------------------------
