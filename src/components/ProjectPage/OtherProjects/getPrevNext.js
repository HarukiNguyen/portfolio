export default function getPrevNext(currId, maxId, minId) {
  if (currId !== null && maxId !== null && minId !== null) {
    if (currId !== minId) {
      setPrevId(currId - 1);
    } else {
      setPrevId(maxId);
    }
    if (currId !== maxId) {
      setNextId(currId + 1);
    } else {
      setNextId(minId);
    }
  }
}
