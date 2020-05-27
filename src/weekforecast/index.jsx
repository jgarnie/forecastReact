import React from "react";
import ReactDOM from "react-dom";
import DayForecast from "../dayforecast/dayforecast.jsx"
import './index.html';
import './style.scss';



class WeeklyForecast extends React.Component{

state={
    days:[]
  
};


componentDidMount(){

    fetch("http://bootcamp.podlomar.org/api/weather")
    .then((resp)=>resp.json())
    .then((json)=>this.setState({days:json}));
    
}

    render(){
        if (this.state.days.length === 0) {
            return <h1>Loading...</h1>;
          }
          console.log(this.state.days)
         
        return(
            
            <>
           
            <div className="container">
            <h1>Weekly Weather Forecast</h1>
            <div className="week-forecast">
            
            {this.state.days.map((day)=>(
            <DayForecast
                day={day.weekday}
                weather={day.weather}
                tempDay={day.tempDay}
                tempNight={day.tempNight}
            />
            ))}
            </div>
            </div>

            </>

        )
    }
    
}

ReactDOM.render(<WeeklyForecast />, document.getElementById("app"));

