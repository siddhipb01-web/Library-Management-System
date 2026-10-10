
const books = [
  {id:1, name:"Java Programming", cat:"Computer Technology"},
  {id:2, name:"Web Development", cat:"Information Technology"},
  {id:3, name:"Engineering Mechanics", cat:"Mechanical"},
  {id:4, name:"Civil Engineering Basics", cat:"Civil"},
  {id:5, name:"Electrical Machines", cat:"Electrical"},
  {id:6, name:"GATE Preparation Guide", cat:"Competitive Exams"},
  {id:7, name:"Wings of Fire", cat:"Literature"},
  {id:8, name:"The Republic", cat:"Philosophy"},
  {id:9, name:"The Alchemist", cat:"Novels"}
];

let reader = JSON.parse(localStorage.getItem("reader")) || null;
let issued = JSON.parse(localStorage.getItem("issued")) || [];
const finePerDay = 5;

function dateOnly(value) {
  const d = new Date(value);
  d.setHours(0, 0, 0, 0);
  return d;
}

function showBooks() {
  const search = document.getElementById("search").value.toLowerCase();
  const cat = document.getElementById("category").value;

  document.getElementById("bookList").innerHTML = books
    .filter(b => b.name.toLowerCase().includes(search) &&
      (cat === "All" || b.cat === cat))
    .map(b => `
      <div class="book">
        <div class="cover">📚</div>
        <h3>${b.name}</h3>
        <span class="tag">${b.cat}</span>
        <button onclick="issueBook(${b.id})">Issue Book →</button>
      </div>
    `).join("") || "No books found.";
}

function login() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter your name and a valid email.");
    return;
  }

  reader = {name, email};
  localStorage.setItem("reader", JSON.stringify(reader));
  document.getElementById("welcome").textContent =
    "Welcome, " + name + "!";
  showIssued();
}

function issueBook(id) {
  if (!reader) {
    alert("Please register or log in first.");
    return;
  }

  if (issued.some(b => b.id === id && b.email === reader.email)) {
    alert("You have already issued this book.");
    return;
  }

  const today = new Date();
  const due = new Date();
  due.setDate(due.getDate() + 14);

  issued.push({
    id,
    email: reader.email,
    date: today.toLocaleDateString("en-IN"),
    due: due.toISOString().slice(0, 10)
  });

  localStorage.setItem("issued", JSON.stringify(issued));
  showIssued();
  alert("Book issued successfully! Return within 14 days.");
}

function showIssued() {
  const list = document.getElementById("issued");

  if (!reader) {
    list.textContent = "Log in to view your issued books.";
    return;
  }

  const mine = issued.filter(b => b.email === reader.email);

  list.innerHTML = mine.map(b => {
    const book = books.find(x => x.id === b.id);
    if (!book) return "";

    const days = Math.max(0, Math.floor(
      (dateOnly(new Date()).getTime() -
       dateOnly(b.due).getTime()) / 86400000
    ));
    const fine = days * finePerDay;

    return `
      <p>
        <b>📖 ${book.name}</b><br>
        Issued: ${b.date}<br>
        Return by: ${new Date(b.due).toLocaleDateString("en-IN")}<br>
        Late days: ${days} | Fine: ₹${fine}<br>
        <button onclick="returnBook(${b.id})">Return Book</button>
      </p>
    `;
  }).join("") || "No books issued yet.";
}

function returnBook(id) {
  const item = issued.find(
    b => b.id === id && b.email === reader.email
  );
  if (!item) return;

  const days = Math.max(0, Math.floor(
    (dateOnly(new Date()).getTime() -
     dateOnly(item.due).getTime()) / 86400000
  ));
  const fine = days * finePerDay;

  issued = issued.filter(
    b => !(b.id === id && b.email === reader.email)
  );

  localStorage.setItem("issued", JSON.stringify(issued));
  showIssued();

  alert(fine > 0
    ? `Book returned! Late by ${days} days. Fine: ₹${fine}`
    : "Book returned successfully! No fine.");
}

if (reader) {
  document.getElementById("name").value = reader.name;
  document.getElementById("email").value = reader.email;
  document.getElementById("welcome").textContent =
    "Welcome back, " + reader.name + "!";
}

showBooks();
showIssued();

