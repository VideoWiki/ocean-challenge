import React, { ReactElement, useEffect } from 'react'
// import Publish from '../../components/Publish'
import Page from '@shared/Page'
import content from '../../../content/publish/index.json'
import router from 'next/router'


export default function PagePublish() {
  useEffect(()=>{
    // Listen for hash changes
    window.addEventListener('message', function (e) {
      // Get the sent data
      const data = e.data;
      try{
        JSON.parse(data)
        console.log('dadar',data)
        console.log(JSON.parse(data).url);
        window.location.href = JSON.parse(data).url
      }
      catch(e){}
      // If you encode the message in JSON before sending them,
      // then decode here
      // const decoded = JSON.parse(data);
  });
  
  },[])
  return (
    <div className="vw">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>Publish</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>
        Join the video data revolution with Videowiki and the Ocean Protocol.
        </p>
      {/* <Publish content={content} /> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <iframe
          src="https://dev.stream.video.wiki/studio"
          width="70%"
          height="640"
        ></iframe>
      </div>
    </div>
  )
}
