const Comments = async({promise})=>{
const comments =await promise;
  return (
    <div>
    <h1 className="mt-7">Comments</h1>
    {comments.map(comment=><ul key={comment.id} className="p-4">
    <li>{comment.name}</li>
    <li>{comment.email}</li>
    </ul>)}
    </div>
    )
}
export default Comments;