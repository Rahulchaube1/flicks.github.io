const params = new URLSearchParams(window.location.search);
const videoId = params.get('videoId');

const courses = [
    { name: "Introduction to Web Development", instructor: "John Doe", description: "Learn the basics of web development.", youtubeId: "dQw4w9WgXcQ" },
    { name: "Advanced JavaScript", instructor: "Jane Smith", description: "Deep dive into JavaScript.", youtubeId: "wMNrSM5X_C8" },
    { name: "Python for Beginners", instructor: "Alice Johnson", description: "Start your journey with Python.", youtubeId: "rfscVS0vtbw" },
    // Add the rest of the courses here
    { name: "Introduction to Robotics", instructor: "Lila Silver", description: "Explore the world of robotics.", youtubeId: "EdIpqMR4K0M" }
];

const course = courses.find(c => c.youtubeId === videoId);

if (course) {
    document.getElementById('course-name').textContent = course.name;
    document.getElementById('course-instructor').textContent = `Instructor: ${course.instructor}`;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-video').src = `https://www.youtube.com/embed/${course.youtubeId}`;
    
    document.getElementById('enroll-button').onclick = function() {
        window.open(`https://www.youtube.com/watch?v=${course.youtubeId}`, '_blank');
    };
} else {
    document.body.innerHTML = "<h2>Course not found</h2>";
}
