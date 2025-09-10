import { useParams } from "react-router-dom"
import useDocument from "../hook/useDocument"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

export default function Task() {
  const { id } = useParams()
  const { data } = useDocument(id, "tasks")
  const { user } = useSelector((store) => store.user)

  if (!data) {
    return <p>Loading...</p>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const comment = formData.get('comment')
    const commentRef = doc(db, "tasks", data.id)
    const newComment = {
      text: comment,
      photoURL: user.photoURL,
      displayName: user.displayName
    }
    await updateDoc(commentRef, {
      comments: [...(Array.isArray(data.comments) ? data.comments : []), newComment]
    })
    e.target.reset()
  }

  return (
    <div className="task__wrapper w-full max-w-2xl mx-auto my-10 bg-black/60 rounded-lg p-6 box-border">
      <h2 className="text-center text-white text-2xl font-semibold mb-4">{data?.name}</h2>
      <div className="flex flex-col gap-4 min-h-[500px] max-h-[350px] overflow-y-auto mb-6">
        {Array.isArray(data?.comments) && data.comments.length === 0 && (
          <div className="text-white text-center">No Comments</div>
        )}
        {Array.isArray(data?.comments) && data.comments.map((comment, idx) => (
          <div
            className="chat flex  gap-3 bg-white/10 rounded-md p-3"
            key={idx}
          >
            <img
              src={comment.photoURL}
              width={40}
              height={40}
              alt={comment.displayName}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-yellow-400">{comment.displayName}</div>
              <div className="text-white">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          name="comment"
          placeholder="Add comment"
          className="flex-1 rounded-md px-3 py-2 outline-none bg-white/80 text-black"
          required
        />
        <button className="rounded-md px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition">
          Add
        </button>
      </form>
      </div>
    </div>
  )
}