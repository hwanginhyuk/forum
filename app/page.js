import { connectDB } from "@/util/database";
import List from "./list/page";

export default async function Home() {

  // DB출력 결과 캐싱
  // 1. fetch()로 바꾼다
  // 2. revalidate 예약변수 사용
  // 2-1. export const revalidate = 60; -> 방문시 캐싱된다, 페이지단위 캐싱가능
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray()

  // GET요청 결과 캐싱가능
  // await fetch('/URL', {cache : 'force-cache'})
  // 60초마다 캐싱된 데이터를 갱신한다
  // await fetch('/URL', {next : {revalidate : 60}})
  
  return (
    <div>
      <List />
    </div>
  );
}
// 1. HTML 페이지 필요
// 2. 그 페이지 방문하면 DB에서 글 꺼내옴
// 3. 글들을 HTML에 넣기