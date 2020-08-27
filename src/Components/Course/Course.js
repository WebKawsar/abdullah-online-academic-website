import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';


const Course = (props) => {

const { name, newPrice, noStudent, ratings, instructor, profession, shortInfo, country,  courseImg, instructorImg} = props.course;



    return (
            
            <div className="col-md-4" style={{margin: "30px 0"}}>
                <div className="course-item">
                    <div className="course-content">
                        <div className="card">
                            <div className="course-img">
                                <img className="course-img card-img-top img-thumbnail" src={courseImg} alt=""/>
                                <span className="price-tag">${newPrice}</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" style={{marginBottom: "30px"}}>{name}</h5>
                                <p className="card-text" style={{fontSize: "14px",color: "#838383", lineHeight: "2.1", marginBottom: "10px"}}>{shortInfo}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="first-span"><FontAwesomeIcon className="graduate" icon={faGraduationCap} /> {noStudent} Student</span>

                                    <span><FontAwesomeIcon className="star" icon={faStar} /> {ratings} Ratings</span>
                                </li>
                            </ul>
                            <div style={{padding: "5px 10px"}} className="course-seller card-body">
                                <div className="seller-info">
                                    <div className="seller-img">
                                        <img className="rounded-circle" src={instructorImg} alt=""/>
                                    </div>
                                    <div className="seller-bio">
                                        <h6>By {instructor}</h6>
                                        <span>{profession}, {country} </span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => props.handleAddCourse(props.course)} type="button" style={{color: "black"}} className="btn-lg btn btn-outline-warning">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            

    );
};

export default Course;