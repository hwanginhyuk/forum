import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 렌더링 전략
// 다이나믹 렌더링
export const dynamic = 'force-dynamic'
// // 스테틱 렌더링
// export const static = 'force-static'

export default async function List() {

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray()

    return (

        <div className='list-bg'>
            <ListItem result = {result} />
        </div>
    )
}
// 캐싱 : 결과를 잠깐 저장해두고 재사용
// GET요청결과 캐싱 : GET요청결과를 잠깐 저장해두고 재사용