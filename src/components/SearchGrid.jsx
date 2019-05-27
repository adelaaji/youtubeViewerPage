import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import VideoViewer from "./VideoViewer";
const SortableItem = SortableElement(({ value }) => (
  <VideoViewer item={value} />
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="row">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SearchGrid extends Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.reorder(
      this.props.result.channelId,
      this.props.result.items,
      oldIndex,
      newIndex
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col my-3 mt-5">
              <h3>Search Result</h3>
              {console.log("log", this.props.result)}
            </div>
          </div>
          {this.props.result.items !== undefined && (
            <SortableList
              axis="xy"
              items={this.props.result.items}
              onSortEnd={this.onSortEnd}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchGrid;
