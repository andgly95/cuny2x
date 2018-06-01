var myAlbum = new Album("My Album");


function displayName() {
    document.getElementById("albumname").innerHTML = myAlbum.name;
    document.getElementById("addalbum").remove();
}

function addPhoto() {
    let name = document.getElementById("photoname").innerText;
    let location = document.getElementById("photolocation").innerText;
    console.log("New Photo Added: "+name);

    myAlbum.addPhoto(name, location);
}

function Photo(name, location){
    this.name = name;
    this.location = location;
}
function Album(name){
    this.name = name;
    this.photos = [];
    this.size = 0;
    console.log("Album Made")
    this.addPhoto = function(name, location){
        var newPhoto = new Photo(name, location);
        this.photos.push(newPhoto);
        console.log("New Photo Added: "+name);
        this.size++;
    }
    this.displayPhotos = function(){
        for(let i=0;i<photos.size();i++){
            console.log("Photo "+photos[i].name);
        }
    }
}




