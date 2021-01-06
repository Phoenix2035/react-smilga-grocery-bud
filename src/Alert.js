import React, {useEffect} from 'react'

const Alert = ({msg, type, removeAlert, list}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 2500)

        return () => clearTimeout(timeout)
    }, [list])

    return (
        <p className={`alert alert-${type}`}>
            {msg}
        </p>
    )
}

export default Alert
