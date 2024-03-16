import React from 'react'

const Footer = () => {
  return (
    <div className='bg-teal-900 pb-16'>
        <div className='flex max-w-20 mx-auto pt-2 gap-3'>
            <img src='https://friendshipquiz2022.com/public/images/friends_forever/twitter_footer.png'/>
            <img src='	https://friendshipquiz2022.com/public/images/friends_forever/instagram_footer.png'/>
            <img src='	https://friendshipquiz2022.com/public/images/friends_forever/fb_footer.png'/>
        </div>
        <p className=' text-white text-lg flex gap-6 justify-center mt-1' > <span >Privacy Policy</span> <span>Terms of Use</span> <span>FAQs</span></p>
        <p  className='text-center text-white mt-3'>copyright@friendshipquiz2022 2024</p>
    </div>
  )
}

export default Footer;