export default function ErrorMessage({ message }: { message: string }) {
  return <p className="center error">{message}</p>;
}
