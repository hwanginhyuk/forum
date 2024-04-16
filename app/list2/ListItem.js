'use client'

import Link from "next/link";

export default function ListItem({ result }) {

    // useEffect 실행시점? HTML먼저 보여주고 코드를 실행한다
    // 검색엔진 봇이 들어올 경우 노출이 늦어 경제적인 문제가 발생한다
    // useEffect(()=>{
    //    서버에 부탁해서 DB게시물을 가져온다
    //    result = DB게시물    
    // },[])

    // props로 받아오면 props.result.xxx으로 뽑아야하지만 { result } 로 받으면 그냥 쓰면 된다
    return (
        <div>
            {
                result.map((a, i) =>
                    <div className='list-item' key={i}>
                        <Link prefetch={false} href={`/detail/${result[i]._id.toString()}`}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        <Link href={`/edit/${result[i]._id.toString()}`}>✏️</Link>
                        <span onClick={(e) => {
                            fetch('/api/post/delete', {
                                method: 'DELETE',
                                body: result[i]._id
                            }).then((r) => 
                                r.json()
                            ).then(() => {
                                // 성공시 실행할 코드
                                e.target.parentElement.style.opacity = 0
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 1000)
                            })

                            // 쿼리스트링형식으로 데이터 보내기
                            // fetch('/api/post/delete?title=asd)

                            // URL 파라메터로 데이터 보내기
                            // fetch('/api/abc/kim')
                        }}>🗑️</span>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}
// <form>으로 요청 시 항상 새로고침되는데 ajax로 요청시 새로고침을 하지 않는다.
// 요약정리
// 1. DB ducument 삭제는 deleteOne
// 2. 서버랑 ajax로 통신가능
// 3. 서버로 데이터 전송시 query string / URL parameter 사용가능