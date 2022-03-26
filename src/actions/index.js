

export const fetchDado = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/api/lanzar`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
         console.log(json.valor)
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        }) 
        //ensayando
}


//TODO: agregar las demas acciones