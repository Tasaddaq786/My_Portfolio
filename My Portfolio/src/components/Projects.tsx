import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Hero from './Hero'

const data =[
    {
        id: 0,
        title: "Static Resume Builder",
        desc: "A nextjs and TypeScript base Static Resume Builder",
        img: "/project_01.png",
        tags: ["Nextjs", "TypeScript","Node","HTML","CSS",]
    },

    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: "A nextjs and TypeScript base Dynamic Resume Builder",
        img: "/project_02.png",
        tags: ["Nextjs", "TypeScript","Node","HTML","CSS",]
    },

    {
        id: 2,
        title: "Scheduling System",
        desc: "A PHP, HTML, CSS, and MySQL base Exam Scheduling System",
        img: "/project_03.png",
        tags: ["HTML", "PHP","Java","CSS","MySQL"]
    },

    {
        id: 3,
        title: "Online Voting System",
        desc: "A PHP, HTML, CSS, and MySQL base Online Voting System",
        img: "/project_04.png",
        tags: ["HTML", "PHP","Java","CSS","MySQL"]
    },
    {
        id: 4,
        title: "Residential Automation System",
        desc: "A PHP, HTML, CSS, and MySQL base Residential Automation System",
        img: "/project_05.png",
        tags: ["HTML", "PHP","Java","CSS","MySQL"]
    },
    {
        id: 5,
        title: "Quick Quizzes System",
        desc: "A PHP, HTML, CSS, and MySQL base Quick Quizzes System System",
        img: "/project_06.png",
        tags: ["HTML", "PHP","Java","CSS","MySQL"]
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

        {data.map((el) => (<Card 
        
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
        </div>

      
    </div>
  )
}

export default Projects
