import React from 'react'

const defaultState = {
    dark: false,
    toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

class ThemeProvider extends React.Component {
    state = {
        dark: false,
    }

    toggleDark = () => {
        
        // gets the current state.dark value and switches the value to the opposite
        let dark = !this.state.dark 
        
        // stores the new value in localStorage before setting it back to state using the setState function, so that it persists over page refreshes
        localStorage.setItem('dark', JSON.stringify(dark)) 
        this.setState({ dark })
    }

    componentDidMount() {
        const lsDark = JSON.parse(localStorage.getItem('dark'))
        if (lsDark) {
            this.setState({ dark: lsDark })
        } else if (supportsDarkMode()) {
            this.setState({ dark: true })
        }
    }

    render () {
        const { children } = this.props
        const { dark } = this.state
        
        // the dark value from state and the toggleDark function are passed to the Provider
        return (
            <ThemeContext.Provider
                value={{
                    dark,
                    toggleDark: this.toggleDark,
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext

export { ThemeProvider }

