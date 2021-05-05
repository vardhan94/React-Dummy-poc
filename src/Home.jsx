import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './Action';
import history from './history';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import axios from 'axios';

const HomePage = (props) => {
console.log('harsh stire ', props.posts.mainStore.WeatherInfo)
const [showData, setShowData] = React.useState(false); 

   const getWeather = () => {

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6d9e886997418af6983147d7a92d323a')
    .then((res) => {
        // debugger;
        console.log('harsh result', res.data);
        props.addPost(res.data);
        setShowData(true);
    })
    .catch( e => { console.log(e) } );

    }

    return(
        
            <>
             {showData ? 
                 <>
                 <h1>{props.posts.mainStore.WeatherInfo.name}</h1>
             <h2>Max Temp: {props.posts.mainStore.WeatherInfo.main.temp_max}</h2>
             <h2>humidity: {props.posts.mainStore.WeatherInfo.main.humidity}</h2>
             <h2>Min Temp: {props.posts.mainStore.WeatherInfo.main.temp_min}</h2>
             <p>weather: {props.posts.mainStore.WeatherInfo.weather[0].description}</p>

             <button onClick={() => setShowData(false) }> back </button>
                 </>
            :
             <>
                <h1>This is Home page</h1>
                <p>welcome to home page</p>
                <button onClick={() => { history.push('/') }}>go to LogIn</button><br /><br />
                            

                    <button onClick={() => getWeather()} > Weather Info </button>
            </>
                }
            </>
        
    );
}

const mapStateToProps = state => {
    return {
        posts: state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch(addPost(post))
    }
  }
  
  
  
  // export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
  export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(HomePage);