export default function (): number {
  const birthday = new Date("2001-8-29");
  const ageDifMs = Date.now() - birthday.getTime();
  return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
}
