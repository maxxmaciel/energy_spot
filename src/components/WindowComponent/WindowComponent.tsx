import React from "react";
import { ThemeProvider } from "styled-components";
import WindowComponentStyled from "./WindowComponentStyled";
export interface ThemeWindowComponent {
    width: number | string;
    backgroundColorTitle?: string
}

type Props = {
    title?: string;
    children?: React.ReactNode;
    width?: number | string;
    show?: boolean
    backgroundColorC?: string
    backgroundColorTitle?: string
    colorTitle?: string
    logo?: string
    theme?: ThemeWindowComponent
    maxHeight?: number
    height?: string
}


const themeDefault: ThemeWindowComponent = {
    width: '100%',
    backgroundColorTitle: "rgb(31, 45, 61) ",
};





const WindowComponentRoot = ({ children, show, backgroundColorC, logo, maxHeight, height = "", backgroundColorTitle, colorTitle, theme = themeDefault }: Props): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <WindowComponentStyled show={show} backgroundColorC={backgroundColorC}
                maxHeight={maxHeight} backgroundColorTitle={backgroundColorTitle} ColorTitle={colorTitle}>
                <div className="c">
                    {children}
                </div>
            </WindowComponentStyled >
        </ThemeProvider>
    )
}

interface IWindowComponentHeader {
    children?: React.ReactNode;
}

const WindowComponentHeader = ({ children }: IWindowComponentHeader) =>
    <div className="t">
        {children}
    </div>


const WindowComponentHeaderTitle = ({ children }: IWindowComponentHeader) =>
    <>
        {children}
    </>


const WindowComponentHeaderLogo = (logo: string) =>
    <div className="c_logo">
        <img src={logo} alt="" />
    </div>

interface IWindowComponentContent {
    children?: React.ReactNode;
    height?: string;
    minHeight?: string;
}


const WindowComponentContent = ({ children, height = "auto", minHeight }: IWindowComponentContent) =>
    <div className="c_1" style={{ width: "auto", height: height, minHeight: minHeight }}>
        {children}
    </div>

export const WindowComponent = {
    Root: WindowComponentRoot,
    Header: WindowComponentHeader,
    Title: WindowComponentHeaderTitle,
    Logo: WindowComponentHeaderLogo,
    Content: WindowComponentContent,
}

export default WindowComponent;


