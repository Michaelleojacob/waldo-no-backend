import { useState } from "react"

const App = () => {
    const [isGameActive, setIsGameActive] = useState(false)
    return (
        <div>
            <div>
                image one
                <button>start</button>
            </div>
            <div>
                image two
                <button>start</button>
            </div>

        </div>
    )
}

export default App