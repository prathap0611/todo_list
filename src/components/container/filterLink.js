import React from "react";

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscriber = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscriber();
  }

  render() {
    return (
      <a
        href="javasript:void;"
        onClick={evt => {
          evt.preventDefault();
          this.props.store.dispatch({
            type: "VISIBILITY_FILTER",
            filter: this.props.filter
          });
        }}
      >
        {this.props.text}
      </a>
    );
  }
}

export default FilterLink;
