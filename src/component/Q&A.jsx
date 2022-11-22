import React from "react";

export default function QandA(){
    return(
        <div><h1 style={{color:'black',paddingLeft:'525px',paddingTop:'75px'}}>Q&A</h1>
            <h3 style={{color:'black',paddingLeft:'350px',paddingTop:'50px'}}>This website for numerical calculation</h3>
            <h3 style={{color:'black',paddingLeft:'250px',paddingTop:'50px'}}>if you have any question, please contact me from here</h3>
            <div style={{paddingLeft:'380px',paddingTop:'50px'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src="http://localhost/images/facebook.png" width={'100px'}></img>
                    <a style={{paddingLeft:'20px',textDecoration:'none',color:'#000'}} href="https://www.facebook.com/profile.php?id=100006491563856">Nattachai Aroonkijjarurn</a>
                </div>
                <div style={{display:'flex',alignItems:'center',paddingTop:'50px'}}>
                    <img src="http://localhost/images/gmail.png" width={'100px'}></img>
                    <div>
                        <p style={{color:'#000',paddingLeft:'20px'}}>Nattachai.Aroonkij@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}