import React from 'react';
import {Component} from 'react';
import Square from './Square';



class Board extends Component {

constructor(props){
  super(props);
  this.state = {
           next: 'X',
           winner:'',
           squares: new Array(9).fill("")
  }
}

handleclick(i){
 const squares=this.state.squares.slice();
 if(!squares[i]&&!(this.state.winner)){
     squares[i]=this.state.next;
     this.setState({
        squares:squares,
         next: this.state.next === 'X' ? 'O' : 'X' ,
         winner:this.isWinner()
     })
 }
 console.log(i);
 console.log(this.state.winner);
}



isWinner(){
const chances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let squares=this.state.squares
for(let i=0;i<chances.length;i++){
  const [a, b,  c] = chances[i];
  if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
     return squares[a];
  }
}
return null;

}


rendersquare(i){
return(
    <Square  value={this.state.squares[i]}
    onClick={()=>this.handleclick(i)} />
);
}


render(){

return( 
<div>

    <p className="status">Next player is {this.state.next} </p><br />
    <table>
        <thead>
            <tr>
    <td>{this.rendersquare(0)}</td>
    <td>{this.rendersquare(1)} </td>    
    <td>{this.rendersquare(2)}</td>   
    </tr> 
    <tr >
    <td>{this.rendersquare(3)}</td>
    <td>{this.rendersquare(4)}</td>    
    <td>{this.rendersquare(5)}</td>   
    </tr>
    <tr >
    <td>{this.rendersquare(6)}</td>
    <td>{this.rendersquare(7)}</td>    
    <td>{this.rendersquare(8)}</td>     
    </tr>
    </thead>
    <tbody></tbody>
    <tfoot></tfoot>
    </table>
    <div >       
    <p className="winner">Winner is {this.state.winner} </p>   
    </div>       
</div>
);
}
}





export default Board;