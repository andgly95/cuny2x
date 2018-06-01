var myAlbum = new Album("My Album");


function displayName() {
    document.getElementById("albumname").innerHTML = myAlbum.name;
    document.getElementById("addalbum").remove();
}

function displayPhotos() {
    myAlbum.displayPhotos();
}

function addPhoto() {
    let name = document.getElementById("photoname").value;
    let location = document.getElementById("photolocation").value;
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
        for(let i=0;i<this.photos.length;i++){
            console.log("Photo "+this.photos[i].name);
        }
    }
}




