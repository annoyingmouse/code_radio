const radioButtons = document.querySelectorAll('.bn30')
const classic_audio = document.getElementById('btn-classic')
const ambient_audio = document.getElementById('btn-ambient')
const lofi_audio = document.getElementById('btn-lofi')

// declare playback variables
// const classic_stream = new Audio("./media/trap_and_ink.wav")
// const ambient_stream = new Audio("./media/trap_and_ink.wav")
// const lofi_stream = new Audio("./media/trap_and_ink.wav")

const database = "music_database"
const object_store = "music_files"
const audioURL = document.createElement("audio")

function getData(song) {
  // open a read/write db transaction, ready for retrieving the data
  const transaction = db.transaction([object_store]);

  // create an object store on the transaction
  const objectStore = transaction.objectStore(object_store);

  // Make a request to get a record by key from the object store
  const objectStoreRequest = objectStore.get(song);

  // Make a request to get a record by key from the object store
  objectStoreRequest.onsuccess = (event) => {
    const myRecord = objectStoreRequest.result;
    audioURL.src = URL.createObjectURL(myRecord.sourceData);
    audioURL.loop = true;
  };
};


const reset_radio = stream => {
  stream.pause()
  stream.currentTime = 0
}

const play_classic = () => {
  const DBOpenRequest = window.indexedDB.open(database, 1)
  DBOpenRequest.onsuccess = async (event) => {
    db = DBOpenRequest.result;
    // Run the getData() function to get the data from the database
    await getData("trap and ink");
    audioURL.pause()
    audioURL.currentTime = 0
    audioURL.play()
  }
  if (classic_audio.dataset.playing === "false"){
    radioButtons.forEach(radio => {
      radio.dataset.playing = radio.id === classic_audio.id
    })
  } else if (classic_audio.dataset.playing === "true"){
    classic_audio.dataset.playing = "false"
  } else {pass;}
}

const play_ambient = () => {
  const DBOpenRequest = window.indexedDB.open(database, 1)
  DBOpenRequest.onsuccess = (event) => {
    db = DBOpenRequest.result;
    // Run the getData() function to get the data from the database
    getData("trap and ink");
  }
  audioURL.pause()
  audioURL.currentTime = 0
  if (ambient_audio.dataset.playing === "false"){
    audioURL.play()
    radioButtons.forEach(radio => {
      radio.dataset.playing = radio.id === ambient_audio.id
    })
  } else if (ambient_audio.dataset.playing === "true"){
    ambient_audio.dataset.playing = "false"
  } else {pass;}
}

function play_lofi() {
  const DBOpenRequest = window.indexedDB.open(database, 1)
  DBOpenRequest.onsuccess = (event) => {
    db = DBOpenRequest.result;
    // Run the getData() function to get the data from the database
    getData("trap and ink");
  }
  audioURL.pause()
  audioURL.currentTime = 0
  if (lofi_audio.dataset.playing === "false"){
    audioURL.play()
    radioButtons.forEach(radio => {
      radio.dataset.playing = radio.id === lofi_audio.id
    })
  } else if (lofi_audio.dataset.playing === "true"){
    lofi_audio.dataset.playing = "false"
  } else {pass;}
}

classic_audio.addEventListener("click", play_classic);
ambient_audio.addEventListener("click", play_ambient);
lofi_audio.addEventListener("click", play_lofi);