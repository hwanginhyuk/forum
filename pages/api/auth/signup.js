import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"


export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        if (요청.body.name == '') {
            응답.status(500).json('이름을 작성해주세요')
        } else if (요청.body.email == '') {
            응답.status(500).json('이메일을 작성해주세요')
        } else if (요청.body.password == '') {
            응답.status(500).json('비밀번호을 작성해주세요')
        } else {
            let hash = await bcrypt.hash(요청.body.password, 10)
            요청.body.password = hash

            let db = (await connectDB).db('forum')
            const 이메일중복 = await db.collection('user_cred').findOne({
                email: 요청.body.email
            })
            if (이메일중복) {
                응답.status(500).json('이미 가입한 이메일입니다')
            } else {
                let db = (await connectDB).db('forum')
                await db.collection('user_cred').insertOne(요청.body)
                return 응답.status(200).redirect(302, '/')
            }
        }
    }
}
