import {dbName,client} from './index.js'

const findAll = async ()=>{
    await client.connect()
    try {
        const db = client.db(dbName)
        const users = await db.collection('users').find().toArray()
        return users
    } catch (error) {
        throw error
    }
    finally
    {
        await client.close()
    }
}

const findByFilter = async(filter)=>{
    await client.connect()
    try {
        const db = client.db(dbName)
        return await db.collection('users').findOne(filter)
        
    } catch (error) {
        throw error
    }
    finally
    {
        await client.close()
    }
}

const insertOne = async(data)=>{
    await client.connect()
    try {
        const db = client.db(dbName)
        await db.collection('users').insertOne(data)

    } catch (error) {
        throw error
    }
    finally
    {
        await client.close()
    }
}

const editById = async(filter,data)=>{
    await client.connect()
    try {
        const db = client.db(dbName)
        await db.collection('users').updateOne(filter,{$set:data})

    } catch (error) {
        console.log(error)
        throw error
    }
    finally
    {
        await client.close()
    }
}

const deleteById = async(filter)=>{
    await client.connect()
    try {
        const db = client.db(dbName)
        await db.collection('users').deleteOne(filter)

    } catch (error) {
        console.log(error)
        throw error
    }
    finally
    {
        await client.close()
    }
}

export default {
    findAll,
    insertOne,
    findByFilter,
    editById,
    deleteById
}