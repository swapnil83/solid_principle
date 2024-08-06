function validateAndCreateUser(name, email, password) {
    const isFormValid = testForm(name, email, password);

    if(isFormValid) {
        Uses.create(name, email, password);
    }
}

/** If you see above validateAndCreateUser function is performing 2 operations
 * 1. validating form parameters
 * 2. storing into the DB
 * 
 * So it violates SRP
 */