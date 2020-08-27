import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';
import fakeData from './fakeData/index.js';
import { useState } from 'react';



function App() {

	const showCourses = fakeData.slice(0, 15);
	const [courses, setCourses] = useState(showCourses);
	const [countCourse, setCountCourse] = useState([]);

	const handleAddCourse = (course) => {
		const newCount = [...countCourse, course];
		setCountCourse(newCount);
	}


	return (

			<div className="container">
				<div className="header-section">
					<Header></Header>
				</div>
				
				<div className="courses-section">
					<section className="courses-page">
						<div className="courses">
							<div className="row">
								<div className="col-md-12">
									<div className="courses-title">
										<h2 style={{margin: "20px 0", color: "black", fontSize: "40px"}} className="text-center">Our Courses</h2>
										<hr style={{ borderBottom: "2px solid tomato", borderWidth: "30px"}}/>
									</div>
								</div>
							</div>
							<div className="row">
								{
									courses.map((course) => <Course key={course.id} handleAddCourse={handleAddCourse} course={course}></Course>)
								}
							</div>
						</div>
					</section>
				</div>

				<div className="cart-section">
					<Cart countCourse={countCourse}></Cart>
				</div>
			</div>

			);
			  
}

export default App;
