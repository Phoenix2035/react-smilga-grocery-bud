import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
    return (
        <div className="grocery-list">
            {
                items.map(item =>
                    <article key={item.id} className="grocery-item">
                        <p className="title">{item.title}</p>
                        <div className="btn-container">
                            <button
                                onClick={() => editItem(item.id)}
                                type="button"
                                className="edit-btn">
                                <FaEdit/>
                            </button>

                            <button
                                onClick={() => removeItem(item.id)}
                                type="button"
                                className="delete-btn">
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                )
            }
        </div>
    )
}

export default List
