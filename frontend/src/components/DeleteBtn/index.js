import React from 'react'
import './index.css'

import { FiTrash2 } from "react-icons/fi";

const DeleteBtn = () => {
    return (
        <button type="button" class="btn btn border border-danger DeleteBtn">
            <FiTrash2 color='#dc3545' />
        </button>
    );
}

export default DeleteBtn;