const callApi = async (url, options = {}) => {
    options.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    
    const urlString = "http://localhost:4000" + url;
    const response = await fetch(urlString, options);
    const data = await response.json();

    return data;
  };

  const api = {
    users: {
      list() {
        return callApi("/usuarios");
      },
      create(usuario) {
        return callApi("/usuarios", {
          method: "POST",
          body: JSON.stringify(usuario),
        });
      },
      edit(usuario) {
        return callApi(`/usuarios/${usuario._id}`, {
          method: "PUT",
          body: JSON.stringify(usuario),
        });
      },
      getProductId(id) {
        return callApi(`/usuarios/${id}`);
      },      
    },

  };
  
  export default api;