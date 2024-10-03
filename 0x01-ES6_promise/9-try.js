export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result); // Append result to queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Append error message to queue
  } finally {
    queue.push('Guardrail was processed'); // Always Append this
  }

  return queue;
}
