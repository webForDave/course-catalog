let courses = [
    {
        id: 1,
        title: "Introduction to Web Development",
        price: 100
    },
    {
        id: 2,
        title: "Version Control with Git and GitHub",
        price: 150
    },
    {
        id: 3,
        title: "Building REST APIs with Express",
        price: 500
    },
    {
        id: 4,
        title: "Problem Solving with Algorithms",
        price: 100
    },
]

exports.showHomePage = (req, res) => {
    res.render("index");
}

exports.showCourses = (req, res) => {
    res.render("courses", {allCourses: courses});
}

exports.showContact = (req, res) => {
    res.render("contact");
}

exports.showContactSuccess = (req, res) => {
    res.render("thanks");
}