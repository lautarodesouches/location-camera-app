import * as SQLite from 'expo-sqlite'

const tableName = 'address'

const db = SQLite.openDatabase('address.db')

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL)`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}

export const insertAddress = (title, image, address, coords) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO ${tableName} (title, image, address, coords) VALUES (?, ?, ?, ?)`,
                [title, image, address, JSON.stringify(coords)],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise

}

export const fetchAddresses = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${tableName}`,
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise

}