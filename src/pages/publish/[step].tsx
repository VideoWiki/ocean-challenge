import React, { ReactElement } from 'react'
// import Publish from '../../components/Publish'
import Page from '@shared/Page'
import content from '../../../content/publish/index.json'
import router from 'next/router'

// export default function PagePublish(): ReactElement {
//   const { title, description } = content

//   return (
//     <Page
//       title={title}
//       description={description}
//       uri={router.route}
//       noPageHeader
//     >
//       {/* <Publish content={content} /> */}
//     </Page>
//   )
// }

export default function PagePublish() {
  return (
    <div className="vw">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>Publish</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>
          Consider the tool as a Video Wikipedia for Learners and Creators.
          Create a Video
        </p>
      {/* <Publish content={content} /> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <iframe
          src="http://localhost:8080/studio"
          width="70%"
          height="640"
        ></iframe>
      </div>
    </div>
  )
}
