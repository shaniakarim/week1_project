// Change h1 text and print to console
document.getElementById('my-button').addEventListener('click', function() {
    console.log('Hello world');
    document.getElementById('heading').textContent = 'Moi maailma'; // Check ID: heading
});

// Add list item with custom text from textarea
document.getElementById('add-data').addEventListener('click', function() {
    let ul = document.getElementById('my-list');  // Check ID: my-list
    let li = document.createElement('li');       
    let text = document.getElementById('list-text').value; // Check ID: list-text
    li.textContent = text;  
    ul.appendChild(li);     
});
