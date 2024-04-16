import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {
        let session = await getServerSession(요청, 응답, authOptions)
        const db = (await connectDB).db('forum');
        let 찾은거 = await db.collection('post').findOne(
            { _id: new ObjectId(요청.body) }
        )

        if (찾은거.author == session.user.email) {
            let result = await db.collection('post').deleteOne(
                { _id: new ObjectId(요청.body) }
            )
            // 여기서 redirect 적용하면 span태그에 적용한 opacity 변화를 줄수 가 없다
            return 응답.status(200).json('삭제성공')
        } else {
            return 응답.status(500).json('현재유저와 작성자 불일치')
        }
    }
}        
