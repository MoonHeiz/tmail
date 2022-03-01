export const generateHash = (length: number = 5) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.apply(0, Array(length))
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join('');
};
