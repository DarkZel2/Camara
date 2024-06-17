async function getUsuarios() {
  const res = await fetch("http://localhost:4500/api/usuarios");
  const resJson = await res.json();
  resJson.forEach(users => {
    usuarios.push(users);
  });
  return usuarios;
};

getUsuarios();

export const usuarios = [];