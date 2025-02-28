window.addEventListener("load", start);

//erklærer constanter
const vand1_con = document.querySelector("#vand1_container");
const vand2_con = document.querySelector("#vand2_container");
const vand3_con = document.querySelector("#vand3_container");

//document.querySelector("#vand1_container") - gå til edit og vælg replace og skriv vand1_con i stedet og replace
const vand1_sp = document.querySelector("#vand1_sprite");
const vand2_sp = document.querySelector("#vand2_sprite");
const vand3_sp = document.querySelector("#vand3_sprite");

//erklærer constanter
const ild1_con = document.querySelector("#ild1_container");
const ild2_con = document.querySelector("#ild2_container");
const ild3_con = document.querySelector("#ild3_container");

//document.querySelector("#ild1_container") - gå til edit og vælg replace og skriv vand1_con i stedet og replace
const ild1_sp = document.querySelector("#ild1_sprite");
const ild2_sp = document.querySelector("#ild2_sprite");
const ild3_sp = document.querySelector("#ild3_sprite");

//nulstil liv og point
let mine_liv;
let mine_point;

//randomnumber
let rndNum;

//lyde
let minlydvand = document.querySelector("#lydvand");
let minlydild = document.querySelector("#lydild");
let minbroadway = document.querySelector("#broadway");
let minvino = document.querySelector("#vino");

function startGame() {
  //udskriver funktionsnavn
  console.log("startGame");

  //gem alle skærme
  hideAllScreens();

  //afspil baggrundsmusik
  playBroadway();

  document.querySelector("#mute_btn").classList.add("soundOn");
  document.querySelector("#mute_btn").addEventListener("click", mute);

  //nulstil liv og point
  mine_liv = 3;
  mine_point = 0;

  //opdater liv og point
  document.querySelector("#live").textContent = mine_liv;
  document.querySelector("#points").textContent = mine_point;

  // //Starter timer-animationen på masken
  document.querySelector("#vand").classList.add("vandtimer");

  // når timeranimationen er færdig kaldes funktionen endGame()
  document.querySelector("#vand").addEventListener("animationend", endGame);

  //tildeler en random position til ild  og vand
  rndNum = generateRandomNumber(6);
  let rndFaldPos = "pos" + rndNum;
  vand1_con.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "pos" + rndNum;
  vand2_con.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "pos" + rndNum;
  vand3_con.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "pos" + rndNum;
  ild1_con.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "pos" + rndNum;
  ild2_con.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "pos" + rndNum;
  ild3_con.classList.add(rndFaldPos);

  //tildeler en random delay til ild og vand
  rndNum = generateRandomNumber(3);
  let rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  vand1_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  vand2_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  vand3_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  ild1_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  ild2_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  console.log("ild1" + rndDelay);
  ild3_container.classList.add(rndDelay);

  //lav random speed til ild og vand
  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  vand1_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  vand2_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  vand3_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  ild1_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  ild2_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  console.log("ild1" + rndSpeed);
  ild3_container.classList.add(rndSpeed);

  //starter animation på elementer
  vand1_con.classList.add("fald");
  vand2_con.classList.add("fald");
  vand3_con.classList.add("fald");

  ild1_con.classList.add("fald");
  ild2_con.classList.add("fald");
  ild3_con.classList.add("fald");

  //eventlistenere: lytter om der bliver klikket
  vand1_con.addEventListener("mousedown", clickVand1);
  vand2_con.addEventListener("mousedown", clickVand1);
  vand3_con.addEventListener("mousedown", clickVand1);

  vand1_con.addEventListener("animationiteration", resetVand1);
  vand2_con.addEventListener("animationiteration", resetVand1);
  vand3_con.addEventListener("animationiteration", resetVand1);

  ild1_con.addEventListener("mousedown", clickIld1);
  ild2_con.addEventListener("mousedown", clickIld1);
  ild3_con.addEventListener("mousedown", clickIld1);

  ild1_con.addEventListener("animationiteration", resetIld1);
  ild2_con.addEventListener("animationiteration", resetIld1);
  ild3_con.addEventListener("animationiteration", resetIld1);
}

