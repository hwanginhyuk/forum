import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        // 요청.body에 _id가 같이 날라오기에 바꿀내용은 따로 변수에 저장해서 넘겨준다
        let 바꿀꺼 = {
            title : 요청.body.title, 
            content : 요청.body.content
        }
        if (요청.body.title == '') {
            응답.status(500).json('제목을 작성해주세요')
        } else if (요청.body.content == '') {
            응답.status(500).json('글을 작성해주세요')
        }
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').updateOne(
                {_id: new ObjectId(요청.body._id)},
                {$set : 바꿀꺼}
            )
            // 응답에서 .json('내용')을 붙이면 redirect가 안된다
            응답.status(200).redirect(302,'/')
        } catch (error) {
            응답.status(500).json('수정실패')
        }        
    }
}