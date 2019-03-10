import React, { Component } from 'react';
import { ThemeContext } from './theme-context'

const { Provider, Consumer } = ThemeContext

class ThemedButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Consumer>
                <div></div>
            </Consumer>
        )
    }
}
// function ThemedButton(props) {
//     return (
//         <Consumer>
//             {
//                 theme => {
//                     <button {...props} style={{ backgroundColor: theme.background }}></button>
//                 }
//                 // 这里的props指的是 ThemedButton直接传递过来的参数
//             }
//         </Consumer>
//     )
// }

export default ThemedButton;