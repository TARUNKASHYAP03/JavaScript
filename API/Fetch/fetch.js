fetch('https://jsonplaceholder.typicode.com/postscs')
  .then(response => response.json())  // response ko JSON me badla
  .then(data => {
    console.log(data);  // yahan data array milega
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
