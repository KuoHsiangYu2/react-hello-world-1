import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    /* 建構子 */
    super();
    console.log('props =', props);
    console.log('constructor(props)');
    this.handleChange = this.handleChange.bind(this);
    this.handleClickResult = this.handleClickResult.bind(this);

    this.handleItemValueChange = this.handleItemValueChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);

    this.itemValueRef = React.createRef();

    /* 設定 state初始值 */
    this.state = {
      message: '',
      data: ['first item.'],
      inputValue: '',
    };
  }

  handleItemValueChange(e) {
    /* 當 清單名稱 更改時，更新 state 裡的 inputValue */
    console.log('handleItemValueChange(e)');
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleAddItem() {
    /* 新增清單 */
    const {
      data,
      inputValue,
    } = this.state;
    console.log('handleAddItem()');
    if (inputValue === '') {
      window.alert('清單名稱不可為空');
      return;
    }
    var newData = data.concat(inputValue);
    this.setState({
      data: newData,
    });
    // ReactDOM.findDOMNode(this.refs.itemValueRef).value = '';
    this.itemValueRef.current.value = '';
  }

  handleRemoveItem(i) {
    /* 移除清單 */
    const {
      data,
    } = this.state;
    console.log('handleRemoveItem(i)');
    var arr = data;
    arr.splice(i, 1);
    this.setState({
      data: arr,
    });
  }

  handleChange(e) {
    /* 當輸入值更改時，更新 state 裡的 message */
    /* window.alert('handleClick method'); */
    /* window.alert(e.target.value); */
    console.log('handleChange(e)');
    this.setState({
      message: e.target.value,
    });
  }

  handleClickResult() {
    /* 顯示使用者輸入的 message */
    console.log('handleClickResult()');
    const {
      message,
    } = this.state;
    window.alert('您輸入的是 = ' + message);
  }

  render() {
    const {
      data,
    } = this.state;
    console.log('render()');
    console.log('this.state =', this.state);
    console.log('this.props =', this.props);
    return (
      <div>
        Hello world<br />
        我的第一隻React Framework前端程式。<br />
        <br />
        <hr />
        <input
          type="text"
          // onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleChange(e)}
        />
        &nbsp;&nbsp;
        <input
          type="button"
          onClick={() => this.handleClickResult()}
          value="送出"
        />
        <br />
        <br />
        <div>
          <h4>todo list 清單</h4>
          <ol>
            {
              data.map(function (item, i) {
                return (
                  <li
                    key={`key_${i}`}
                    onClick={this.handleRemoveItem.bind(this, i)}
                  >
                    {item}
                  </li>
                );
              }.bind(this))
            }
          </ol>
          <input
            ref={this.itemValueRef}
            type="text"
            // onChange={(e) => this.handleItemValueChange(e)}
            onBlur={(e) => this.handleItemValueChange(e)}
          />
          &nbsp;&nbsp;
          <input
            type="button"
            onClick={() => this.handleAddItem()}
            value="新增項目"
          />
        </div>
      </div>
    );
  }
}

export default App;
