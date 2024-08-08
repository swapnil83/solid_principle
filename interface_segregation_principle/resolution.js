class Coder {
    code() {
        console.log('Coding...');
    }
}

class Tester {
    test() {
        console.log('Testing...');
    }
}

class Manager {
    manage() {
        console.log('Managing...');
    }
}

class Developer {
    constructor(coder) {
        this.coder = coder;
    }

    doWork() {
        this.coder.code();
    }
}

class QAEngineer {
    constructor(tester) {
        this.tester = tester;
    }

    doWork() {
        this.tester.test();
    }
}

class ProjectManager {
    constructor(manager) {
        this.manager = manager;
    }

    doWork() {
        this.manager.manage();
    }
}

const coder = new Coder();
const developer = new Developer(coder);
developer.doWork();

const tester = new Tester();
const qaEngineer = new QAEngineer(tester);
qaEngineer.doWork();

const manager = new Manager();
const projectManager = new ProjectManager(manager);
projectManager.doWork();

/** 
 * In the code above, we are adhering ISP
 * Each class is designed to receive only the functionality specific to its role, 
 * rather than being forced to implement methods it doesn't need. 
 * This keeps the design modular and focused, ensuring that each class depends only 
 * on the interfaces it actually uses.
*/