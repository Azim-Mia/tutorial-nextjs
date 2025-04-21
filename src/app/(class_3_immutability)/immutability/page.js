import Immutability from './Immutability';
import MovieWatch from './MovieWatch'
export default function ClassThree(){
  return (<div className="flex flex-col items-center justify-center gap-6">
   <div><h1>Class_1 Routing page</h1></div>
   <div><h1>Class_2 Navigation</h1></div>
  <div className="flex flex-col items-center justify-center gap-6"> 
 <h1>Class_3 Immutability</h1>
<Immutability />
<MovieWatch />
</div>
  </div>)
}