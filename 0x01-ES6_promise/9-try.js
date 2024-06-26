export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (error) {
    return [error, 'Guardrail was not processed'];
  }
}
