const Footer = () => {
    return(
        <footer className="fontstart flex flex-col w-full justify-center items-center text-2xl py-4">
            <p>
                © Diego Amachi 2023 - {new Date().getFullYear()}
            </p>
            <a href="https://github.com/dev101101/Porfolio" > View website source on GitHub</a>
        </footer>
    )
}

export default Footer