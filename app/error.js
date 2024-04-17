'use client'
// 상위폴더까지 다 확인하기에 app하위에 만들면 좋다
// layout.js는 에러체크가 되지 않는다
// 체크하기 위해서는 더 상위 폴더에 위치시키거나 global-error.js를 만들면 최상위 layout.js에러도 체크가 가능하다
export default function Error({error, reset}){
    return(
        // if문으로 처리하여 다양하게 페이지에 에러내용을 보여준다
        <div>
        <h4>상세페이지 에러</h4>
        <button onClick={()=>{ reset() }} >리셋버튼</button>
        </div>
    )
}