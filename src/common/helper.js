export const findIndexById = (array,id)=>{
    for(let i=0;i<array.length;i++)
    {
        if(array[i].id === id)
            return i
    }
    return -1
}