export default function guardrail(mathFunction) {
  const arrQueue = [];
  const message = 'Guardrail was processed';
  try {
    const value = mathFunction();
    if (Number.isInteger(value)) {
      arrQueue.push(value);
    }
  } catch (ex) {
    const error = `Error: ${ex.message}`;
    arrQueue.push(error);
  }
  arrQueue.push(message);

  return arrQueue;
}
