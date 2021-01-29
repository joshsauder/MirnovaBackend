const AWS = require('aws-sdk')

class Database {

    constructor(){
        if (!this._connection) {
            const params = {
                region: 'us-east-1',
                apiVersion: '2012-08-10',
            };
            
            this._connection = new AWS.DynamoDB.DocumentClient(params);
        }
    }

    async putItem(params) {
        return new Promise((resolve, reject) => {
            this._connection.put(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    async getItem(params) {
        return new Promise((resolve, reject) => {
            this._connection.get(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    async scan(params) {
        return new Promise((resolve, reject) => {
            this._connection.scan(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    async deleteItem(params) {
        return new Promise((resolve, reject) => {
            this._connection.deleteItem(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = Database;