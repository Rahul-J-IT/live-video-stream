let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {

  let child = displayFrame.children[0]
  if(child){
      document.getElementById('streams__container').appendChild(child)
  }

  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for(let i = 0; videoFrames.length > i; i++){
    if(videoFrames[i].id != userIdInDisplayFrame){
      videoFrames[i].style.height = '100px'
      videoFrames[i].style.width = '100px'
    }
  }

}

for(let i = 0; videoFrames.length > i; i++){
  videoFrames[i].addEventListener('click', expandVideoFrame)
}


let hideDisplayFrame = () => {
    userIdInDisplayFrame = null
    displayFrame.style.display = null

    let child = displayFrame.children[0]
    document.getElementById('streams__container').appendChild(child)

    for(let i = 0; videoFrames.length > i; i++){
      videoFrames[i].style.height = '300px'
      videoFrames[i].style.width = '300px'
  }
}

displayFrame.addEventListener('click', hideDisplayFrame)

// Function to get URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        room: params.get('room'),
    };
}

// Get room parameters
// const { room } = getQueryParams();

// // Check if running locally or hosted
// const baseUrl = window.location.origin + window.location.pathname;

// // Construct full URL
// const fullUrl = `${baseUrl}?room=${room}`;

// // Display the URL
// document.getElementById('room-url').textContent = fullUrl;

//----------------------------------

// JavaScript for sharing room functionality
const { room } = getQueryParams();

// Check if running locally or hosted
const baseUrl = window.location.origin + window.location.pathname;

// Construct full URL
const fullUrl = `${baseUrl}?room=${room}`;

// Function to copy the URL
document.getElementById('room-link-button').addEventListener('click', function() {
    navigator.clipboard.writeText(fullUrl).then(() => {
        alert('Room link copied to clipboard!'); // Optional feedback to the user
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Function to get URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        room: params.get('room') // Assuming 'room' contains the password
    };
}

// Get room parameter (which contains the password)


// Add event listener for the password button
document.getElementById('password-button').addEventListener('click', function() {
    if (room) {
        navigator.clipboard.writeText(room).then(() => {
            alert('Password copied to clipboard!'); // Feedback to the user
        }).catch(err => {
            console.error('Failed to copy password: ', err);
        });
    } else {
        alert('No password available to copy.');
    }
});

