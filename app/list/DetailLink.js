'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    // 현재 URL을 알 수 있다.
    let pathname = usePathname()
    // 현재 Parameter을 알 수 있다 , 쿼리스트링
    let parameter = useSearchParams()
    // return(
    //     <button onClick={()=>{ router.push('/') }}
    //     >홈으로 이동</button>
    // )
}