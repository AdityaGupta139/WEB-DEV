export default  function Page({ params }) {
  let languages = ["python", "javascript", "java", "c++", "c#", "ruby", "php", "swift", "kotlin", "go"];
  if (languages.includes(params.slug)) {
    return <div>My Post: {params.slug}</div>

    } else {
    return <div>Blog not found</div>
  }
  
}