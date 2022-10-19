import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import icon from '../../../assets/icon.svg';
import '../styles/home.css'

const Home = () => {
    function getNotification(){
      window.focus()
      const notification = new Notification('Title', {
        body: 'Lorem Ipsum Dolor Sit Amet',
        
      })
      notification.onclick = () => {
        console.log('Notification clicked')
        window.electron.ipcRenderer.sendMessage ('window-focus', ['testArg'])
      }
    }
    useEffect(() => {
      // eslint-disable-next-line promise/catch-or-return
      // run function every 5 seconds
      // setInterval(getNotification,5000)
    })

    return (
        <div className='body'>
            <div className="Hello">
            <img width="200" alt="icon" src={icon} />
          </div>
          <h1>electron-react-boilerplate</h1>
          <div className="Hello">
            <a
              href="https://electron-react-boilerplate.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">
                <span role="img" aria-label="books">
                  📚
                </span>
                Read our docs
              </button>
            </a>
              <button type="button" onClick={getNotification}>
                <span role="img" aria-label="folded hands">
                  🙏
                </span>
                Donate
              </button>
              
              <Link to="/todo">
                <button type="button">
                  TODO
                </button>
              </Link>
          </div>
        </div>
      )}

export default Home