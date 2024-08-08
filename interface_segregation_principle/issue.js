class Worker {
    code() {
        console.log('Coding...');
    }

    test() {
        console.log('Testing...');
    }

    manage() {
        console.log('Managing...');
    }
}

class Developer extends Worker {
    // what should developer will do with manage functionality
}

class Tester extends Worker {
    // what should tester will do code functionality
}

/** Above code violates ISP */