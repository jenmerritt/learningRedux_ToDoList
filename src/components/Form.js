import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addItem({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;



// import React, { Component, useState } from "react";
// import { connect } from "react-redux";
// import { addItem } from "../actions/index";

// function mapDispatchToProps(dispatch) {
//   return {
//     addItem: item => dispatch(addItem(item))
//   };
// }

// function ConnectedForm(props) {
//     const [title, setTitle] = useState('');

//     function handleChange(event) {
//         setTitle(event.target.value);
//     }
    
//     function handleSubmit(event) {
//         event.preventDefault();
//         const { newTitle } = title;
//         props.addItem({ newTitle });
//         setTitle({ newTitle: "" });
//     }

//        const enteredTitle = title.title;

//     return (
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="title">Title</label>
//             <input
//             type="text"
//             id="title"
//             value={enteredTitle}
//             onChange={handleChange}
//             />
//         </div>
//         <button type="submit">SAVE</button>
//         </form>
//     )
// }

// const Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm);

// export default Form;