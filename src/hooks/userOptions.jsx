import React from 'react'
import {Dropdown, Icon} from "semantic-ui-react";


export  default () => (
    <span>
        Loged-in as <i>administrator</i> {' '}
        <Dropdown text={"Dylan Hoogduin"} inline   pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item><Icon name={'log out'}/>Log-out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </span>
);