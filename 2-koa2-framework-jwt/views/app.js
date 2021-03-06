/**
 * 
 */

document.getElementById('jwtusers').addEventListener('click', () => {
    const token = sessionStorage.getItem('token')
    console.log(token)
    fetch('/users',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,          
        }
    })
    .then(res => res.json())
    .then(data => {
        alert("current user is "+JSON.stringify(data));
    })
    .catch(err => console.log(err))
})