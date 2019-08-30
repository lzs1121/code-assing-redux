import React from 'react';
import './Select.css';

class Option extends React.Component{
    constructor(props){
      super(props);
      this.onSelect = this.onSelect.bind(this);
    }
  
    onSelect(e){
      e.preventDefault();
      this.props.onSelect(this.props.option);
    }
    
    render(){
      return (
        <li onClick={this.onSelect}>{this.props.option.value}</li>
      );
    }
  }

class Select extends React.Component{
    constructor(props){
      super(props);
    //   this.onOpen = this.onOpen.bind(this);
    //   this.onSelect = this.onSelect.bind(this);
      this.state = {
        selected: null,
        opened: false
      };
    }
  
    onOpen= () => {
      this.setState({
        opened: !this.state.opened
      });
    }
  
    onSelect = option => {
      this.setState({
        selected: option,
        opened: false
      }, ()=> {
        //console.info(this.state);
      });
    }
  
    getOptions(){
      return this.props.options.map( o => <Option key={o.key} option={o} onSelect={this.onSelect} />);
    }
    
    render(){
      let items = this.getOptions();
      let selected = this.state.selected ? 
        this.state.selected.value : 'Select';
      let cssClass = this.state.opened ? 'show': 'hide';
      
      return (
        <div className="select" onClick={this.onOpen}>
          <span>
            {selected}
          </span>
          <ul className={cssClass}>{items}</ul>
        </div>
      );
    }
  }

  export default Select;


