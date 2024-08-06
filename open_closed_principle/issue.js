const roles = ['ADMIN', 'USER'];

checkRole = (userRole) => {
    if(roles.includes(userRole)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRole('ADMIN'));        // true
console.log(checkRole('EMPLOYEE'));     // false

/** Above code is written like if existing role is present inside roles array
 *  so it will return true
 *  else it will return false
 * 
 *  What if we want to add new role then in that case code is not present we can't just modify
 *  checkRole function and add else if ladder there because it violates OCP
 */