//TODO: => Counter

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//     fullname: 'Polly',
//   };

//   handleIncrement = _ => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };

//   handleDecrement = _ => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };

//   render() {
//     const { step } = this.props;
//     this.setState({
//       fullname: 'le_Mon',
//     });

//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<Counter initialValue={10} />);

//

//TODO: Change state components

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = _ => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   show = _ => this.setState({ isOpen: true });
//   hide = _ => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <Btn onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</Btn>
//         {isOpen && children}
//       </>
//     );
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<Toggle />);

//TODO: changeMessage in component App

// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   updateMessage = e => {
//     console.log(e);
//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

//TODO: ReactClassComponent

// import React, { Component } from 'react';

// export default class Hello extends Component {
//   render() {
//     return <div>asdasdasdasdasd</div>;
//   }
// }
