import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';


const Counter = () => {
  const { count } = useSelector((state) => ({
    ...state.count
  }));
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <div className={`num ${count < 0 ? 'red' : ''}`}>{count}</div>
      <div className="buttons">
        <button type="button" onClick={() => dispatch({ type: 'SUMA' })}> + </button>
        <button type="button" onClick={() => dispatch({ type: 'RESTA' })}> - </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(null, mapStateToProps)(Counter);
