export default function layout({ children }) {
    return (
        <div className="space-y-6 text-center">
            {/* <nav className="bg-red-700 p-3 text-xl">
                this is dashboard navbar
            </nav> */}
            <>
                {children}
            </>
            {/* <footer className="bg-red-700 p-3 text-xl">
                this is dashboard footer
            </footer> */}
        </div>
    )
}
