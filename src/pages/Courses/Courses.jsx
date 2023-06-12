import React from 'react';
import CoursesHeader from '../../libs/CoursesHead/CoursesHeader';
import { Helmet } from 'react-helmet-async';

const Courses = () => {
    return (
      <div>
        <Helmet>
          <title>Courses | E-Learning</title>
        </Helmet>
        <CoursesHeader></CoursesHeader>
      </div>
    );
};

export default Courses;