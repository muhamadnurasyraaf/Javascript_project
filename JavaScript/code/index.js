let name = 'Asyraaf';
console.log(name);
alert('Hi ' +  name + '!');

/* this 
is 
a 
multiline 
comment 
*/

document.getElementById('save').onclick = function(){
    let username = document.getElementById('username').value;
    document.body.innerHTML = 'Hi ' +  username;
}
