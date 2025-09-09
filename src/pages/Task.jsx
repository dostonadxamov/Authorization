import { useParams } from "react-router-dom"
import useDocument from "../hook/useDocument"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

export default function Task() {
  const { id } = useParams()
  const { data } = useDocument(id, "tasks")
  const { user } = useSelector((store) => store.user)
  console.log(data);


  if (!data) {
    return <p>Loading...</p>  
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const comment = data.get('comment')
    const commentRef = doc(db, "tasks", id)
    const newComment = {
      text: comment,
      photoURL: user.photoURL,
      displayName: user.displayName
    }
    await updateDoc(commentRef, {
      comments: [...data?.comment,  newComment ]
    })


    e.target.reset()
  }

  return (
    <div>
      <h1>task - {data?.name}</h1>


      <div className="task__wrapper">
        {data?.comments?.length === 0 ? 'No Comments' :
          <div>
            {data.comments.map((comment) => {
              return <span className="chat">
                <div className="img">
                  <img src={comment.photoURL} width={50} height={50} alt="" />
                </div>
                <p>{comment.text}</p>
              </span>
            })}
          </div>
        }
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="add comment" name="comment" />
          <button>add</button>
        </form>
      </div>
    </div>
  )
}
