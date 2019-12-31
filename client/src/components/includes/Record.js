import React from "react";

const Record = props =>{
	return (
        <tr>
            <td>{props.sn}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.department}</td>
            <td>{props.user.position}</td>
            <td>{props.user.games}<br/><a href={props.user.fileUrl} alt={props.user.name}>Download Form</a></td>
            <td><img src={props.user.imageUrl} alt={props.user.name} width="190px" height="220px"/></td>
        </tr>    
    );
}

export default Record;