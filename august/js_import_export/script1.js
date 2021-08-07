function ReadyFunc(url, tr){
   

    let ajx = fetch(url).then(res=> res.json()).then(data=>{

        tr.innerHTML += `
        <td> ${data.userId} </td>
        <td> ${data.id} </td>
        <td> ${data.title} </td>
        <td> ${data.completed} </td>
        `
    });
    return ajx;
}

export {ReadyFunc};