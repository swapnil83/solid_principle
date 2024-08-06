const roles = ['ADMIN', 'USER'];

checkRole = (userRole) => {
    if(roles.includes(userRole)) {
        return true;
    } else {
        return false;
    }
}

addRole = (newRole) => {
    roles.push(newRole);
}

console.log(checkRole('ADMIN'));        // true
console.log(checkRole('EMPLOYEE'));     // false

addRole('SUPERVISOR');
console.log(checkRole('SUPERVISOR'));   // true

/** In above code instead of doing modification we have added new addRole function(extension)
 *  which takes newRole as input and insert it into roles array
 * 
 *  So it follows OCP
 */