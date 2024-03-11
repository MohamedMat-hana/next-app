import Link from "next/link"
import Todo from "../components/Todo"
export default async function page2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
    const posts = await response.json()
    // console.posts(todo)
    const maps = posts.map((todo) => {
        return (
            <>
                <Link href={`/pages2/${todo.id}`} style={{ width: "70%" }}>
                    <div style={{
                        backgroundColor: "#fff",
                        padding: 10,
                        margin: 11,
                        borderRadius: 12
                    }}>
                        <h1 style={{ color: "#000" }}>
                            {todo.id}
                        </h1>
                        <h1 style={{ color: "#000" }}>
                            {todo.title}
                        </h1>
                        <h2 style={{ color: "#000" }}>
                            {todo.body}
                        </h2>
                    </div>
                </Link>
            </>
        )
    })
    return (
        <div>
            <h1>
                first
            </h1>
            <Link href="/pages" >
                <button>to other page</button>
            </Link>
            <div>
                {maps}
            </div>
            {/* <h1>
                {todo.title}
            </h1>

            <div>
                <Todo />
            </div>*/}
        </div>
    )
}