function clickVand1() {
  console.log("clickVand1");

  this.classList.add("frys");
  this.firstElementChild.classList.add("forsvind");

  //tæl point
  mine_point = mine_point + 1;

  //opdater liv og point
  document.querySelector("#points").textContent = mine_point;

  this.addEventListener("animationend", resetVand1);

  playLydvand();
}

function clickIld1() {
  console.log("clickIld1");

  this.classList.add("frys");
  this.firstElementChild.classList.add("forsvind");

  //tæl liv
  mine_liv = mine_liv - 1;

  //opdater liv og point
  document.querySelector("#live").textContent = mine_liv;

  if (mine_liv === 0) {
    endGame();
  } else {
    this.addEventListener("animationend", resetIld1);
  }

  playLydild();
}

function resetVand1() {
  console.log("resetVand1");

  //fjern alle klasser fra vand1_container og lav om til "this" så det gælder de andre ild
  this.classList = "";

  //fjern klasser fra vand1_sprite
  this.firstElementChild.classList = "";

  rndNum = generateRandomNumber(5);
  let rndFaldPos = "pos" + rndNum;

  //tildeler en position
  this.classList.add(rndFaldPos);

  //force reflow på vand1_container
  this.offsetHeight;

  //put klassen .fald på vand1_container
  this.classList.add("fald");
}

function resetIld1() {
  console.log("resetIld1");
  //fjern alle klasser fra ild1_container
  this.classList = "";

  //fjern klasser fra ild1_sprite
  this.firstElementChild.classList = "";

  rndNum = generateRandomNumber(6);
  let rndFaldPos = "pos" + rndNum;

  //force reflow på vand1_container
  this.offsetHeight;

  //tildeler en position
  this.classList.add(rndFaldPos);
  console.log("ny position er " + rndFaldPos);

  //put klassen .fald på vand1_container
  this.classList.add("fald");

  //ny random speed
  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);
}

function endGame() {
  console.log("endGame");

  document.querySelector("#vand").removeEventListener("animationend", endGame);

  //fjern alle klasser fra ild1_container
  vand1_con.classList = "";

  //fjern alle klasser fra ild1_container
  ild1_con.classList = "";

  // når timeranimationen er færdig kaldes funktionen endGame()
  document.querySelector("#vand").classList = "";
  document.querySelector("#vand").removeEventListener("animationend", endGame);
  document.querySelector("#vand").addEventListener("vandtimer", endGame);

  //Tjek om spillet er vundet

  if (mine_point < 10 || mine_liv === 0) {
    gameOver();
  } else {
    success();
  }
}

function gameOver() {
  console.log("gameOver");
  //vis gameOver skærm
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#replaygo").addEventListener("click", startGame);
}

function success() {
  console.log("success");
  //vil success skærm
  hideAllScreens();
  document.querySelector("#success").classList.remove("hide");
  document.querySelector("#replaysu").addEventListener("click", startGame);
}

function start() {
  console.log("start");
  //vil success skærm
  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#start_knap").addEventListener("click", startGame);
}

//Hjælpefunktioner herunder

function generateRandomNumber(antal) {
  //genererer et tilfældigt tal mellem 1 og x
  let number = Math.floor(Math.random() * antal) + 1;
  //returnerer tallet
  return number;
}

function hideAllScreens() {
  //skjuler skærmene indtil til bliver kaldt
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#success").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
}

//lyde funktioner

let lydePaa = true;

function playLydvand() {
  if (lydePaa === true) {
    minlydvand.currentTime = 0;
    minlydvand.play();
  }
}

function playLydild() {
  if (lydePaa === true) {
    minlydild.currentTime = 0;
    minlydild.play();
  }
}

function playBroadway() {
  if (lydePaa === true) {
    minbroadway.currentTime = 0;
    minbroadway.play();
  }
}

function playVino() {
  minvino.currentTime = 0;
  minvino.play();
}

function mute() {
  console.log("mute");
  document.querySelector("#mute_btn").classList = "";

  if (minbroadway.paused === true) {
    document.querySelector("#mute_btn").classList.add("soundOn");
    console.log("lyden skal spille");
    minbroadway.play();
    lydePaa = true;
  } else {
    document.querySelector("#mute_btn").classList.add("soundOff");
    console.log("lyden skal stoppe");
    minbroadway.pause();
    lydePaa = false;
  }
}
