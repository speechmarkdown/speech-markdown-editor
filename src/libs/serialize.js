export function modifierToSMD(node) {
  const clonedNode = Object.assign({}, node);
  clonedNode[clonedNode.type] = clonedNode[clonedNode.type] || null;
  delete clonedNode.children;
  delete clonedNode.type;
  delete clonedNode.value;
  return Object.keys(clonedNode)
    .map((key) => {
      return `${key}${node[key] ? `:"${node[key]}"` : ""}`;
    })
    .join(";");
}

export function sectionToSMD(node) {
  const clonedNode = Object.assign({}, node);
  clonedNode[clonedNode.type] = null;
  delete clonedNode.children;
  delete clonedNode.type;
  delete clonedNode.value;
  return Object.keys(clonedNode)
    .map((key) => {
      return `${key}${node[key] ? `:"${node[key]}"` : ""}`;
    })
    .join(";");
}

export function serializeToSMD(nodes) {
  let smd = "";
  nodes.forEach((node) => {
    console.log("NODE", node);
    switch (node.type) {
      case "audio":
        console.log("AUIOD", node);
        smd += `!["${node.value}"]`;
        break;
      case "address":
      case "emphasis":
      case "cardinal":
      case "characters":
      case "date":
      case "expletive":
      case "fraction":
      case "interjection":
      case "ipa":
      case "number":
      case "ordinal":
      case "phone":
      case "sub":
      case "time":
      case "unit":
      case "voice":
      case "whisper":
        smd += `(${node.value})[${modifierToSMD(node)}]`;
        break;
      case "break":
        smd += `[break:"${node.break}"] `;
        break;
      case "defaults":
      case "disappointed":
      case "dj":
      case "excited":
      case "newscaster":
        smd += `#[${sectionToSMD(node)}]`;
        break;
      default:
        smd += `${node.text || ""}`;
        break;
    }
  });
  return smd;
}
