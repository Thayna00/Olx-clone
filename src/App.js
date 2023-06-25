import React from 'react';
import {connect} from 'react-redux';

const Page = (props) =>{
  return (
    <div>Nanaaa</div>
  );
}

const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
