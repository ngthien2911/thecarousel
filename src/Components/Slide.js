import React, {useEffect, useState} from 'react';
import { Data } from './Data';
import {FaArrowAltCircleDown, FaArrowAltCircleLeft,FaArrowAltCircleRight, FaArrowAltCircleUp} from 'react-icons/fa';
import '../App.css';
import { useMediaQuery } from 'react-responsive'



function Slide() {
const [theslide,setTheslide] = useState(0)
const length = Data.length

const isMobile = useMediaQuery({ query: '(max-width: 400px)' });
const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });
    
    
    // useEffect(()=>{
    //     setInterval(() => {
    //         setTheslide(theslide === 0? length-1 : theslide-1)
    //     }, 3000);
    // })
    function previous(){
        setTheslide(theslide === 0? length-1 : theslide-1)
    }

    function next(){
        setTheslide(theslide === length-1 ? 0 : theslide +1)
    }

    console.log(theslide);
    
    
    // if(isMobile){return(
    //     <div className='slider'>
    //     <FaArrowAltCircleUp className='mobile-leftarrow' onClick={previous}/>
    //     <FaArrowAltCircleDown className='mobile-rightarrow' onClick={next}/>
    //     {Data.map((slide,index)=>{
    //         return(
    //             <div className={index===theslide ? 'mobile-active' : 'mobile-not-active'} key={index}>

    //             {index === theslide &&(<img  src={slide.photo} alt="carousel image" className='mobile-image'></img>)}
                
    //             </div>
    //         )
    //     })}
        
    //     </div>
    // )}
    // else if(isTablet && !isMobile){return(
    //     <div className='slider'>
    //     <FaArrowAltCircleUp className='mobile-leftarrow' onClick={previous}/>
    //     <FaArrowAltCircleDown className='mobile-rightarrow' onClick={next}/>
    //     {Data.map((slide,index)=>{
    //         return(
    //             <div className={index===theslide ? 'mobile-active' : 'mobile-not-active'} key={index}>

    //             {index === theslide &&(<img  src={slide.photo} alt="carousel image" className='mobile-image'></img>)}
                
    //             </div>
    //         )
    //     })}
    //     {Data.map((slide,index)=>{
    //         if(theslide+1 == length){return(
    //             <div className={index==0 ? 'active' : 'not-active'} key={index}>
    //                 {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
    //             </div>
    //         ) } 
    //         else{return(
    //             <div className={index===theslide +1 ? 'active' : 'not-active'} key={index}>
    //                 {index === theslide+1 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
    //             </div>
    //                  )
    //         }   
    //     })}
        
    //     </div>
    // )}

    // else {return(
    //     <div className='slider'>
    //     <FaArrowAltCircleLeft className='leftarrow' onClick={previous}/>
    //     <FaArrowAltCircleRight className='rightarrow' onClick={next}/>
       
    //     {Data.map((slide,index)=>{
    //         return(
                
    //             <div className={index===theslide ? 'active' : 'not-active'} key={index}>
    //                 {index === theslide &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
    //             </div>
    
    //         )
    //     })}

    //     {Data.map((slide,index)=>{
    //         if(theslide+1 == length){return(
    //             <div className={index==0 ? 'active' : 'not-active'} key={index}>
    //                 {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
    //             </div>
    //         ) } 
    //         else{return(
    //             <div className={index===theslide +1 ? 'active' : 'not-active'} key={index}>
    //                 {index === theslide+1 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
    //             </div>
    //                  )
    //         }   
    //     })}

    //     {Data.map((slide,index)=>{
    //         if(theslide+2>length){return(
    //             <div className={index==theslide -2? 'active' : 'not-active'} key={index}>
    //                 {index ==theslide-2 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
    //             </div>
    //         )}
    //         else if(theslide+2==length){return(
    //             <div className={index==0 ? 'active' : 'not-active'} key={index}>
    //                 {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
    //             </div>
    //         )}
            
        
    //         else{return(
    //             <div className={index===theslide +2  ? 'active' : 'not-active'} key={index}>
    //                 {index === theslide +2 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
    //             </div>
    //         )}
    //     })}
       
    //             </div>
    // )}
   
    


    if(isDesktop){return(
        <div className='slider'>
        <FaArrowAltCircleLeft className='leftarrow' onClick={previous}/>
        <FaArrowAltCircleRight className='rightarrow' onClick={next}/>
       
        {Data.map((slide,index)=>{
            return(
                
                <div className={index===theslide ? 'active' : 'not-active'} key={index}>
                    {index === theslide &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
                </div>
    
            )
        })}

        {Data.map((slide,index)=>{
            if(theslide+1 == length){return(
                <div className={index==0 ? 'active' : 'not-active'} key={index}>
                    {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
                </div>
            ) } 
            else{return(
                <div className={index===theslide +1 ? 'active' : 'not-active'} key={index}>
                    {index === theslide+1 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
                </div>
                     )
            }   
        })}

        {Data.map((slide,index)=>{
            if(theslide+2>length){return(
                <div className={index==theslide -2? 'active' : 'not-active'} key={index}>
                    {index ==theslide-2 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
                </div>
            )}
            else if(theslide+2==length){return(
                <div className={index==0 ? 'active' : 'not-active'} key={index}>
                    {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
                </div>
            )}
            
        
            else{return(
                <div className={index===theslide +2  ? 'active' : 'not-active'} key={index}>
                    {index === theslide +2 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
                </div>
            )}
        })}
       
                </div>
    )}
    else if(isMobile){return(
        <div className='slider'>
        <FaArrowAltCircleUp className='mobile-leftarrow' onClick={previous}/>
        <FaArrowAltCircleDown className='mobile-rightarrow' onClick={next}/>
        {Data.map((slide,index)=>{
            return(
                <div className={index===theslide ? 'mobile-active' : 'mobile-not-active'} key={index}>

                {index === theslide &&(<img  src={slide.photo} alt="carousel image" className='mobile-image'></img>)}
                
                </div>
            )
        })}
        
        </div>
        // <div className='slider'>
        // <FaArrowAltCircleUp className='mobile-leftarrow' onClick={previous}/>
        // <FaArrowAltCircleDown className='mobile-rightarrow' onClick={next}/>
        // {Data.map((slide,index)=>{
        //     return(
        //         <div className={index===theslide ? 'mobile-active' : 'mobile-not-active'} key={index}>

        //         {index === theslide &&(<img  src={slide.photo} alt="carousel image" className='mobile-image'></img>)}
                
        //         </div>
        //     )
        // })}
        // {Data.map((slide,index)=>{
        //     if(theslide+1 == length){return(
        //         <div className={index==0 ? 'active' : 'not-active'} key={index}>
        //             {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}
        //         </div>
        //     ) } 
        //     else{return(
        //         <div className={index===theslide +1 ? 'active' : 'not-active'} key={index}>
        //             {index === theslide+1 &&(<img  src={slide.photo} alt="carousel image" id='image'></img>)}  
        //         </div>
        //              )
        //     }   
        // })}
        
        // </div>
    )}
    else {return(
        <div className='tablet-slider'>
        <FaArrowAltCircleUp className='tablet-leftarrow' onClick={previous}/>
        <FaArrowAltCircleDown className='tablet-rightarrow' onClick={next}/>
        
        {Data.map((slide,index)=>{
            return(
                <div className={index===theslide ? 'tablet-active' : 'tablet-not-active'} key={index}>

                {index === theslide &&(<img  src={slide.photo} alt="carousel image" id='tablet-image'></img>)}
                
                </div>
            )
        })}
        {Data.map((slide,index)=>{
            if(theslide+1 == length){return(
                <div className={index==0 ? 'tablet-active' : 'tablet-not-active'} key={index}>
                    {index ==0 &&(<img  src={slide.photo} alt="carousel image" id='tablet-image'></img>)}
                </div>
            ) } 
            else{return(
                <div className={index===theslide +1 ? 'tablet-active' : 'tablet-not-active'} key={index}>
                    {index === theslide+1 &&(<img  src={slide.photo} alt="carousel image" id='tablet-image'></img>)}  
                </div>
                     )
            }   
        })}
        
        </div>
    )}
    
}

export default Slide;