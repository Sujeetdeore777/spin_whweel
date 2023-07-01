
// function shuffle (array) {
//     var currentIndex = array.length,
//     randomIndex;

//     while(0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex --;
//     [array[currentIndex], array[randomIndex]] = [

//         array[currentIndex],
//         array[currentIndex],
//     ]

//     }
//     return array;
// }

// function spin(){
//     wheel.play();
//     const box = document.getElementById("box");
//     const element = document.getElementById("mainbox");
//     let SelectedItem = "";

//     let AC = shuffle([1890, 2250, 2610]);
//     let Camera = shuffle([1850, 2210, 2570]);
//     let Zonk = shuffle([1770, 2130, 2490]);
//     let PS = shuffle([1810, 2170, 2530]);
//     let Headset = shuffle([1750, 2110, 2470]);
//     let Drone = shuffle( [1630, 1990, 2350]);
//     let ROG = shuffle([1570, 1930, 2290]);

//     let results = shuffle([
//         AC[0],
//         Camera[0],
//         Zonk[0],
//         PS[0],
//         Headset[0],
//         Drone[0],
//         ROG[0],
//     ])

//     if(AC.includes(results[0])) SelectedItem = 'Air Conditioner';
//     if(Camera.includes(results[0])) SelectedItem = 'Camera sport action';
//     if(Zonk.includes(results[0])) SelectedItem = '🤡';
//     if(PS.includes(results[0])) SelectedItem = 'Plastation 4';
//     if(Headset.includes(results[0])) SelectedItem = 'Headset gamming';
//     if(Drone.includes(results[0])) SelectedItem = 'Mini drone';
//     if(ROG.includes(results[0])) SelectedItem = 'Gamming Phones';

//     box.style.setProperty("transition","all ease 5s");
//     box.style.transform = "rotate(" + results[0] + "deg)";
//     element.classList.remove("animate");

//     setTimeout(function(){
//         element.classList.add("animate");
//     },5000);

//     setTimeout(function(){
//         applause.play();
//         Swal.fire({
//         title: 'Sweet!',
//         html: 'You Won ' + SelectedItem + '|' + '<a href="#"> Claim now </a>',
//         // imageUrl: './assets/logo.png',
//         imagewidth: 200,
//         imageHeight: 200,
//         imageAlt: 'Custom image',
//     })
// }, 8000)

    

//     setTimeout(function(){
//         box.style.setProperty("transition","initial");
//         box.style.transform = "rotate(90deg)"; 
//     },12000);

// }











// Define a variable to track the number of spins
let spinCount = 0;

function shuffle (array) {
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex --;
    [array[currentIndex], array[randomIndex]] = [

        array[currentIndex],
        array[currentIndex],
    ]

    }
    return array;
}

function spin() {
  wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  let AC = shuffle([1890, 2250, 2610]);
  let Camera = shuffle([1850, 2210, 2570]);
  let Zonk = shuffle([1770, 2130, 2490]);
  let PS = shuffle([1810, 2170, 2530]);
  let Headset = shuffle([1750, 2110, 2470]);
  let Drone = shuffle([1630, 1990, 2350]);
  let ROG = shuffle([1570, 1930, 2290]);

  let results = shuffle([
    AC[0],
    Camera[0],
    Zonk[0],
    PS[0],
    Headset[0],
    Drone[0],
    ROG[0],
  ]);

  if (spinCount === 0) {
    // First spin, display "Try again"
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");

    setTimeout(function () {
      element.classList.add("animate");
      Swal.fire({
        title: 'Try Again',
        text: 'Better luck next time!',
        icon: 'info',
        showConfirmButton: false,
        timer: 2000
      });
    }, 5000);
  } else {
    // Subsequent spins, display the gift card
    let prizeIndex = Math.floor(Math.random() * results.length);
    let prize = results[prizeIndex];

    if (AC.includes(prize)) SelectedItem = 'Air Conditioner';
    if (Camera.includes(prize)) SelectedItem = 'Camera sport action';
    if (Zonk.includes(prize)) SelectedItem = '🤡';
    if (PS.includes(prize)) SelectedItem = 'Playstation 4';
    if (Headset.includes(prize)) SelectedItem = 'Gaming Headset';
    if (Drone.includes(prize)) SelectedItem = 'Mini Drone';
    if (ROG.includes(prize)) SelectedItem = 'Gaming Phone';

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + prize + "deg)";
    element.classList.remove("animate");

    setTimeout(function () {
      element.classList.add("animate");
      applause.play();
      Swal.fire({
        title: 'Congratulations!',
        html: 'You won ' + SelectedItem + '<br><a href="#">Claim now</a>',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 5000
      });
    }, 5000);
  }

  spinCount++; // Increment the spin count
}
