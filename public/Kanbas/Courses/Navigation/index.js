function CourseNavigation(location) {
  const links = [
    {
      name: "Home",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Modules",
      url: "/Kanbas/Courses/Modules/screen.html",
    },
    {
      name: "Piazza",
      url: "/Kanbas/Courses/Piazza/index.html",
    },
    {
      name: "Zoom",
      url: "/Kanbas/Courses/Zoom/index.html",
    },
    {
      name: "Grades",
      url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
      name: "Assignments",
      url: "/Kanbas/Courses/Assignments/screen.html",
    },
    {
      name: "YouTube",
      url: "/Kanbas/Courses/YouTube/screen.html",
    },
  ];
  //   const location = "Home";
  document.write(`
    <ul style="background-color:lightgray; list-style-type: none; margin:0px; padding:0px">
      ${links
        .map(
          (link) =>
            `<li style="padding:10px; ${
              location === link.name ? "border-left: 3px solid green;" : ""
            }"><a href="${link.url}"> ${link.name}</a></li>`
        )
        .join("")}
    </ul>
  `);
}
