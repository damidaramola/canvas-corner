import React from 'react';
import styles from '../styles/MenuDropdown.module.css';
import Dropdown from "react-bootstrap/Dropdown";


const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className='fa-solid fa-ellipsis'
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MenuDropdown = () => {

    return render(
        <Dropdown className='ml-auto' drop='left'>
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu className='text-center'>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={() => { }}
                    aria-label='edit'>
                <i className='fas fa-edit' />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={() => { }}
                    aria-label='delete'>
                <i className='fas fa-trash-alt' />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>,
    )
};

