/* 
        DECORATOR
A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments. 
Also, it optionally returns a decorator descriptor to install on the target object. 
Let's define admin decorator for user class at design time,
*/
function admin(isAdmin) {
   return function(target) {
       target.isAdmin = isAdmin;
   }
}

@admin(true)
class User1() {
}
console.log(User1.isAdmin); //true

 @admin(false)
 class User2() {
 }
 console.log(User2.isAdmin); //false