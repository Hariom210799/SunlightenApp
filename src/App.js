import './App.css';
import {Layout, Header, Navigation, Drawer, Content, HeaderRow} from 'react-mdl';
import Main from './components/Main'; 
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function App() {
  return (
    <div className="demo-big-content">
     <Layout style={{background: 'url(https://images.idgesg.net/images/article/2020/03/covid-19_coronavirus_network_of_vectors_by_da-kuk_gettyimages-1213355637_2400x1600-100837132-large.jpg) center / cover'}}> }  
        <header style={{color:"white"}}><HeaderRow><h1>Study Of Covid Cases</h1></HeaderRow></header>
        <Drawer className="header-color" title="Study Of Covid Cases" style={{color: "blue", fontSize: "2em"}} >
            <Navigation>
                <Link to="/maps">Maps</Link>
                <Link to="/manual">Manual</Link>
            </Navigation>
        </Drawer>
        {/* <Content> */}
            <div className="page-content" />
            <Main/>
        {/* </Content> */}
    </Layout>
</div> 
  );
}

export default App;
