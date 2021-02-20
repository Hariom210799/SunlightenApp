import React, { Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton} from 'react-mdl';
import DatamapsIndia from 'react-datamaps-india'

export default function Maps() {        

    return(
        <div style={{border:"1px solid red", height:"40%", width:"40%"}}>
            <DatamapsIndia
                regionData={{
                    Maharashtra: {
                    value: 10
                    }
                }}
                // hoverComponent={({ value }) => {
                //     return <span>{value}</span>
                // }}
                mapLayout={{
                    title: 'Title',
                    legendTitle: 'Legend Title',
                    startColor: '#FFDAB9',
                    endColor: '#FF6347',
                    hoverTitle: 'Count',
                    noDataColor: '#f5f5f5',
                    borderColor: '#8D8D8D',
                    hoverBorderColor: '#8D8D8D',
                    hoverColor: 'green',
                }}
               
            />

            
        </div>
    )
}





    // constructor (props){
    //     super(props);
    //     this.state={activeTab :0}; 
    // }
    // toggleCategories() {
    //     if(this.state.activeTab===0){
    //         return(
    //             <Card shadow={5} style={{minWidth:'450', margin:'auto' }}>
    //                 <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center/cover' }}>React Project #1</CardTitle>
    //                 <CardText>ABCDEFGHIJKLMNOPQRSTUVWXYZ</CardText>
    //                 <CardActions border>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                 </CardActions>
    //                 <CardMenu style={{color:'#fff'}}>
    //                     <IconButton name='share' />

    //                 </CardMenu>

    //             </Card>
    //         ) 
    //     }else if(this.state.activeTab===1){
    //         return(
    //             <Card shadow={5} style={{minWidth:'450', margin:'auto' }}>
    //                 <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center/cover' }}>React Native Project #2</CardTitle>
    //                 <CardText>ABCDEFGHIJKLMNOPQRSTUVWXYZ</CardText>
    //                 <CardActions border>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                 </CardActions>
    //                 <CardMenu style={{color:'#fff'}}>
    //                     <IconButton name='share' />

    //                 </CardMenu>

    //             </Card>
    //         )
    //     }else if(this.state.activeTab===2){
    //         return(
    //             <Card shadow={5} style={{minWidth:'450', margin:'auto' }}>
    //                 <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center/cover' }}>React Native Project #3</CardTitle>
    //                 <CardText>ABCDEFGHIJKLMNOPQRSTUVWXYZ</CardText>
    //                 <CardActions border>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                     <button colored>github</button>
    //                 </CardActions>
    //                 <CardMenu style={{color:'#fff'}}>
    //                     <IconButton name='share' />

    //                 </CardMenu>

    //             </Card>
    //         )
        
    //     }
    // }
    // render(){
    //     return(
    //         <div className="category-tabs">
    //             <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab:tabId})} ripple>
    //                 <Tab>React</Tab>
    //                 <Tab>React Native</Tab>
    //                 <Tab>React Native</Tab>
    //                 <Tab>IOT</Tab>

    //             </Tabs>
    //             < section className="projects-grid">
    //                 <Grid className="projects-grid">
    //                     <Cell col={12}>
    //                         <div className="content">{this.toggleCategories()}</div>
    //                     </Cell>
    //                 </Grid>
                    
    //             </section>
                
    //         </div>
    //         )
    // }

