import { createSlice } from "@reduxjs/toolkit";
import { findIndexById } from "../utils/Helper";
const BlogSlice = createSlice({
    initialState:{
        blogs:[],
        blog:{}
    },
    name:"blog",
    reducers:{
        save:saveBlogs,
        deleteById:deleteBlogById,
        edit:editBlogById

    }
})
console.log(BlogSlice.actions)
export const {save,edit,deleteById} = BlogSlice.actions

export default BlogSlice.reducer

function saveBlogs(state,action){
    state.blogs = action.payload
}
function deleteBlogById(state,action){
    let index = findIndexById(state.blogs,action.payload)
    state.blogs.splice(index,1)
}
function editBlogById(state,action){
    let index = findIndexById(state.blogs,action.payload)
    state.blogs[index].status = !state.blogs[index].status
}