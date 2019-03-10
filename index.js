// 定义组件方式：函数定义/类定义组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

class WelcomeES extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}


function formatName(user) {
    return user.firstName + '' + user.lastName
}

const user = {
    firstName: 'Catherine',
    lastName: 'Z.',
    avatarUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1539244947&di=3bf5a94110715cf1cbe33850be13d930&src=http://b-ssl.duitang.com/uploads/item/201702/15/20170215005803_Wm2E3.jpeg',
}

// 1.在 JSX( 一种 JavaScript 的语法扩展) 中使用表达式
// 我们同样推荐在 JSX 代码的外面扩上一个小括号
// 在编译之后，JSX其实会被转化为普通的JS对象
const element = (
    <h1>
        Hello, { formatName(user) }
    </h1>
)

// 2. JSX 其实可以在 if 或者 for 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以：
function getGreeting(user) {
    if(user) {
        return <h1>Hello, { formatName(user) }</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

// 3. JSX属性
// 你可以使用引号来定义以字符串为值的属性
// 也可以使用大括号来定义以 JavaScript 表达式为值的属性：

const element_attr = <div tabIndex='0'></div>
const element_attr2 = <img src={user.avatarUrl}></img>
// 切记你使用了大括号包裹的 JavaScript 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式。

// 4. JSX防注入攻击
// 5. JSX代表Objects
//    Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

// 事件处理--函数定义组件
function ActionLink() {
    function handleClick(e) {
        e.preventDefault()
        console.log('This link was clicked.')
    }
    return (
        <a href='#' onClick={ handleClick } >
            Click me!
        </a>
    )
}

ReactDOM.render(
    <ActionLink></ActionLink>,
    document.getElementById('event')
);

// 事件处理--类定义组件
class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            isToggleOn: true,
            name: 'hello world',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }), () => {
            console.log(this.state.isToggleOn,'===this.state.isToggleOn')
        })
    }

    preventPop(name, e) {
        // 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
        console.log(e, '事件对象 e 要排在所传递参数的后面')
        e.preventDefault()
        alert(name)
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleClick } >
                    { this.state.isToggleOn ? 'ON': 'OFF' }
                </button>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
            </div>
        )
    }
}

ReactDOM.render(
    <Toggle></Toggle>,
    document.getElementById('event2')
);

// 添加渲染
function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

ReactDOM.render(
    <Greeting isLoggedIn={ false }></Greeting>,
    document.getElementById('condition')
)

// 阻止组件渲染
function WarningBanner(props) {
    if(!props.warn)
        return null

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showWarning: true,
        }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState((prevState) => ({
            showWarning: !prevState.showWarning
        }), () => {
            // console.log(this.state.showWarning, '===this.showWarning==')
            // console.log(222)
        })
        // this.setState({
        //     showWarning: !this.state.showWarning
        // }, () => {
        //     console.log('setState Finish')
        // })
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                <WarningBanner warn={ this.state.showWarning }></WarningBanner>
                <button onClick={ this.handleToggleClick }>
                    { this.state.showWarning ? 'Hide': 'Show' }
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('condition2')
)

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        // 不能再constructor 中使用setState
        // this.setState({
        //     value: '222'
        // })
    }
    componentWillMount() {
        console.log('componentWillMount')
        this.setState({
            value: 'initvalue'
        }, () => {
            console.log('componentWillMount setState callback')
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert('A name was submitted：' + this.state.value)
        event.preventDefault()
    }

    render() {
        console.log('render')
        return (
            <form onSubmit={ this.handleSubmit } >
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={ this.handleChange } />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('form')
)

