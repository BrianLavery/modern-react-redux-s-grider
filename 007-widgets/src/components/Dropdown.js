import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    
    useEffect(() => {
        // Event Listeners wired manually always get called before those that are created using React 'onClick'
        // Then React calls its event listeners in order from child element up to parent
        const onBodyClick = (event) => {
            // We want to check if we clicked inside the dropdown div (where we added a ref)
            // If we did then we don't want this event listener to do anything
            if (!ref.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.body.addEventListener('click', onBodyClick, { capture: true })

        // Cleanup function is invoked before we call this event listener
        // OR if we remove the Dropdown component from the screen
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true })
        }
    }, [])
    
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }
        
        return (
            <div key={option.value} className='item' onClick={() => {
                onSelectedChange(option)
            }}>
                {option.label}
            </div>
        )
    })

    return (
        // We assign a ref here because we want to detect if a click occurred inside this element or not
        // If occurred inside this element then we deactive the event listener on the body
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'> Select a colour</label>
                <div
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown