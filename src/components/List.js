import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { items: state.items };
};

const ConnectedList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;