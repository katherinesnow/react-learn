// function ThemedButton(props) {
//     return (<button theme={props.theme}>props传递参数</button>)
// }

// // 中间组件
// function Toolbar(props) {
//     // Toolbar 组件必须添加一个额外的 theme 属性
//     // 然后传递它给 ThemedButton 组件
//     return (
//         <div>
//             <ThemedButton theme={props.theme} />
//         </div>
//     );
// }

// class App extends React.Component {
//     render() {
//         return <Toolbar theme="dark" />;
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// 创建一个theme Context, 默认theme的值为light
const ThemeContext = React.createContext('light')
function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            { theme => <button {...propss} theme={theme} />}
        </ThemeContext.Consumer>
    )   
}

// 中间组件
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value='dark'>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

