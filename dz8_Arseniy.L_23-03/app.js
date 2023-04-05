fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        data.slice(0, 50).forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.url;
            document.body.appendChild(img);
        });
    })
    .catch(error => console.error(error))

