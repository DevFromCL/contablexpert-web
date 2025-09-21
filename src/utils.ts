export const formatRut = (value: string): string => {
  // Quitamos cualquier caracter que no sea número o K/k
  const clean = value.replace(/[^0-9kK]/g, "").toUpperCase();

  if (clean.length === 0) return "";

  // Último dígito es el verificador
  let body = clean.slice(0, -1);
  const dv = clean.slice(-1);

  // Formatear el cuerpo con puntos cada 3 dígitos desde la derecha
  let formattedBody = "";
  while (body.length > 3) {
    formattedBody = "." + body.slice(-3) + formattedBody;
    body = body.slice(0, -3);
  }
  formattedBody = body + formattedBody;

  return `${formattedBody}-${dv}`;
};