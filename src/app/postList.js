const postlist = document.querySelector('.post')

export const setUpPost = (data) => {
  if (data.length) {
    let html = ''

    data.forEach(doc => {
      const post = doc.data()
      const li = `
        <li class='list-group-item list-group-item-action bg-dark>
        <h5><${post.title}<br/></h5>
        <p>${post.content}<hr/></p>
        </li>
      `
      html += li
    })
    postlist.innerHTML = html
  } else {
    postlist.innerHTML = '<h1 class="text-white">There are no post yet, Login to see post 🤠</h1>'
  }
}
