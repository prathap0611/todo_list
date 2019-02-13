import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ visibilityFilter }) => {
  return { currentFilter: visibilityFilter };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickHandler: evt => {
      evt.preventDefault();
      dispatch({
        type: "VISIBILITY_FILTER",
        filter: ownProps.filter
      });
    }
  };
};

const FilterLink = ({ currentFilter, filter, clickHandler, text }) => {
  if (currentFilter === filter) {
    return <span>{text}</span>;
  } else {
    return (
      <a href="javasript:void;" onClick={clickHandler}>
        {text}
      </a>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
