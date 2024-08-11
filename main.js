fetch("https://jsonplaceholder.typicode.com/photos")
  .then((Response) => Response.json())
  .then((res) => {
    console.log(res);
    let row = "";
    for (let photo of res) {
      row += `<div class="card">
            <h3>albumId:${photo.albumId}</h3>
            <h4>${photo.id}</h4>
            <p class="title">${photo.title}</p>
            <button class="btn"><a href="#">${photo.url}</a></button>
            <img  src="${photo.thumbnailUrl}"/>
            </div>`;
    }
    document.getElementById("root").innerHTML = row;
  })
  .catch((error) => console.log(error));
