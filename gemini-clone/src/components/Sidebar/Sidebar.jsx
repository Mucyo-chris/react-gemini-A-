import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {

    const[ extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
               {extended? <p>New chat</p>:null}
            </div>
            {extended
            ?
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt=""  className=''/>
                    <p>What is react ...</p>
                </div>
            </div>:null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" className='w-300 h-200   ' />
                {extended?<p>Help</p>:null}
            </div>
             <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
             <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar