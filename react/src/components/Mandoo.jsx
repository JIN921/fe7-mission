import mandoo from "../assets/mandoo.webp";

export default function Mandoo({ width = "50px" }) {
  return (
    <>
      <img src={mandoo} width={width} alt="만두" />
    </>
  );
}
