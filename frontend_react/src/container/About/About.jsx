import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

import { client, UrlFor } from '../../client';

import { AppWrap,MotionWrap } from '../../wrapper';

// const abouts=[
//   {
//     title:'Backend Development',
//     description : 'Python Frameworks , .NET, Node.js ',
//     imgUrl:''
//   },
//   {
//     title:'Databases',
//     description : 'Mongo Db , SQL Server ',
//     imgUrl:''
//   },
//   {
//     title:'DevOps',
//     description : 'Docker and Kubernetes',
//     imgUrl:''
//   },
//   {
//     title:'Frontend Developement / Mobile',
//     description : 'React.js & Tailwind CSS, React Native',
//     imgUrl:''
//   },
//   {
//     title:'Web 3',
//     description : 'Solidity, Web3.js, Ethers.js',
//     imgUrl:''
//   }
// ];

const About = () => {
  
  const [abouts, setAbouts] = useState([]);
 
  useEffect(() => {  
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data)=>setAbouts(data))
    
  }, [])
  
  return (
  <>
  <h2 className='head-text'>I know that <span>Good Work Ethic</span> <br/> means <span>Awesome Results</span>
  </h2>

  <div className='app__profiles'>
    {
      abouts.map((about,index)=>
      (
        <motion.div 
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type:'tween' }}
        className='app__profile-item'
        key={about.title +index}
        >
          <img src={UrlFor(about.imgUrl)} alt={about.name}/>
          <h2 className='bold-text' style={{marginTop:20}}>
            {about.title}
          </h2>
          <h2 className='p-text' style={{marginTop:10}}>
            {about.description}
          </h2>
          
         


        </motion.div>
      )
      )
    }

  </div>
  </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg");