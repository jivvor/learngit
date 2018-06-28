
import React from 'react';
import '../stylesheet/app.css';

class App extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	render(){
		
		return(
			<div>
				<div className="imgall">
					<img className="img1" src={require('../img/1.png')} />
					<img className="img2" src={require('../img/2.png')} />
				</div>
				<b>免费享准时达PLUS,超时赔现金</b>
			</div>
		)
		
	}
	
}

//暴露模块
export default App;





