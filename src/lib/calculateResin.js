
function parseRatio(ratio) {
  const [ratAstr, ratBstr] = ratio.split(":");
  return [Number(ratAstr), Number(ratBstr)];
}

export default function calculateResin (total, ratStr) {
  const totalValid = total > 0;
  const ratioValid = /^\s*[1-9][0-9]*\s*:\s*[1-9][0-9]*\s*$/.test(ratStr);

  if (!totalValid || !ratioValid)
    return [0, 0, totalValid, ratioValid];

  const [ratA, ratB] = parseRatio(ratStr);
  const ratio = ratA / ratB;

  const B = total / (1 + ratio);
  const A = B * ratio;

  return [A, B, true, true];
}
