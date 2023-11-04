async function fetchLocation(){
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}

async function updateIpAddress(){
    const ipAddressElement = document.getElementById("ipAddress");
    const ipAddress = await fetchLocation();
    ipAddressElement.textContent = ipAddress;
}

updateIpAddress();

// function showDetails(){
//     const details = document.getElementById("getStartedBtn");
//     details.addEventListener('onclick', ()=>{
//         window.location.href = "postDetails.html";
//     })
// }

document.getElementById("getStartedBtn").addEventListener('click',()=>{
    window.location.href = "postDetails.html";
})