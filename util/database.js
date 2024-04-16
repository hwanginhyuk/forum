import { MongoClient } from "mongodb"

// MongoDB 연결페이지
// forum을 추가해서 세션을 해당 저장소에 저장한다
const url = 'mongodb+srv://admin:Xc9JY0QDZyfsLnpL@cluster0.gwqg0we.mongodb.net/forum?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url, options).connect()
}

export { connectDB } 