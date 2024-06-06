document.getElementById('my-button').addEventListener('click',function(){
    console.log('Hello world');
    document.querySelector('h1').textContent='Moi maailma';
});
document.getElementById('add-data').addEventListener('click', function() {
    let ul = document.getElementById('my-list');
    let li = document.createElement('li');
    let text = document.getElementById('list-text').value;
    li.textContent = text;
    ul.appendChild(li);
});