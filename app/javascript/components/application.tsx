import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
    arg: string;
}

const App = ({ arg }: AppProps) => {
    return (
        <>
            {`Hello, ${arg}!`}
            <p> This is a live reload test! {arg}</p>
            <p> This is a live reload test! {arg}</p>
            <p> This is a live reload test! {arg}</p>
            <p> This is a live reload test! {arg}</p>
        </>
    );
};

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("root");
    ReactDOM.render(<App arg="Rails 7 with ESBuild" />, rootEl);
});
