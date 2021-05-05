
function addPost(data) {
    return {
        type: "ADD_POST",
        payload: data
    }
}

export { addPost }