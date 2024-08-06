function validateRequest(name, email, password) {
    const isFormValid = testForm(name, email, password);

    if(isFormValid) {
        createUser(name, email, password);
    }
}

const createUser = (name, email, password) => Uses.create(name, email, password);

/** Above you see now for each operation we have 2 different functions
 * 1. To validate parameters we have validateRequest function
 * 2. To store details into the DB we have createUser function
 * 
 * So it follows SRP
 */