# BookNest – Library Management System

**A simple, modern, and user-friendly online library management website.**

## About the Project

BookNest is a front-end web application developed to make library book browsing and management easier for students. Readers can register, explore books from different departments, issue books, check return dates, and view late return fines.

The project uses HTML, CSS, and JavaScript to create an attractive and responsive interface.

##  Features

- **Reader Registration:** Register using your name and email address.
- **Book Collection:** Browse books from different categories.
- **Search Books:** Find books by their title.
- **Category Filter:** Explore Computer Technology, Information Technology, Mechanical, Civil, Electrical, Competitive Exams, Literature, Philosophy, and Novels.
- **Issue Books:** Issue books online through the interface.
- **Return Date:** View the due date, set 14 days after issuing.
- **Late Fine:** Calculate a sample fine of ₹5 per day after the due date.
- **Return Books:** Return issued books and view the applicable fine.
- **Local Storage:** Save demo reader details and issued book records in the browser.
- **Responsive Design:** Use the website on desktop and mobile screens.

##  Technologies Used

- HTML5 – Website structure
- CSS3 – Styling, layout, and responsive design
- JavaScript – Book search, issue and return operations, and fine calculation
- LocalStorage – Saving demo data in the browser
- Git and GitHub – Version control and project sharing

##  Project Structure

```text
BookNest/
├── index.html
├── style.css
├── script.js
└── README.md
```

##  How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in VS Code.
3. Ensure all three files are in the same folder.
4. Open `index.html` in a web browser.
5. Register using a name and email address.
6. Search for a book, select a category, and issue it.
7. View the due date and fine in the **My Issued Books** section.
8. Select **Return Book** to complete the return process.

##  Fine Calculation

The sample fine is ₹5 per day for books returned after their due date.

**Formula:**

Fine = Number of Late Days × ₹5

Example: If a book is returned 3 days late:

Fine = 3 × ₹5 = ₹15

No fine is charged when a book is returned on or before its due date.

##  Project Objective

The main objective of BookNest is to develop a simple digital library interface that helps students discover books and understand the book issue and return process. It demonstrates basic front-end development, user interaction, browser storage, and responsive web design.

## Limitations

- This is a front-end prototype and does not use a central database.
- Demo account information is stored in the current browser.
- Authentication is not secure and is not suitable for real user accounts.
- Book availability is not shared between readers.
- Fine calculation is a demonstration and does not process payments.

A production version would require a backend, database, secure authentication, and shared inventory management.

##  Future Enhancements

- Admin dashboard to add, edit, and remove books.
- Database integration for multiple readers.
- Real authentication and role-based access.
- Book availability tracking.
- Issue history and fine payment records.
- Email reminders for upcoming due dates.
- QR codes for library books.

##  Mini Hackathon Project

**Project Name:** BookNest – Library Management System.                                                                                      
**Project Type:** Front-End Web Application.                                                                                                                  
**Purpose:** To simplify book discovery and demonstrate online library operations.                                                                    
*Team members:* Siddhi Borkar-24, Shravani Maske-23, Sonal Barai-25
---

*BookNest — Read. Learn. Inspire.* 
