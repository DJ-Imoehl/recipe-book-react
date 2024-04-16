import { Outlet } from "react-router-dom"
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from '../themes/MainTheme';
import HeadingComponent from '../components/HeadingComponent';

const Layout = () => {

    return (
    <ThemeProvider theme={mainTheme}>
        <div className="App">
            <HeadingComponent></HeadingComponent>
            <Outlet/>
        </div>
    </ThemeProvider>
    )
}

export default Layout;