import React from "react"

const Link = ({ className, path, children }) => {
    const onClick = (event) => {
        // We want to allow user to hold down Ctrl and click to open in a new tab
        if (event.metaKey || event.ctrlKey) {
            return
        }
        
        event.preventDefault()
        window.history.pushState({}, '', path)

        // Below communicates a navigation event to route components
        // Seems like we can create custom events then listen out for them elsewhere
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a onClick={onClick} className={className} href={path}>{children}</a>
}

export default Link