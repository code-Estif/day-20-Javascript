function generateProfile() {
  // Collect user input
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let country = document.getElementById("country").value;
  let job = document.getElementById("job").value;

  // Put data into array
  let profile = [ 
    ["Name", name],
    ["Age", age],
    ["Country", country],
    ["Job", job]
  ];

  // Loop through array to display
  let result = "<h3>Your Profile</h3><ul>";
  for (let i = 0; i < profile.length; i++) {
    result += `<li><b>${profile[i][0]}:</b> ${profile[i][1]}</li>`;
  }
  result += "</ul>";

  // Show profile
  document.getElementById("output").innerHTML = result;
}
