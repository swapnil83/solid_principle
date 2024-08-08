class Database {
    connect() {
        throw new Error('Method connect() must be implemented');
    }

    query(sql) {
        throw new Error('Method query(sql) must be implemented');
    }
}

class MySQLDatabase extends Database {
    connect() {
        console.log('Connection established for SQL Database');
    }

    query(sql) {
        console.log(`Excuting SQL Query: ${sql}`);
    }
}

class MongoDBDatabase extends Database {
    connect() {
        console.log('Connection established for Mongo DB');
    }

    query(query) {
        console.log(`Executing Mongo Query: ${query}`);
    }
}

class DataFetcher {
    constructor(database) {
        this.db = database;
    }

    fetchData() {
        this.db.connect();
        this.db.query('SELECT * FROM USERS');
    }
}

const sqlDb = new MySQLDatabase();
const fetcher1 = new DataFetcher(sqlDb);
fetcher1.fetchData();

const mongoDb = new MongoDBDatabase();
const fetcher2 = new DataFetcher(mongoDb);
fetcher2.fetchData();

/** 
 * As you can see, we have separated the dependency of the DataFetcher class 
 * by introducing an abstraction (the Database class). 
 * We then implemented two different classes (MySQLDatabase and MongoDBDatabase) 
 * that provide their own implementations of the connect and query methods.
 * This approach allows the DataFetcher class to depend on an abstraction rather than 
 * a specific database implementation, adhering to the Dependency Inversion Principle.
*/