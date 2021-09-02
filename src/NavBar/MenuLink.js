import React from 'react';

const MenuLink = () => {
   const MenuLinks =[
    {
      name:'home',
      id:1
    },
    {
      name:'about me',
      id:2
    },
    {
      name:'services',
      id:3
    },
    {
      name:'how work',
      id:4
    },
    {
      name:'portfolio',
      id:5
    },
    {
      name:'contact',
      id:6
    }]


    const handelFocus = (id) => {
      console.log(id)
    }
   const Links = MenuLinks.map(link => <li  key={link.id} onClick={()=>handelFocus(link.id)}>
     {link.name}
     </li>
    )
  return (
    <ul>
      {Links}
    </ul>
   );
}
export default MenuLink;
