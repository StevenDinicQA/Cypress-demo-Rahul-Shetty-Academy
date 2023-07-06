/// <reference types="cypress" />

import RahulCoursesSteps from '../../services/steps/Rahul-courses-steps'
import testData from '../../fixtures/testData.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Courses tests', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('/')
    })

    it('Going through courses', () =>{

      RahulCoursesSteps.coursesVisibleInNavigation()
      RahulCoursesSteps.assertCouresList()
  })


  it('Course one assertion', () =>{
    const courseOne = testData.course1

    RahulCoursesSteps.coursesVisibleInNavigation()
    RahulCoursesSteps.clickingOneCourse(courseOne)
    RahulCoursesSteps.assertCourseOnePic()
    RahulCoursesSteps.assertFaqCourses()
    RahulCoursesSteps.assertCourseCopyright()

    
  })
  it('Course two assertion', () =>{
    const courseTwo = testData.course2

    RahulCoursesSteps.coursesVisibleInNavigation()
    RahulCoursesSteps.clickingOneCourse(courseTwo)
    RahulCoursesSteps.assertFaqCourses()
    RahulCoursesSteps.assertCourseCopyright()

  })
  it('Course three assertion', () =>{
    const courseThree = testData.course3
    
    RahulCoursesSteps.coursesVisibleInNavigation()
    RahulCoursesSteps.clickingOneCourse(courseThree)
    RahulCoursesSteps.assertFaqCourses()
    RahulCoursesSteps.assertCourseCopyright()
  })

  it('course three boundle', () =>{
    const courseThree = testData.course3
    RahulCoursesSteps.clickingOneCourse(courseThree)
    RahulCoursesSteps.assertCourseThreeBundle()
  })
    
  })