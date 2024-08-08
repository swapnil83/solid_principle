class MySQLDatabase {
    connect() {
        console.log('Connect to MySQL Database');
    }

    query(sql) {
        console.log(`Executing query: ${sql}`)
    }
}

class DataFetcher {
    constructor() {
        this.db = new MySQLDatabase();
    }

    fetchData() {
        this.db.connect();
        this.db.query('SELECT * FROM USERS');
    }
}

const fetcher = new DataFetcher();
fetcher.fetchData();

/** 
 * As you can see above, DataFetcher directly depends on MySQLDatabase, 
 * which means you cannot create a fetcher for a different type of database 
 * without modifying the DataFetcher class. This tight coupling limits flexibility 
 * and violates the Dependency Inversion Principle.
*/