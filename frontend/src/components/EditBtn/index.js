import React from 'react'
import './index.css'

import { FiEdit } from "react-icons/fi";

const EditBtn = () => {
    return (
        <button type="button" class="btn btn border border-info EditBtn">
            <FiEdit color='#17a2b8' />
        </button>
    );
}

export default EditBtn;

