import React from 'react';

const MenuButton = props => {
    return (
        <a href={props.hyperlink}>{props.children}</a>
    );
};

export default MenuButton;