import { PersonStanding } from "lucide-react";

export default function People({
  flexDir = "row",
  className = "",
  numPeople = 8,
}) {
  const colors = ["#557b3d", "#f5d400", /* "#bea301", */ "#242424"];
  return (
    <div className={`flex flex-${flexDir} ${className}`}>
      {[...Array(numPeople)].map((_, i) => (
        <PersonStanding key={i} size={28} color={colors[i % colors.length]} />
      ))}
    </div>
  );
}
