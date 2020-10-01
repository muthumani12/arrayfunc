import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';


class Companies extends React.Component {


  constructor(props) {
      super(props);
      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(data) {
            console.log(data)
        }


  render() {

    return (

      <div>
                  <ul>
                      <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                      <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                      <Draggable type="metal" data="silver"><li>Silveddvr</li></Draggable>
                  </ul>

                  <Droppable
                      types={['fruit']} // <= allowed drop types
                      onDrop={this.onDrop()}>
                      <ul className="Smoothie"></ul>
                  </Droppable>

              </div>



    );
  }
}


export default Companies;
