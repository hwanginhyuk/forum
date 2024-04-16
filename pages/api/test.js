export default function handler(요청, 응답){
    // console.log('응답완료')
    if(요청.method == 'GET'){
        return 응답.status(200).json('GET요청 처리완료')
    }
    if(요청.method == 'POST'){
        return 응답.status(200).json('POST요청 처리완료')
    }

    
}
// 서버기능 처리성공시에 status(200)
// 서버기능 처리실패시에 status(500)
// 서버기능 처리실패시에(유저잘못) status(400)