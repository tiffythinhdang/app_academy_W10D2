import React from "react";

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {index: 0};

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(idx) {
    this.setState({index : idx});
  }

  render () {
    let tabs = this.props.tabs;
    return (
      <div className="tabs-table">
        <div className="tab-headers">
          { tabs.map( (tab, i) =>
            <h1 className="tab" onClick={() => this.changeTab(i)}>{tab.title}</h1>
          )}
        </div>
        <article className="tab-content">{this.props.tabs[this.state.index].content}</article>
      </div>
    );
  }
}

export default Tabs;


