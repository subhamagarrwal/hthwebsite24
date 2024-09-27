var jsonData=
[
    {
        "topic": "GoFR",
        "description": "GoFR is a framework that enables the rapid development of web applications. Your task is to explore how GoFR can be enhanced to support the development of more complex and feature-rich applications. This could involve improving the framework's scalability, performance, security, or usability, as well as adding new features and functionalities to better meet the needs of developers and users."
    },
    {
        "topic": "Blockchain",
        "description": "Blockchain is a technology that enables secure, transparent, and tamper-proof transactions. Your task is to come up with solutions to enhance the GoFr framework, making it better suited for building Blockchain applications"
    },
    {
        "topic": "AI and language",
        "description": "Your task is to explore how AI can be used to help users easily adapt to a new language. Develop solutions that integrate AI to make language learning intuitive and personalised, using real-time feedback and adapting to individual learning styles for more efficient and effective language acquisition"
    },
    {
        "topic": "FinTech",
        "description": "The fintech industry combines finance and technology to create innovative solutions that improve the efficiency, security, and accessibility of financial services. Develop ideas that address key challenges like secure payments, fraud prevention, financial accessibility, or seamless transaction processing, while delivering efficient and reliable financial solutions for users"
    },
    {
        "topic": "Sustainability",
        "description": "Identify and propose solutions to improve the sustainability of university campuses. This includes addressing waste management, promoting eco-friendly practices, and encouraging student engagement in environmental initiatives. Your challenge is to create innovative strategies that not only reduce the campus's ecological footprint but also foster a culture of sustainability among students and staff."
    }
]

document.addEventListener('DOMContentLoaded', (event) => {
    // Simulate user login status and team status
    var userLoggedIn = true; 
    var userInTeam = false; 

    // Function to check if the user is logged in
    function isLoggedIn() {
        return userLoggedIn;
    }

    // Function to check if the user is in a team
    function isInTeam() {
        return userInTeam;
    }

    // Function to fetch user name from the backend
    function fetchUserName() {
        return new Promise((resolve) => {
            const name = "Lakshay Tuteja";
            let currentIndex = 0;
            const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
            const displayElement = document.getElementById('user-name'); // Ensure this element exists in your HTML
    
            function typeCharacter() {
                if (currentIndex < name.length) {
                    displayElement.textContent += name[currentIndex];
                    currentIndex++;
                    setTimeout(typeCharacter, typingSpeed);
                } else {
                    resolve(name);
                }
            }
    
            displayElement.textContent = ''; // Clear any existing content
            typeCharacter();
        });
    }

    // Function to fetch team members from the backend
    function fetchTeamMembers() {
        // Simulate fetching team members from the backend
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["Alice", "Bob", "Charlie"]);
            }, 1000);
        });
    }

    // Get the main content and login container divs
    var mainContent = document.getElementById('main-content');
    var loginContainer = document.getElementById('login-container');
    var userNameSpan = document.getElementById('user-name');

    // Conditionally display the main content or login container
    if (isLoggedIn()) {
        mainContent.style.display = 'block';
        fetchUserName().then((userName) => {
            userNameSpan.textContent = userName;
        });
    } else {
        loginContainer.style.display = 'block';
    }

    // Get the popup
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");

    // Get the <span> element that closes the popup
    var closePopup = document.getElementById("close-popup");

    // Get the divs that will trigger the popup
    var topLeftTwoLeft = document.querySelector(".top-left-two .left");
    var topRight = document.querySelector(".top-right");
    var bottomLeft = document.querySelector(".bottom-left");

    // Function to show the popup with specific content
    function showPopup(content) {
        popupContent.innerHTML = `
            <span id="close-popup" class="close-popup">&times;</span>
            ${content}
        `;
        popup.style.display = 'block';

        // Re-attach the close event listener
        document.getElementById('close-popup').onclick = function() {
            popup.style.display = 'none';
        };
    }

    // Check if elements exist before adding event listeners
    if (topLeftTwoLeft) {
        topLeftTwoLeft.onclick = function() {
            if (isLoggedIn() && isInTeam()) {
                fetchTeamMembers().then((teamMembers) => {
                    let teamContent = `
                        <div class="header">
                            <h1>Your Team</h1>
                        </div>
                        <div class="content">
                            <ul>
                    `;
                    teamMembers.forEach(member => {
                        teamContent += `<li>${member}</li>`;
                    });
                    teamContent += `
                            </ul>
                            <input type="text" id="ppt-link" placeholder="Enter PPT link">
                            <button id="submit-ppt">Submit</button>
                        </div>
                    `;
                    showPopup(teamContent);

                    // Add event listener for submitting PPT link
                    document.getElementById('submit-ppt').onclick = function() {
                        var pptLink = document.getElementById('ppt-link').value;
                        if (pptLink) {
                            // Simulate saving to backend
                            alert(`PPT link submitted: ${pptLink}`);
                            popup.style.display = 'none';
                        }
                    };
                });
            } else {
                showPopup(`
                    <div class="header">
                        <h1>Create or Join a Team</h1>
                    </div>
                    <div class="content">
                        <a href="#" id="create-team" class="btn">Create Team</a>
                        <a href="#" id="join-team" class="btn">Join Team</a>
                    </div>
                `);

                // Add event listener for "Create Team" button
                document.getElementById('create-team').onclick = function() {
                    showPopup(`
                        <div class="header">
                            <h1>Create a Team</h1>
                        </div>
                        <div class="content">
                            <input type="text" id="team-name" placeholder="Enter team name">
                            <button id="submit-team">Create Team</button>
                        </div>
                    `);

                    // Add event listener for submitting team name
                    document.getElementById('submit-team').onclick = function() {
                        var teamName = document.getElementById('team-name').value;
                        if (teamName) {
                            // Simulate saving to backend
                            alert(`Team created: ${teamName}`);
                            popup.style.display = 'none';
                        }
                    };
                };

                // Add event listener for "Join Team" button
                document.getElementById('join-team').onclick = function() {
                    showPopup(`
                        <div class="header">
                            <h1>Join a Team</h1>
                        </div>
                        <div class="content">
                            <input type="text" id="team-code" placeholder="Enter team code">
                            <button id="submit-code">Join Team</button>
                        </div>
                    `);

                    // Add event listener for submitting team code
                    document.getElementById('submit-code').onclick = function() {
                        var teamCode = document.getElementById('team-code').value;
                        if (teamCode) {
                            // Simulate checking the team code and joining the team
                            alert(`Joined team with code: ${teamCode}`);
                            popup.style.display = 'none';
                        }
                    };
                };
            }
        }
    }

    if (topRight) {
        topRight.onclick = function() {
            let content = `
                <div class="header">
                    <h1>Topics</h1>
                </div>
                <div class="content">
                    <ul>
            `;
            jsonData.forEach(item => {
                content += `
                    <li>
                        <h2>${item.topic}</h2>
                        <p>${item.description}</p>
                    </li>
                `;
            });
            content += `
                    </ul>
                </div>
            `;
            showPopup(content);
        }
    }
    if (bottomLeft) {
        bottomLeft.onclick = function() {
            showPopup(`
                <div class="header">
                    <h1>Bottom Left Content</h1>
                </div>
                <div class="content">
                    <p>This is the content for the bottom left div.</p>
                </div>
            `);
        }
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});