import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

// [Dynamic Route] : Dynamic Route 자리를 props로 받을수 있다 { params: { id: '6618ee4bf17a2fc1add341f9' }, searchParams: {} }
export default async function Detail(props) {

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})
    // console.log(props)
    if(result == null){
        // page.js 대신 not-found.js를 보여주는 함수
        return notFound()
    }

    return (
        <div className='list-bg'>
                    <div className='list-item'>
                        <h4>상세페이지</h4>
                        <h4>{result.title}</h4>
                        <p>{result.content}</p>
                        <Comment _id = {result._id.toString()} />
                    </div>
        </div>
    )
}