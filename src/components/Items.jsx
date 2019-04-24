import React, { Component } from 'react';
import { connect } from 'react-redux'

class Items extends Component {
  renderList(){
    console.log(this.props.items);
    return this.props.items.map( post => {
        return (
            <div className="item" key={post.data["0"].nasa_id}>
                <i className=" large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.data["0"].nasa_id}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>       
        )
    })
  }
  render(){
       return(
        <div>
          {this.renderList()};
        </div>
      );
    }  
  }

const mapStateToPops = (state) => {
  return {items: state.items}
}
export default connect(mapStateToPops)(Items);
// export default Items;



// {props.items.map((item) => {
//   return (
//     <div className="app__item" key={item.data[0].nasa_id}>
//         <img src={item.links[0].href} alt={item.data[0].title}/>
//         <div className="app__item--data">
//             <h2>{item.data[0].title}</h2>
//             <p>{item.data[0].date_created}</p>
//             <p>{item.data[0].secondary_creator}</p> 
//             <p>{item.data[0].description}</p> 
//         </div>
       
//     </div>
//   )
// })}