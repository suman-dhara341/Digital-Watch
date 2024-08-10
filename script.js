
let timeUpdate=()=>{
    let time=new Date().toLocaleTimeString();
    let date=new Date().toDateString();
    // console.log(date)
    document.getElementById("time").innerHTML = `<p>${time}</p>${date}`;

}
timeUpdate()

setInterval(timeUpdate,1000)