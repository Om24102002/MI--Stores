import React from 'react'
import "../styles/prefooter.css"
import "../styles/footer.css"


const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" /><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" /></svg>;

const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>;

const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" /><path fill="#FFF" d="M20 31L20 17 32 24z" /></svg>;

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" /></svg>;

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>;

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" /></svg>;



const Footer = ({footer}) => {
    return (
        <div>
            <div className="preFooter">
                <div>
                    {repeatIcon}
                    <p><b>Hussle-free replacement</b> <br /> 10-day easy replacement policy on mi.com </p>
                </div>
                <div>
                    {shieldIcon}
                    <p><b>100% secure payments</b> <br /> We support cards, wallets, EMI and COD</p>
                </div>
                <div>
                    {mapIcon}
                    <p><b>Vast service network</b> <br /> 1000 Mi service-centers across 600 cities</p>
                </div>
            </div>

            <div className="preFooter2">

                <div><p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

                <div>
                    <div>
                        <input type="email" name='email' placeholder='Enter Email Address' />
                        <button>›</button>
                    </div>
                    <span>Thanks. You're on our email list for special offers.</span>
                </div>

                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear form you!</span>
                </div>

                <div>
                    {facebookIcon}{twitterIcon}{youtubeIcon}
                </div>

            </div>

            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {footer.support.map((item,index)=>(
                        <a key = {item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>SHOP AND LEARN</p>
                    {footer.shopAndLearn.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>ABOUT</p>
                    {footer.aboutUS.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                
                <div>
                    <p>CONTACT US</p>
                    {footer.contactUs.map((item,index)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button>
                </div>

            </div>

            <div className="footerBorder">
                <div>Copyright © 2010-2023. All Rights Reserved</div>
            </div>
        </div>
        
    )
}

export default Footer
