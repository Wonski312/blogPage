import { useEffect, useState } from "react";
import classes from "./HeroImg.module.scss";

const HeroImg = () => {

   const [text, setText] = useState()
   const staticText = 'Give whatever You want to the comunity of developers'
   let data = staticText.split('')
let i = 0;
let generatedCode = ''

useEffect(() =>{
    const timer = setInterval(()=>{
        
        if(i <= data.length -1 ){
            generatedCode = generatedCode + data[i];
            setText(generatedCode)
            i++;
        }
        if (i == data.length){
            setTimeout(() =>{
                
                i=0;
                generatedCode = '';
                
                // setText('')
            },1000)
        }
    },140)
    return () =>{
    
            clearInterval(timer);
        
}
},[i])

	return (
		<div className={classes.heroImg}>
			<h2 className={classes.heroImg__title}>
				Welcome to <br />
				<span>CodeCrush</span>
			</h2>
			<p className={classes.heroImg__text}>{text}|</p>
		</div>
	);
};

export default HeroImg;
