// import React from 'react';
// import { Menu, Dropdown, Button } from 'antd';


// const menu = (
//     <Menu>
//         <Menu.Item key="0" >
//             <div style={{ 'display': 'flex', color: '#56CCF2' }}>
//                 <i class="far fa-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>In Progress</p>
//             </div>
//         </Menu.Item>
//         <Menu.Item key="1" >
//             <div style={{ 'display': 'flex', color: '#219653', }}>
//                 <i class="far fa-check-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Completed</p>
//             </div>
//         </Menu.Item>
//         <Menu.Item key="2">
//             <div style={{ 'display': 'flex', color: "#EB5757" }}>
//                 <i class="far fa-times-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Canceled</p>
//             </div>
//         </Menu.Item>
//     </Menu>
// );
// function Test(props) {
    
//     return (
//         <Dropdown overlay={menu} trigger={['click']}>
//             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//                 <Button shape="circle" size="small">...</Button>
//             </a>
//         </Dropdown>
//     );
// }

// export default Test;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";

function Test(props) {
    const { handleSubmit, control, reset } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
    );
}

export default Test;