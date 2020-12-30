
// External icons
const iconLocation = '<img width="20px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ffaticons%2F32%2Flocation-01-512.png&f=1&nofb=1"> ';

const iconVIP = '<img width="20px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsmall-n-flat%2F24%2Fstar-512.png&f=1&nofb=1">';

// Feed samples
let bikeFeed = [
    {
        photo: "https://images.pexels.com/photos/2694644/pexels-photo-2694644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
        authorName: "Paul Theodor Oja",
        authorLocation: "Estonia",
        avatar: "https://images.pexels.com/users/avatars/1235268/paul-theodor-oja-115.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: false,
        views: 133
    },
    {
        photo: "https://images.pexels.com/photos/2248713/pexels-photo-2248713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
        authorName: "Daniel Frank",
        authorLocation: "Prague",
        avatar: "https://images.pexels.com/users/avatars/87604/daniel-frank-123.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: true,
        views: 896
    },
    {
        photo: "https://images.pexels.com/photos/145399/pexels-photo-145399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
        authorName: "Markus Spiske",
        authorLocation: "Germany",
        avatar: "https://images.pexels.com/users/avatars/19851/markus-spiske-raumrot-com-181.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: false,
        views: 215
    }
];

let catFeed = [
    {
        photo: "https://images.pexels.com/photos/4347501/pexels-photo-4347501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
        authorName: "Helena Lopes",
        authorLocation: "Brazil",
        avatar: "https://images.pexels.com/users/avatars/210984/helena-lopes-798.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: false,
        views: 128
    },
    {
        photo: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&&w=300",
        authorName: "Ihsan Aditya",
        authorLocation: "Malaysia",
        avatar: "https://images.pexels.com/users/avatars/393334/ihsan-aditya-615.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: true,
        views: 259
    },
    {
        photo: "https://images.pexels.com/photos/1825999/pexels-photo-1825999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
        authorName: "Rodrigo Santos",
        authorLocation: "U.K.",
        avatar: "https://images.pexels.com/users/avatars/125824/rodrigo-santos-124.jpeg?auto=compress&fit=crop&w=100&h=100",
        isVIP: true,
        views: 130
    }
];

// Function to remove all child nodes
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Function to show the list
function showList(listType) {
    let feed;

    // First clean up child nodes inside grid
    const grid = document.getElementById("grid");
    removeAllChildNodes(grid);

    // Determine which list type
    switch(listType) {
        case "cat":
            feed = catFeed;
            break;        
        case "bike":
            feed = bikeFeed;
            break;
        default:
            break;
    }

    // Iterate through the feed via for-loop
    for (var i=0; i<feed.length; i++) {
        // Create new <li>
        let liNode = document.createElement("li");
        
        /** For photo div **/
        // Create new <div> 
        let photoNode = document.createElement("div");
        // Add class name 'photo' to <div>
        photoNode.classList.add("photo");
        // Add <img> with feed value
        photoNode.innerHTML = '<img src="'
                                + feed[i]["photo"]
                                + '" class="photos">';
        // Append photoNode to <li>
        liNode.appendChild(photoNode);
    
        /** For avatar div **/
        let avatarNode = document.createElement("div");
        avatarNode.classList.add("author");
        avatarNode.innerHTML = '<img src="'
                                + feed[i]["avatar"]
                                + '" class="avatars">';
        liNode.appendChild(avatarNode);
    
        /** For author_name div **/
        let authorNode = document.createElement("div");
        authorNode.classList.add("author_name");
        if (feed[i].isVIP) {
            authorNode.innerHTML = feed[i].authorName + iconVIP;
        } else {
            authorNode.innerHTML = feed[i].authorName;
        }
        liNode.appendChild(authorNode);
    
        /** For location & views div  **/
        let locationNode = document.createElement("div");
        locationNode.classList.add("author_location");
        locationNode.innerHTML = iconLocation 
                                + " " 
                                + feed[i].authorLocation 
                                + " (" +feed[i].views + "K views)";
        liNode.appendChild(locationNode);
    
        // Finally, append <li> node to grid
        grid.appendChild(liNode);
    }
}

// Load default bike list
showList('bike');
