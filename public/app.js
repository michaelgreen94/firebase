document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app()

  const db = firebase.firestore()

  const myPost = db.collection('posts').doc('firstpost')

  // myPost.get()
  //   .then(doc => {
  //     const data = doc.data();
  //     console.log(data)
  //     document.write(data.title + `<br>`)
  //     document.write(data.createdAt)
  //   })

  // myPost.onSnapshot(doc => {
  //   const data = doc.data()
  //   document.write(data.title + `<br>`)
  //   document.write(data.createdAt + `<br>`)
  // })

  myPost.onSnapshot(doc => {
    const data = doc.data()
    document.querySelector('#title').innerHTML = data.title
  })
})

function updatePost(e) {
  const db = firebase.firestore()
  const myPost = db.collection('posts').doc('firstpost')
  myPost.update({ title: e.target.value })
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(res => {
      const user = res.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user)
    })
    .catch(console.log)
}
