import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 렌더링 전략
// 다이나믹 렌더링
// export const dynamic = 'force-dynamic'
// 스테틱 렌더링
// export const static = 'force-static'
// 페이지방문시 캐싱, 서버자원을 절약 (list,list2페이지에서 글 생성이후 새로고침하여도 20초이후에 보여지게 된다)
export const revalidate = 20

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