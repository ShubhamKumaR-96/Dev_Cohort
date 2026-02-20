import { useEffect, useState } from "react"

export const useFetch=()=>{
    const [post,setPost]=useState({})

    async function getPosts(){
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json=await response.json()
        console.log(json)
        setPost(json)
    }

    useEffect(()=>{
        getPosts()
    },[])

    return {post}
}