import { ThemeContext } from './theme-context'

const { Provider, Consumer } = ThemeContext
function ThemedButton(props) {
    return (
        <Consumer>
            {
                theme => {
                    <button {...props} style={{ backgroundColor: theme.background }}></button>
                }
                // 这里的props指的是 ThemedButton直接传递过来的参数
            }
        </Consumer>
    )
}

export default ThemedButton;