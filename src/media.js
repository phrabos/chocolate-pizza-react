import React from 'react'
import fbIcon from './assets/fb-icon.png'
import pintIcon from './assets/pint-icon.png'
import twitIcon from './assets/twit-icon.png'
import gpIcon from './assets/gp-icon.png'
import instaIcon from './assets/insta-icon.png'
import flicIcon from './assets/flic-icon.png'
import rssIcon from './assets/rss-icon.png'
import mailIcon from './assets/mail-icon.png'
export default class SocialMedia extends React.Component {
    render() {
        return(
            <nav>
                <a href='https://www.facebook.com' ><img src={fbIcon} alt='facebook-icon'/></a>
                <a href='https://www.twitter.com' ><img src={twitIcon} alt='twitter-icon'/></a>
                <a href='https://www.google.com' ><img src={gpIcon} alt='googleplus-icon'/></a>
                <a href='https://www.instagram.com' ><img src={instaIcon} alt='instagram-icon'/></a>
                <a href='https://www.flickr.com' ><img src={flicIcon} alt='flicker-icon'/></a>
                <a href='https://www.pinterest.com' ><img src={pintIcon} alt='pinterest-icon'/></a>
                <a href='https://www.rss.com' ><img src={rssIcon} alt='rss-icon'/></a>
                <a href='https://www.mailto:test@gmail.com' ><img src={mailIcon} alt='email-icon'/></a>
            </nav>
        )
    }
}