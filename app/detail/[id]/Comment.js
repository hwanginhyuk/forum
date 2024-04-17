'use client'
import { useState, useEffect  } from 'react';

export default  function Comment(props){

    let [comment, setComment] = useState('')

    useEffect(()=>{
        fetch()
    },[])

    return(
        <div>
            <div>댓글목록</div>
            <input onChange={(e)=>{ setComment(e.target.value) }}/>
            <button
                onClick={ ()=>  {
                    fetch('/api/comment/new',
                    { 
                        method : 'POST', 
                        body : JSON.stringify({ comment :comment, _id : props._id })
                    })
                }}
            >댓글전송</button>
        </div>
    )
}
// DB 저장시 좋은 방식인지 모르겠다면
// 나중에 수정, 삭제, 출력이 쉽게 처리가 된다면 잘된것이고
// 수정, 삭제, 출력이 어렵다면 document로 빼는것이 좋다
// document로 뺄 때 어떤 곳에 종속되었는지 같이 넘겨주면 좋다
// 예를 들어 댓글이 달린 게시글의 id값 ( ObjectId(부모게시물의 _id) )을 남긴다