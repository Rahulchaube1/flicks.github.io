const courses = [
    { name: "Introduction to Web Development", instructor: "John Doe", description: "Learn the basics of web development.", youtubeId: "dQw4w9WgXcQ" },
    { name: "Advanced JavaScript", instructor: "Jane Smith", description: "Deep dive into JavaScript.", youtubeId: "wMNrSM5X_C8" },
    { name: "Python for Beginners", instructor: "Alice Johnson", description: "Start your journey with Python.", youtubeId: "rfscVS0vtbw" },
    { name: "Data Science with Python", instructor: "Bob Brown", description: "Analyze data using Python.", youtubeId: "LHcS2xGQfGo" },
    { name: "Machine Learning Basics", instructor: "Chris Green", description: "Introduction to machine learning concepts.", youtubeId: "GwIo3gDZCVs" },
    { name: "Web Design Principles", instructor: "Emily White", description: "Learn design fundamentals.", youtubeId: "Hb8BqqfK7fU" },
    { name: "React for Beginners", instructor: "David Black", description: "Build your first React app.", youtubeId: "Ke90Tje7VS0" },
    { name: "Node.js Fundamentals", instructor: "Laura Blue", description: "Learn about server-side JavaScript.", youtubeId: "TlB_eWDSMt4" },
    { name: "SQL Database Management", instructor: "James Red", description: "Master SQL for database management.", youtubeId: "HXbZnD8Te2M" },
    { name: "Introduction to Git", instructor: "Sarah Grey", description: "Version control with Git.", youtubeId: "Y9mR1vH3d3k" },
    { name: "HTML & CSS Basics", instructor: "Mike Orange", description: "Learn the building blocks of web pages.", youtubeId: "UB1O30fRrBg" },
    { name: "Angular Fundamentals", instructor: "Anna Pink", description: "Get started with Angular framework.", youtubeId: "x1gNoSeymFQ" },
    { name: "Flutter for Mobile Development", instructor: "Peter Yellow", description: "Create beautiful mobile apps with Flutter.", youtubeId: "g1k8O7mAN7g" },
    { name: "Cybersecurity Essentials", instructor: "Rachel Purple", description: "Protect your digital assets.", youtubeId: "qR6bR1jZEDc" },
    { name: "Game Development with Unity", instructor: "Sam Teal", description: "Create your own games with Unity.", youtubeId: "IlKaB1etrik" },
    { name: "Digital Marketing Basics", instructor: "Chris Pink", description: "Understand the fundamentals of digital marketing.", youtubeId: "2UjCmG0b5Co" },
    { name: "Photography 101", instructor: "Tom Gold", description: "Learn photography techniques.", youtubeId: "s3Yp2frjz2M" },
    { name: "Financial Analysis", instructor: "Jessie Silver", description: "Basics of financial analysis and reporting.", youtubeId: "0RE3t15My18" },
    { name: "Personal Development", instructor: "Olivia Cyan", description: "Improve your personal effectiveness.", youtubeId: "FiyH3gKYDRs" },
    { name: "Artificial Intelligence Basics", instructor: "Nina Indigo", description: "Introduction to AI concepts.", youtubeId: "2Z6P5d4yUOk" },
    { name: "Robotics for Beginners", instructor: "Lila Brown", description: "Explore the world of robotics.", youtubeId: "EdIpqMR4K0M" },
    { name: "Introduction to Blockchain", instructor: "Zachary Grey", description: "Understand blockchain technology.", youtubeId: "L1yAOeFNY6E" },
    // Additional Courses
    { name: "Cloud Computing Basics", instructor: "Linda Blue", description: "Learn the fundamentals of cloud computing.", youtubeId: "w-5n4p5mVzg" },
    { name: "Introduction to DevOps", instructor: "Alan Smith", description: "Combine software development and IT operations.", youtubeId: "dGcsHMXbO3s" },
    { name: "SEO Fundamentals", instructor: "Cathy Green", description: "Understand search engine optimization.", youtubeId: "HqO2rM4q_98" },
    { name: "Social Media Marketing", instructor: "Daniel White", description: "Leverage social media for business.", youtubeId: "H_F1e7jx9eA" },
    { name: "Content Writing", instructor: "Erica Black", description: "Learn the art of writing for the web.", youtubeId: "cP4n2D09gOk" },
    { name: "Graphic Design Basics", instructor: "Gina Gold", description: "Explore graphic design techniques.", youtubeId: "YtYbdT_KI2w" },
    { name: "Public Speaking Skills", instructor: "Hank Red", description: "Improve your public speaking abilities.", youtubeId: "A84H93AKcIw" },
    { name: "Video Editing with Premiere Pro", instructor: "Ivy Purple", description: "Edit videos like a pro.", youtubeId: "y38jw8rG49o" },
    { name: "Mobile App Development", instructor: "Jack Teal", description: "Create mobile applications.", youtubeId: "wJdYGoXYFTE" },
    { name: "Ethical Hacking Basics", instructor: "Karen Silver", description: "Learn ethical hacking practices.", youtubeId: "tb1g_HyQm0s" },
    { name: "User Experience Design", instructor: "Leo Orange", description: "Understand UX design principles.", youtubeId: "WqDJKGLg1AU" },
    { name: "Introduction to Mathematics", instructor: "Mona Yellow", description: "Brush up on your math skills.", youtubeId: "1q98HkYV0lA" },
    { name: "Statistics for Beginners", instructor: "Nina Pink", description: "Learn the basics of statistics.", youtubeId: "u3cTq_gvH58" },
    { name: "Introduction to Philosophy", instructor: "Oscar Brown", description: "Explore philosophical ideas.", youtubeId: "g0aAf76zX9E" },
    { name: "Introduction to Psychology", instructor: "Pam Grey", description: "Understand human behavior.", youtubeId: "BXY0vZBVT1k" },
    { name: "History of Art", instructor: "Quinn Blue", description: "Learn about art history.", youtubeId: "AlscWjljHKI" },
    { name: "Cooking Basics", instructor: "Rachel Green", description: "Learn how to cook simple meals.", youtubeId: "dSxEGeUtdw8" },
    { name: "Introduction to Music Theory", instructor: "Steve Red", description: "Explore the fundamentals of music.", youtubeId: "nYwT5uG_FM8" },
    { name: "Introduction to Sports Management", instructor: "Tina Gold", description: "Learn about sports management principles.", youtubeId: "wXDSK5VEpAo" },
    { name: "Cultural Studies", instructor: "Uma Silver", description: "Understand cultural diversity.", youtubeId: "QNL8NFz92bc" },
    { name: "Introduction to Environmental Science", instructor: "Victor Brown", description: "Learn about environmental issues.", youtubeId: "9Nsh5PbKbqA" },
    { name: "Introduction to Sociology", instructor: "Wendy Pink", description: "Explore sociological concepts.", youtubeId: "pJpYCCAFhYI" },
    { name: "Career Development", instructor: "Xander Grey", description: "Plan your career effectively.", youtubeId: "h24Yr60xN5U" },
    { name: "Foreign Language Basics", instructor: "Yara Teal", description: "Learn a new language.", youtubeId: "I1ttfZOVbRA" },
    { name: "Introduction to Film Studies", instructor: "Zara Orange", description: "Explore film history and analysis.", youtubeId: "9MEa40uT6E8" },
];

const courseContainer = document.getElementById('course-list');

courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'card';
    courseCard.innerHTML = `
        <div class="img"></div>
        <div class="text">
            <p class="h3">${course.name}</p>
            <p class="p">Instructor: ${course.instructor}</p>
            <p class="p">${course.description}</p>
            <div class="icon-box">
                <p class="span">View Details</p>
            </div>
        </div>
    `;

    courseCard.addEventListener('click', () => {
        window.location.href = `course-details.html?videoId=${course.youtubeId}`;
    });

    courseContainer.appendChild(courseCard);
});
