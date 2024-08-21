
async function getInfo() {
  const res = await fetch("http://localhost:4500/api/info/salones");
  const resJson = await res.json();
  return resJson
}