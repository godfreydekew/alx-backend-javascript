export default function cleanSet(set, startString) {
  let endstr = '';
  set.forEach((element) => {
    if (element.startsWith(startString) && startString.length) {
      endstr += `${element.slice(startString.length)}-`;
    }
  });
  return endstr.slice(0, endstr.length - 1);
}
