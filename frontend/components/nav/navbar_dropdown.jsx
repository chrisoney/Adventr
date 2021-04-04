// import React from 'react';
// import { connect } from 'react-redux';

// class NavDropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//     };
//   }

//   toggleDropdown() {
//     this.setState({ open: !this.state.open });
//   }

//   render() {
//     return (
//       <>
//       <button
//         onBlur={() => this.toggleDropdown()}
//         onFocus={() => this.toggleDropdown()}
//         className="user-info-button"
//       >
//           <div className="dropdown-button fas fa-bars"></div>
//           {
//           this.state.open && (
//             <div className="dropdown-container">
//               <div className="dropdown-top">
//                 <div>My Profile</div>
//                 <div
//                   className="logout-button"
//                   onClick={() => this.props.logout()}
//                 >
//                   Logout
//                   </div>
//               </div>
//               <div className="dropdown-bottom">
//                 <img className="nav-avatar-image" src={this.props.currentUser.avatar} />
//                 <span className="nav-username">{this.props.currentUser.username}</span>
//               </div>
//             </div>
//           )}
//       </button>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   currentUser: state.session.currentUser
// });

// export default connect(mapStateToProps, null)(NavDropdown);
