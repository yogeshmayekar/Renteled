import React from 'react';
import "./LeadingHotels.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
// import map2 from "../../Assets/map2.png";
import China from './China';
import Malaysia from './Malaysia';
import Nepal from './Nepal';
import India from './India';
import UAE from './UAE';
import Indonesia from './Indonesia';

const LeadingHotels =  ()=>{
    return(
        <>
        <div className='leadingwrapper'>
        <div className='leadingBoardContainer'>
        <Grid container spacing={0} className='itemConn' sx={{maxHeight:'fit-content'}} >
            {/* left side container  */}
            <Grid item xs={6} className='leftConn'>
                <div className='china__con'>
                    <China/>
                </div>
                <div className='malaysia__con'>
                    <Malaysia/>
                </div>
                <div className='nepal__con'>
                    <Nepal/>
                </div>
                <div className='indian__con'>
                    <India/>
                </div>
                <div className='uae__con'>
                    <UAE/>
                </div>
                <div className='Indonesia__con'>
                    <Indonesia/>
                </div>      
             </Grid>

             {/* right side container  */}
            <Grid item xs={6}>
                <Item ClassName="rightConn" style={{paddingLeft:'12%',paddingTop:'6%'}}>
                    <div className='rightChield1'>
                        <h2>World's leading chain of hotels and homes</h2>
                        <p>More Destinations. More Ease. More Affordable.</p>
                    </div>
                    <div ClassName="secondLine" style={{display:'flex', gap:'30px',padding:'6% 0', transform: 'skewX(-30deg)'}}>
                        <div ClassName="firstItem1" style={{transform: 'skewX(30deg)'}}>
                            <h2 style={{margin:'0'}}>35</h2>
                            <p style={{margin:'0'}}>Contries</p>
                        </div>
                        <div style={{borderLeft:'1px solid #979797 '}}></div>
                        <div ClassName="firstItem2" style={{paddingLeft:'5px', transform: 'skewX(30deg)'}}>
                            <h2 style={{margin:'0'}}>157,000+</h2>
                            <p style={{margin:'0'}}>Hotels & Homes</p>
                        </div>
                    </div>
                    <div style={{display:'flex', lineHeight: '1.2'}}>
                        <ul style={{display:'flex', padding:'1% 0', fontSize:'20px', flexWrap:'wrap', listStyle:'none'}}>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(26, 177, 79)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>India</span>
                                
                            </li>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(225, 127, 123)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>China</span>
                                
                            </li>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(245, 166, 35)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>Malaysia</span>
                                
                            </li>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(95, 214, 242)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>Nepal</span>
                                
                            </li>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(254, 148, 241)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>Indonesia</span>
                                
                            </li>
                            <li style={{display:'flex',justifyContent:'centre', width:'30%', marginBottom:'10%',alignItems:'center'}}>
                                <span style={{display:'flex', width:'8px', height:'8px',borderRadius:'50%', backgroundColor:'rgb(126, 137, 228)', overflow:'hidden'}}>&nbsp;</span>
                                <span style={{marginLeft:'20px'}}>UAE</span>
                                
                            </li>
                        </ul>
                    </div>
                </Item>
            </Grid>
        </Grid>
        </div>
        </div>
        </>
    )
}

export  default LeadingHotels;