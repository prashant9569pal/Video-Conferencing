import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
         const appID = 698617020;
 const serverSecret = "4c34376da422aa547b73ffed0f754b1c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "prashant",
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
        container: element,
        
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
    }
      

  return (
    <div className='room=page'>
          <div ref={myMeeting } />  
    </div>
  )
}

export default RoomPage
