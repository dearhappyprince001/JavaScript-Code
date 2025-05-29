let id = "";
//localStorage.clear(); // Uncomment to clear localStorage for testing
function manageData() {
  document.getElementById("message").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("message").innerHTML = "Please enter your name";
  } else {
    if (id == "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      if (arr == null) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data));
      }
    }
  }
}

function selectData() {}

function editData() {}

function deleteData() {}
