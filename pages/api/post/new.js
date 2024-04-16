import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    // 서버에 저장된 세션값을 가져오는 로직
    // 가저온 세션값을 데이터 항목으로 할당하여 insertOne으로 저장한다
    let session = await getServerSession( 요청, 응답, authOptions )
    if (session){
        요청.body.author = session.user.email
    }
    if (요청.method == 'POST') {
        if (요청.body.title == '') {
            응답.status(500).json('제목을 작성해주세요')
        } else if (요청.body.content == '') {
            응답.status(500).json('글을 작성해주세요')
        }
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').insertOne(요청.body)
            응답.status(200).redirect(302,'/') 
        } catch (error) {
            응답.status(500).json('저장실패')
        }        
    }
}