
const courseInfo = [

	{
		id: 101,
		name: "HTML for Beginners - Build a Website & Launch ONLINE",
		price: 99,
		newPrice: 49,
		noStudent: 501,
		ratings: 5,
		instructor: "Mark Wahlbeck",
		profession: "Web Developer",
		shortInfo: "HTML and CSS for Beginners course will give your all the knowledge you need to master HTML and CSS easily and quickly.",
		country: "Chinese",
		ratingsCount: 251,
		courseImg: "https://i.ibb.co/8b7BtdF/html-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 102,
		name: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
		price: 134.99,
		newPrice: 9.99,
		noStudent: 41668,
		ratings: 4.7,
		instructor: "Manuel Lorenz",
		profession: "Web Developer",
		shortInfo: "Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS.",
		country: "chinku",
		ratingsCount: 8240,
		courseImg: "https://i.ibb.co/rHHnd3W/css-course.jpg",
		instructorImg: "https://i.ibb.co/931r0kq/author-2.jpg"

	},
	{
		id: 103,
		name: "Build Responsive Real World Websites with HTML5 and CSS3",
		price: 184.99,
		newPrice: 12.99,
		noStudent: 193037,
		ratings: 4.6,
		instructor: "Jonas Schmedtmann",
		profession: "Web Developer",
		shortInfo: "The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.",
		country: "chinku",
		ratingsCount: 43356,
		courseImg: "https://i.ibb.co/MGkKsFg/html-css.png",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 104,
		name: "HTML, CSS, JavaScript - Build 6 Creative Projects",
		price: 19.99,
		newPrice: 9.99,
		noStudent: 1246,
		ratings: 4.6,
		instructor: "Lasha Nozadze",
		profession: "Web Developer",
		shortInfo: "Build 6 projects using HTML, CSS and JavaScript. Master in CSS Animations, CSS Transforms and create 3D effects.",
		country: "English",
		ratingsCount: 174,
		courseImg: "https://i.ibb.co/4WpFPs6/html-css-js-course.jpg",
		instructorImg: "https://i.ibb.co/931r0kq/author-2.jpg"

	},
	{
		id: 105,
		name: "Beginner Full Stack Web Development: HTML, CSS, React & Node",
		price: 134.99,
		newPrice: 9.99,
		noStudent: 104665,
		ratings: 4.5,
		instructor: "Kawsar Ahmed",
		profession: "Web Developer",
		shortInfo: "Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node",
		country: "Bangladeshi",
		ratingsCount: 8533,
		courseImg: "https://i.ibb.co/WftPJ1r/front-end-package.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 106,
		name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
		price: 134.99,
		newPrice: 9.99,
		noStudent: 294414,
		ratings: 4.6,
		instructor: "Maximilian Schwarzmüller",
		profession: "Web Developer",
		shortInfo: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
		country: "Frenchis",
		ratingsCount: 87575,
		courseImg: "https://i.ibb.co/FsyC2xq/react-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 107,
		name: "Angular - The Complete Guide (2020 Edition)",
		price: 134.99,
		newPrice: 99.99,
		noStudent: 414127,
		ratings: 4.6,
		instructor: "Maximilian Schwarzmüller",
		profession: "Web Developer",
		shortInfo: "Master Angular 10 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
		country: "Frenchis",
		ratingsCount: 127625,
		courseImg: "https://i.ibb.co/fkhdNXM/angular-course.jpg",
		instructorImg: "https://i.ibb.co/SnbbJ2D/author-3.jpg"

	},
	{
		id: 108,
		name: "The Complete JavaScript Course 2020: Build Real Projects!",
		price: 134.99,
		newPrice: 40.99,
		noStudent: 340114,
		ratings: 4.6,
		instructor: "Jonas Schmedtmann",
		profession: "Web Developer",
		shortInfo: "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
		country: "English",
		ratingsCount: 81313,
		courseImg: "https://i.ibb.co/fnTWSMH/js-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 109,
		name: "Bootstrap 4 From Scratch With 5 Projects",
		price: 139.99,
		newPrice: 39.99,
		noStudent: 50659,
		ratings: 4.7,
		instructor: "Brad Traversy",
		profession: "Web Developer",
		shortInfo: "Master Bootstrap 4 and build 5 real world themes while learning HTML5 semantics & CSS3",
		country: "English",
		ratingsCount: 12246,
		courseImg: "https://i.ibb.co/1KW8DcL/bootstrap-course.jpg",
		instructorImg: "https://i.ibb.co/SnbbJ2D/author-3.jpg"

	},
	{
		id: 110,
		name: "The Complete jQuery Course: From Beginner To Advanced!",
		price: 139.99,
		newPrice: 19.99,
		noStudent: 15712,
		ratings: 4.4,
		instructor: "Joe Parys Support",
		profession: "Web Developer",
		shortInfo: "Use jQuery to create stunning animations, provide fast feedback forms, handle all user events and perform Ajax calls.",
		country: "English",
		ratingsCount: 2143,
		courseImg: "https://i.ibb.co/88KnNyV/jquery-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 111,
		name: "Vue JS - The Complete Guide (incl. Vue Router & Vuex)",
		price: 139.99,
		newPrice: 11.99,
		noStudent: 135712,
		ratings: 4.7,
		instructor: "Maximilian Schwarzmüller",
		profession: "Web Developer",
		shortInfo: "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
		country: "English",
		ratingsCount: 40143,
		courseImg: "https://i.ibb.co/FWSKBL2/vue-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 112,
		name: "PHP for Beginners - Become a PHP Master - CMS Project",
		price: 139.99,
		newPrice: 100.99,
		noStudent: 94501,
		ratings: 4.4,
		instructor: "Edwin Diaz",
		profession: "Web Developer",
		shortInfo: "PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.",
		country: "English",
		ratingsCount: 17189,
		courseImg: "https://i.ibb.co/pbwyMwv/php-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 113,
		name: "PHP for Beginners - Become a PHP Master - CMS Project",
		price: 139.99,
		newPrice: 100.99,
		noStudent: 94501,
		ratings: 4.4,
		instructor: "Edwin Diaz",
		profession: "Web Developer",
		shortInfo: "PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.",
		country: "English",
		ratingsCount: 17189,
		courseImg: "https://i.ibb.co/pbwyMwv/php-course.jpg",
		instructorImg: "https://i.ibb.co/8N4vY1v/author-5.jpg"

	},
	{
		id: 114,
		name: "Angular - The Complete Guide (2020 Edition)",
		price: 134.99,
		newPrice: 99.99,
		noStudent: 414127,
		ratings: 4.6,
		instructor: "Maximilian Schwarzmüller",
		profession: "Web Developer",
		shortInfo: "Master Angular 10 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
		country: "Frenchis",
		ratingsCount: 127625,
		courseImg: "https://i.ibb.co/fkhdNXM/angular-course.jpg",
		instructorImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		id: 115,
		name: "Angular - The Complete Guide (2020 Edition)",
		price: 134.99,
		newPrice: 99.99,
		noStudent: 414127,
		ratings: 4.6,
		instructor: "Maximilian Schwarzmüller",
		profession: "Web Developer",
		shortInfo: "Master Angular 10 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
		country: "Frenchis",
		ratingsCount: 127625,
		courseImg: "https://i.ibb.co/fkhdNXM/angular-course.jpg",
		instructorImg: "https://i.ibb.co/8N4vY1v/author-5.jpg"

	}


];




const fakeData = [...courseInfo];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
