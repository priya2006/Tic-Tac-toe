import React from 'react';
// import Component from 'react';


class Square extends React.Component{
    render(){
        return(
            <div>
              <button className="square" onClick={this.props.onClick}>
                  {this.props.value}
              </button>

            </div>




        );
          
 

    }




}
export default Square;