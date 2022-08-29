fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=model")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("authorname").textContent = `${data.user.name}`
  })