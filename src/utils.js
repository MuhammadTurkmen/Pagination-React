const paginate = (followers) => {
    const itemPerPage = 10
    const pages  = Math.ceil(followers.length / itemPerPage)
    const newFollowers = Array.from({length: pages})
    
}



export default paginate
 