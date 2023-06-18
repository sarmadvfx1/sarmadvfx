import portfolio1 from '../public/portfolio1.mp4'
import LOGO1 from '../public/LOGO1.mp4'
import LOGO2 from '../public/LOGO2.mp4'
import VFX1 from '../public/VFX1.mp4'
import VFX2 from '../public/VFX2.mp4'
import SLIDESHOW1 from '../public/SLIDESHOW1.mp4'
import SLIDESHOW2 from '../public/SLIDESHOW2.mp4'
import SLIDESHOW3 from '../public/SLIDESHOW3.mp4'
import D1 from '../public/D1.mp4'
import D2 from '../public/D2.mp4'
import './home.scss'


function Videobox(props){
    return(
        <div className="videobox">
            <video className='vid' src={props.src} autoPlay loop muted></video>
        </div>
    )
}


function Section(props){
    const dot = <span className='period'>.</span>
    return(
        <div className="section">
            <span className='heading'>{props.heading}{dot}</span>
            <div className="wrapper">
            <Videobox src={props.src1}/>
            <Videobox src={props.src2}/>
            </div>
        </div>
    )
}
function Section2(props){
    return(
        <div className="section">
            <span className='heading'>{props.heading}<span className='period'>.</span></span>
            <div className="wrapper">

            <Videobox heading={props.heading1} src={props.src1}/>
            <Videobox heading={props.heading2} src={props.src2}/>
            <Videobox heading={props.heading3} src={props.src3}/>
            </div>
        </div>
    )
}


export default function Home() {
  return (
    <>
    <div className='home'>
     <video className='vid' src={portfolio1} autoPlay loop muted ></video>
     <div id="Work" className="wrapper">
     <h1 className='Heading' >WORKSPACE</h1><h1 className='dash'>-</h1>
     </div>
     <Section heading='I Can Create Logo Animations With Effects' src1={LOGO1} heading2='' src2={LOGO2}/>
     <Section heading='I Can Make Professional Brand Videos Edited With Satisfying Effects' src1={VFX1} src2={VFX2} />
     <Section2 heading='Professional Slideshows For Your Product' src1={SLIDESHOW1} src2={SLIDESHOW2} src3={SLIDESHOW3}/>
     <Section heading='I Can Model 3D Objects For You' src1={D1} src2={D2}/>
    </div>
    </>
  )
}


