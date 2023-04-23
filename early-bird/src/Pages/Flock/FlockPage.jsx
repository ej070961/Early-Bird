import React, {useState} from 'react';
import './flock.css'
import UploadPost from './UploadPost';
import NavBar from '../../Components/NavBar';

function OpenUploadModal(props){
  const {setIsOpen} = props;
  return(
  <button className="flockButton" onClick={()=>setIsOpen(true)}> Create your own flock</button>
  );
}

function FlockPage() {
  const [modalIsOpen, setIsOpen] = useState(false);

   return(
    <div className="background">
      <NavBar />

      <h1 className='title'>Find Your Flock</h1>
      <OpenUploadModal setIsOpen={setIsOpen}/>
      <UploadPost isOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      

    </div>
   );
  }

export default FlockPage;