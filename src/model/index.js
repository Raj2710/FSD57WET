import {MongoClient} from 'mongodb'
const url = `mongodb://Raj2710:Raj2710@raj-shard-00-00.x3e0h.mongodb.net:27017,raj-shard-00-01.x3e0h.mongodb.net:27017,raj-shard-00-02.x3e0h.mongodb.net:27017/?replicaSet=atlas-3e8ibx-shard-0&ssl=true&authSource=admin`
export const dbName = 'fsd57-express'
export const client = new MongoClient(url)