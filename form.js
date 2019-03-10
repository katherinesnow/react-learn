/**
 * 受控组件
 */
class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    /**
     * [handleInputChange 多个输入的解决办法]
     * 当你有处理多个受控的input元素是，你可以通过给每个元素添加一个name户型，来让处理函数根据event.target.name的值来选择做什么
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    handleInputChange(event) {
        const target = event.target
        const value = target.type ==='checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                  Is going:
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                  Number of guests:
                  <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation></Reservation>,
    document.getElementById('root')
);

class NameFrom extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert('A name was submitted:' + this.input.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } >
                <label>
                    Name:
                    <input type="text" ref={ (input) => this.input = input } />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NameFrom></NameFrom>,
    document.getElementById('root2')
);


// 状态提升
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            temperature: '',
        }
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value,
        })
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        const temperature = this.state.temperature

        return (
            <div>
                <p>输入一个摄氏温度</p>
                <input
                    value={ temperature }
                    onChange={ this.handleChange }
                />
                <BoilingVerdict celsius={ parseFloat(temperature)}></BoilingVerdict>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator></Calculator>,
    document.getElementById('root3')
);

function Hello(props) {
    return <div>Hello, { props.toWhat }</div>
}

function HelloWorld() {
    return <Hello toWhat="World"></Hello>
}

ReactDOM.render(
    <HelloWorld></HelloWorld>,
    document.getElementById('upcase')
);

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        // 直接使用原生API使test输入框获取焦点
        // 注意：通过"current" 获得DOM节点
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={ this.textInput } />
                <input type="button" value="Focus the text input" onClick={ this.focusTextInput } />
            </div>
        )
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    componentDidMount() {
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <CustomTextInput ref={ this.textInput } />
        )
    }
}

ReactDOM.render(
    <AutoFocusTextInput></AutoFocusTextInput>,
    document.getElementById('refs')
);